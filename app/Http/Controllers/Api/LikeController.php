<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\AppController;
use App\Services\Api\LikeService;
use Illuminate\Http\Request;

class LikeController extends AppController
{

	protected $likeService;

	public function __construct(LikeService $likeService) {

	    $this->likeService = $likeService;
		parent::__construct();
	}

    /**
     * @return array
     */
    public function getUserAuthLikes(){
        return $this->likeService->getUserAuthLikes();
    }

	public function addLike(Request $request){
	    return $this->likeService->addLike($request);
    }

    public function getLikeWorks(int $id){
	    return $this->likeService->getLikeWorks($id);
    }


}
