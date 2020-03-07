<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\AppController;
use App\Services\Api\WorkService;
use Illuminate\Http\Request;

class WorksController extends AppController
{

	protected $worksService;

	/**
	 * WorksController constructor.
	 * @param WorkService $workService
	 */
	public function __construct(WorkService $workService) {
		parent::__construct();
		$this->worksService = $workService;
	}

    /**
     * @param $id
     * @return array
     */
    public function getUserWorks($id){
        return $this->worksService->getUserWorks($id);
    }

    /**
     * @return array
     */
    public function getUserAuthWorks(){
        return $this->worksService->getUserAuthWorks();
    }


	/**
	 * @return false|string
	 */
	public function getUploadWorks(){
		return $this->worksService->getUploadWorks();
	}


	/**
	 * @param Request $request
	 * @return false|string
	 */
	public function uploadWorks(Request $request){
		return $this->worksService->uploadWorks($request);
	}


	/**
	 * @param Request $request
	 * @return array
	 */
	public function updateSettings(Request $request){
		return $this->worksService->updateSettings($request);
	}


	/**
	 * @param Request $request
	 * @return false|string
	 * @throws \Exception
	 */
	public function deleteWork(Request $request){
		return $this->worksService->deleteWork($request);
	}


	public function getAllWorks(){
        return $this->worksService->getAllWorks();
    }

    public function addToActiveWorks(Request $request){
        return $this->worksService->addToActiveWorks($request);
    }

}
