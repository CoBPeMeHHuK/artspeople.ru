<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\AppController;
use App\Model\Message;
use App\Model\User;
use App\Services\Api\UserService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class UsersController extends AppController
{
	
	protected $userService;
	
	
	/**
	 * UsersController constructor.
	 * @param UserService $userService
	 */
	public function __construct(UserService $userService)
	{
		parent::__construct();
		$this->userService = $userService;
	}
	
        /**
	 * @return string
	 */
	public function getAuthUserInformation(){
		return $this->userService->getAuthUserInformation();
	}
	
	/**
	 * @param $id
	 * @return false|string
	 */
	public function getUserInformation($id){
		return $this->userService->getUserInformation($id);
	}
	
	
	/**
	 * @param $id
	 * @return array
	 */
	public function getUserWorks($id){
		return $this->userService->getUserWorks($id);
	}
	
	
	/**
	 * @return array
	 */
	public function getUserAuthWorks(){
		return $this->userService->getUserAuthWorks();
	}
	
	
	/**
	 * @return array
	 */
	public function getUserAuthLikes(){
		return $this->userService->getUserAuthLikes();
	}
	
	
	/**
	 * @param $id
	 * @return array
	 */
	public function getUserLikes($id){
		return $this->userService->getUserLikes($id);
	}
	
	
	/**
	 * @param Request $request
	 * @return array|string
	 */
	public function changeAvatar(Request $request){
		return $this->userService->changeAvatar($request);
	}
	
	
	/**
	 * @return array
	 */
	public function getSettings(){
		return $this->userService->getSettings();
	}
	
	
	/**
	 * @param Request $request
	 * @return array
	 */
	public function changeSettings(Request $request){
		return $this->userService->changeSettings($request);
	}
	
	
	
	public function getUsers(){
		return $this->userService->getUsers();
	}
	
	public function getAuthSubcategories(){
		return $this->userService->getAuthSubcategories();
	}
	
	public function getPersonAbout($id){
		return $this->userService->getPersonAbout($id);
	}
	
}
