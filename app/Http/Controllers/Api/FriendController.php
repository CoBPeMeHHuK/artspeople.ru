<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\AppController;
use App\Services\Api\FriendService;
use Illuminate\Http\Request;

class FriendController extends AppController
{
	
	protected $friendService;
	
	public function __construct(FriendService $friendService) {
		parent::__construct();
		$this->friendService = $friendService;
	}
	
	
	/**
	 * @param Request $request
	 * @return array
	 */
	public function requestToFriendList(Request $request){
		return $this->friendService->requestToFriendList($request);
	}
	
	
}
