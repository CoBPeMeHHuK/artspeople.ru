<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\AppController;
use App\Model\FriendsRequest;
use Illuminate\Support\Facades\Auth;

class NotificationsController extends AppController
{
	
	protected $notificationsService;
	
	public function getFriendsNotifications(){
		
		$idAuth = Auth::id();
		
		$getFriendRequests = FriendsRequest::where(function($query) use ($idAuth) {
		    $query->where('second_user',$idAuth)
                ->orWhere('first_user',$idAuth);
        })
            ->where('status',FriendsRequest::FRIEND_REQUEST_STATUSES[1])
            ->where('last_user_change_id','!=',$idAuth)
			->with(['user.avatar','user.userInformation'])
			->get();
		
		return [
			'requests'=>$getFriendRequests,
			'statuses'=>FriendsRequest::FRIEND_REQUEST_STATUSES
		];
	
	}
}
