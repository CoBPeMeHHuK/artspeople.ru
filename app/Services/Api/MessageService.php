<?php

namespace App\Services\Api;
use App\Events\ChatMessage;
use App\Model\Message;
use App\Model\User;
use Illuminate\Support\Facades\Auth;

class MessageService extends AppService
{
	public function __construct()
	{
		parent::__construct();
	}
	
	public function sendMessage($request){
		$channels = 'news-action.'.$request->userSelect;
		$user_id = $request->user_id;
		$message = $request->message;
		$user = User::findOrFail($user_id);
		$user_name = $user->name;
		$user_surname = $user->surname;
		$avatarSrc =$user->avatar->src;
		
		$parameters = [
			'channels'=>$channels,
			'name'=>$user_name,
			'surname'=>$user_surname,
			'avatar'=>$avatarSrc,
			'message'=>$message,
			'user_from'=>$user_id,
			'is_read'=>0,
			'right_person'=>'',
			'type'=>'avatars'
		];

		ChatMessage::dispatch($parameters);
		
		return $parameters;
	}
	
	public function getUserMessages($request){
		
		return $this->getMessages($request);
		
	}
	
	public static function getAuthUserMessages(){
		$authUserId = Auth::id();
        $users = User::whereHas('messages_to', function ($query) use ($authUserId) {
            $query->where('user_from',$authUserId);
        })->orWhereHas('messages_from',function($query) use ($authUserId){
            $query->where('user_to',$authUserId);
        })
            ->with(array('last_messages_to'=>function($query) use ($authUserId) {
                $query->where('user_from',$authUserId);
            }))
            ->with(array('last_messages_from' =>function($query) use ($authUserId) {
                $query->where('user_to',$authUserId);
            }))
            ->with('avatar')
            ->get();
        
        return $users;
	}
	
	
	/*----------------------------------------------------Вспомогательные методы-------------------------------------*/
	
	private function getMessages($request){
		$messages =  Message::where([['user_from',Auth::id()],['user_to',$request->userSelect]])
			->orWhere([['user_to',Auth::id()],['user_from',$request->userSelect]])
			->join('users','users.id','=','messages.user_from')
			->with('avatar')
			->get();
		return $messages;
	}
	
	
}
