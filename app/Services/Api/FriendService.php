<?php


namespace App\Services\Api;



use App\Model\FriendHistory;
use App\Model\FriendsRequest;
use Illuminate\Support\Facades\Auth;

class FriendService extends AppService
{

    public function __construct()
    {
        parent::__construct();
    }
	
	/**
	 * @param $request
	 * @return array
	 */
    public function requestToFriendList($request){
	    $status = $request->status;
	    $id = $request->user;
	    $idAuth = Auth::id();

        $getRequestFriend = $this->getRequestFriend($idAuth,$id);
	
	    switch ($status) {
		
		    case FriendsRequest::FRIEND_REQUEST_STATUSES[1]:
			    $response = $this->addToFriendList($idAuth,$id,$getRequestFriend);
			    break;

            case FriendsRequest::FRIEND_REQUEST_STATUSES[3]:
            case FriendsRequest::FRIEND_REQUEST_STATUSES[0]:
			    $response = $this->deleteFromFriendList($idAuth,$id,$getRequestFriend);
			    break;
		
		    case FriendsRequest::FRIEND_REQUEST_STATUSES[2]:
			    $response = $this->confirmRequestToFriendList($idAuth,$id,$getRequestFriend);
			    break;

            default:
			    $response = ['status'=>'error'];
	    }
	
	    return $response;
    }
    
    
    /*------------------------------------------ВСПОМОГАТЕЛЬНЫЕ МЕТОДЫ--------------------------------------*/
	/**
	 * @param $idAuth
	 * @param $id
	 * @return array
	 */
	private function addToFriendList($idAuth,$id, $getRequestFriend){
		

	    if($getRequestFriend != false) {
			$sendRequestToFriend = $getRequestFriend->update([
					'status'=>FriendsRequest::FRIEND_REQUEST_STATUSES[1],
					'last_user_change_id'=>$idAuth,
					'updated_at'=> time()
				]);

		} else{
			$sendRequestToFriend =  FriendsRequest::query()->create([
				'first_user'=>$idAuth,
				'second_user'=>$id,
				'last_user_change_id'=>$idAuth,
				'status'=>FriendsRequest::FRIEND_REQUEST_STATUSES[1],
				'created_at' => time()
			]);

		}

		$saveToFriendHistory = $this->saveToFriendHistory($idAuth,$id,FriendsRequest::FRIEND_REQUEST_STATUSES[1]);
		
		$sendRequestToFriend && $saveToFriendHistory ? $response = ['status'=>'success'] : $response = ['status'=>'error'];
		
		return $response;
	}


    /**
     * @param $idAuth
     * @param $id
     * @param $getRequestFriend
     * @return array
     */
	private function deleteFromFriendList($idAuth,$id,$getRequestFriend){

		if($getRequestFriend != false) {
			$sendRequestToFriend = $getRequestFriend->update([
					'status'=>FriendsRequest::FRIEND_REQUEST_STATUSES[0],
					'last_user_change_id'=>$idAuth,
					'updated_at'=> time()
				]);
			
		} else{
			return ['status'=>'error'];
		}

		$saveToFriendHistory = $this->saveToFriendHistory($idAuth,$id,FriendsRequest::FRIEND_REQUEST_STATUSES[0]);
		
		$sendRequestToFriend && $saveToFriendHistory ? $response = ['status'=>'success'] : $response = ['status'=>'error'];
		
		return $response;
	}


    /**
     * @param $idAuth
     * @param $id
     * @param $getRequestFriend
     * @return array
     */
	private function confirmRequestToFriendList($idAuth,$id,$getRequestFriend){


        if($getRequestFriend != false) {
			$sendRequestToFriend = $getRequestFriend->update([
					'status'=>FriendsRequest::FRIEND_REQUEST_STATUSES[2],
					'last_user_change_id'=>$idAuth,
					'updated_at'=> time()
				]);
			
		} else{
			return ['status'=>'error'];
		}

        $saveToFriendHistory = $this->saveToFriendHistory($idAuth,$id,FriendsRequest::FRIEND_REQUEST_STATUSES[2]);
		
        $sendRequestToFriend && $saveToFriendHistory ? $response = ['status'=>'success'] : $response = ['status'=>'error'];
		
		return $response;
	}

	private function getRequestFriend($idAuth,$id){
	    $friendsRequest = FriendsRequest::where([['first_user',$idAuth],['second_user',$id]])
            ->orWhere([['first_user',$id],['second_user',$idAuth]])
            ->first();

	    $friendsRequest ? $response = $friendsRequest :  $response = false;

	    return $response;

	}

    private function saveToFriendHistory($idAuth,$id,$status){
	    return FriendHistory::query()->create([
            'first_user'=>$idAuth,
            'second_user'=>$id,
            'status'=>$status,
            'created' => date("Y-m-d H:i:s", time())
        ]);
    }
    
}
