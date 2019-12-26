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
	
	    switch ($status) {
		
		    case FriendsRequest::FRIEND_REQUEST_STATUSES[1]:
			    $response = $this->addToFriendList($idAuth,$id);
			    break;
		
		    case FriendsRequest::FRIEND_REQUEST_STATUSES[0]:
			    $response = $this->cancelRequestToFriendList($idAuth,$id);
			    break;
		
		    case FriendsRequest::FRIEND_REQUEST_STATUSES[2]:
			    $response = $this->confirmRequestToFriendList($idAuth,$id);
			    break;
		
		    case FriendsRequest::FRIEND_REQUEST_STATUSES[3]:
			    $response = $this->deleteFromFriendList($idAuth,$id);
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
	private function addToFriendList($idAuth,$id){
		
		$getRequestFriend = FriendsRequest::where([['first_user',$idAuth],['second_user',$id]])
			->orWhere([['first_user',$id],['second_user',$idAuth]])
			->first();
		
		
		if($getRequestFriend) {
			$sendRequestToFriend = FriendsRequest::where([['first_user',$idAuth],['second_user',$id]])
				->orWhere([['first_user',$id],['second_user',$idAuth]])
				->first()
				->update([
					'status'=>FriendsRequest::FRIEND_REQUEST_STATUSES[1],
					'updated_at'=> time()
				]);
			
		} else{
			$sendRequestToFriend =  FriendsRequest::query()->create([
				'first_user'=>$idAuth,
				'second_user'=>$id,
				'status'=>FriendsRequest::FRIEND_REQUEST_STATUSES[1],
				'created_at' => time()
			]);
			
		}
		
		$saveToFriendHistory = FriendHistory::query()->create([
			'first_user'=>$idAuth,
			'second_user'=>$id,
			'status'=>FriendsRequest::FRIEND_REQUEST_STATUSES[1],
			'created' => date("Y-m-d H:i:s", time())
		]);
		
		$sendRequestToFriend && $saveToFriendHistory ? $response = ['status'=>'success'] : $response = ['status'=>'error'];
		
		return $response;
	}
	
	
	/**
	 * @param $idAuth
	 * @param $id
	 * @return array
	 */
	private function cancelRequestToFriendList($idAuth,$id){
		$getRequestFriend = FriendsRequest::where([['first_user',$idAuth],['second_user',$id]])
			->orWhere([['first_user',$id],['second_user',$idAuth]])
			->first();
		
		
		if($getRequestFriend) {
			$sendRequestToFriend = FriendsRequest::where([['first_user',$idAuth],['second_user',$id]])
				->orWhere([['first_user',$id],['second_user',$idAuth]])
				->first()
				->update([
					'status'=>FriendsRequest::FRIEND_REQUEST_STATUSES[0],
					'updated_at'=> time()
				]);
			
		} else{
			return ['status'=>'error'];
		}
		
		$saveToFriendHistory = FriendHistory::query()->create([
			'first_user'=>$idAuth,
			'second_user'=>$id,
			'status'=>FriendsRequest::FRIEND_REQUEST_STATUSES[0],
			'created' => date("Y-m-d H:i:s", time())
		]);
		
		$sendRequestToFriend && $saveToFriendHistory ? $response = ['status'=>'success'] : $response = ['status'=>'error'];
		
		return $response;
	}
	
	
	/**
	 * @param $idAuth
	 * @param $id
	 * @return array
	 */
	private function deleteFromFriendList($idAuth,$id){
		$getRequestFriend = FriendsRequest::where([['first_user',$idAuth],['second_user',$id]])
			->orWhere([['first_user',$id],['second_user',$idAuth]])
			->first();
		
		
		if($getRequestFriend) {
			$sendRequestToFriend = FriendsRequest::where([['first_user',$idAuth],['second_user',$id]])
				->orWhere([['first_user',$id],['second_user',$idAuth]])
				->first()
				->update([
					'status'=>FriendsRequest::FRIEND_REQUEST_STATUSES[4],
					'updated_at'=> time()
				]);
			
		} else{
			return ['status'=>'error'];
		}
		
		$saveToFriendHistory = FriendHistory::query()->create([
			'first_user'=>$idAuth,
			'second_user'=>$id,
			'status'=>FriendsRequest::FRIEND_REQUEST_STATUSES[4],
			'created' => date("Y-m-d H:i:s", time())
		]);
		
		$sendRequestToFriend && $saveToFriendHistory ? $response = ['status'=>'success'] : $response = ['status'=>'error'];
		
		return $response;
	}
	
	
	/**
	 * @param $idAuth
	 * @param $id
	 * @return array
	 */
	private function confirmRequestToFriendList($idAuth,$id){
		$getRequestFriend = FriendsRequest::where([['first_user',$idAuth],['second_user',$id]])
			->orWhere([['first_user',$id],['second_user',$idAuth]])
			->first();
		
		
		if($getRequestFriend) {
			$sendRequestToFriend = FriendsRequest::where([['first_user',$idAuth],['second_user',$id]])
				->orWhere([['first_user',$id],['second_user',$idAuth]])
				->first()
				->update([
					'status'=>FriendsRequest::FRIEND_REQUEST_STATUSES[2],
					'updated_at'=> time()
				]);
			
		} else{
			return ['status'=>'error'];
		}
		
		$saveToFriendHistory = FriendHistory::query()->create([
			'first_user'=>$idAuth,
			'second_user'=>$id,
			'status'=>FriendsRequest::FRIEND_REQUEST_STATUSES[2],
			'created' => date("Y-m-d H:i:s", time())
		]);
		
		$sendRequestToFriend && $saveToFriendHistory ? $response = ['status'=>'success'] : $response = ['status'=>'error'];
		
		return $response;
	}
    
}
