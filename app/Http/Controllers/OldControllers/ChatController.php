<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\AppController;
use App\Model\Image;
use App\Model\Message;
use App\Model\User;
use Exception;
use Illuminate\Http\Request;
use App\Model\Slider;
use Illuminate\Support\Facades\Auth;

class ChatController extends AppController
{

   // Новый коментарий комита

	/**
	 * @param $id
	 * @return array
	 */

	public function getUsers(){

	 $user = $this->getAuthUser() ? $this->getAuthUser() : false;

	 $users = $this->getMessageUser() ? $this->getMessageUser() :false;

	 $userAvatar = $this->getAuthUserAvatar();


	 $parameters = [
	     'user'=>$user,
         'userAvatar'=>$userAvatar,
         'users'=>$users
     ];

	 return $parameters;

	}





    /**
     * @param Request $request
     * @return mixed
     */

	public function getUserMessages(Request $request){
        $messages =  Message::where([['user_from',Auth::id()],['user_to',$request->userSelect]])
            ->orWhere([['user_to',Auth::id()],['user_from',$request->userSelect]])
            ->join('users','users.id','=','messages.user_from')
            ->with('avatar')
            ->get();
        return $messages;
    }






    /**
     * @return bool|\Illuminate\Contracts\Auth\Authenticatable|null
     */

	private function getAuthUser(){
	    if(Auth::check()) {
            return Auth::user();
        } else{
	        return false;
        }
    }

    private function getAuthUserAvatar(){
	    if(Auth::check()){
	        return Image::where(['element_id'=>Auth::id(),'type'=>'avatars','entity'=>User::class])->get();
        }else {
	        return false;
        }
    }





    /**
     * @return array
     */
    private function getMessageUser(){

        $authUserId = Auth::id();
        $users = User::where('id','!=',$authUserId)->with('avatar')->get();

        $result=[];
        foreach($users as $user){
            $message =  Message::where([['user_from',$authUserId],['user_to',$user->id]])
                ->orWhere([['user_to',$authUserId],['user_from',$user->id]])
                ->orderBy('id','desc')
                ->first();

            $countUnreadMessage =  Message::where([['user_from',$authUserId],['user_to',$user->id]])
                ->orWhere([['user_to',$authUserId],['user_from',$user->id]])
                ->where('is_read',0)
                ->get();

            if($message){

                $result[] = [
                    'id'=>$user->id,
                    'name'=>$user->name,
                    'surname'=>$user->surname,
                    'lastMessage'=>$message->text,
                    'timeMessage'=>DATE_FORMAT($message->created_at,'M d'),
                    'src'=>$user->avatar->src,
                    'type'=>$user->avatar->type,
                    'countUnreadMessages'=>count($countUnreadMessage)
                ];
            }
        }

        return $result;

    }
}
