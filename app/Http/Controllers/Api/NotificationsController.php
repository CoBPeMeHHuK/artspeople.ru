<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\AppController;
use App\Model\FriendsRequest;
use App\Services\Api\WorkService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class NotificationsController extends AppController
{
	
	protected $notificationsService;
	
	public function getFriendsNotifications(){
		
		$idAuth = Auth::id();
		
		$getFriendRequests = FriendsRequest::where('second_user',$idAuth)
			->where('status',FriendsRequest::FRIEND_REQUEST_STATUSES[1])
			->with(['firstUser.avatar','firstUser.userInformation'])
			->get();
		
		return [
			'requests'=>$getFriendRequests,
			'statuses'=>FriendsRequest::FRIEND_REQUEST_STATUSES
		];
	
	}
}
