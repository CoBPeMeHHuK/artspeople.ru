<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\AppController;
use App\Services\Api\UserService;
use Illuminate\Http\Request;

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
	
	
	
	
	/*----------------------------------------------*/

	
	

 
//	public function getUserInformation1($id){
//
//	    $user = User::findOrFail($id);
//
//	    Auth::user() ? $isAuth = true : $isAuth = false;
//
//	    $name = $user->name;
//	    $surname = $user->surname;
//	    $avatar  = Image::where(['entity'=>User::class,'element_id'=>$id,'type'=>'avatars'])->first();
//	    $quote = $user->userInformation()->first()->quote;
//
//	    $result = [
//	        'name'=>$name,
//            'surname'=>$surname,
//            'avatar'=>$avatar->src,
//            'quote'=>$quote,
//		    'isAuth'=>$isAuth
//        ];
//
//	    return json_encode($result);
//	}
//	public function getUserWorks1($id){
//
//        $userCategory = User::findOrFail($id)->category_id;
//
//        $subcategories = SubCategory::whereHas('works', function ($query) use ($userCategory, $id) {
//            $query->where(['user_id'=>$id, 'category_id'=>$userCategory]);
//        })->get();
//
//        $result =[];
//        $works = [];
//
//        foreach($subcategories as $subcategory){
//
//        	$works=[];
//
//            foreach($subcategory->works as $work ) {
//
//                $works[] = [
//                    'name'=>$work->name,
//                    'description'=>$work->description,
//                    'type'=>$subcategory->relative_title,
//                    'source'=>$work->source,
//                    'count_views'=>$work->count_views,
//                    'rating'=>$work->rating,
//                    'is_can_comment'=>$work->is_can_comment,
//                    'is_active'=>'is_active'
//                ];
//            }
//            $result[]=[
//                'title'=>$subcategory->title,
//                'relative_title'=>$subcategory->relative_title,
//                'works'=>$works
//            ];
//
//        }
//
//        return $result;
//
//	}
//	public function getUserAuthWorks1(){
//
//		if(!Auth::check()){
//			return redirect(route('login'));
//		}
//
//		$user = Auth::user();
//		$userCategory = $user->category_id;
//		$id = $user->id;
//
//		$subcategories = SubCategory::whereHas('works', function ($query) use ($userCategory, $id) {
//			$query->where(['user_id'=>$id, 'category_id'=>$userCategory]);
//		})->get();
//
//		$result =[];
//		$works = [];
//
//		foreach($subcategories as $subcategory){
//
//			$works=[];
//
//			foreach($subcategory->works as $work ) {
//
//				$works[] = [
//					'name'=>$work->name,
//					'description'=>$work->description,
//					'type'=>$subcategory->relative_title,
//					'source'=>$work->source,
//					'count_views'=>$work->count_views,
//					'rating'=>$work->rating,
//					'is_can_comment'=>$work->is_can_comment,
//					'is_active'=>'is_active'
//				];
//			}
//			$result[]=[
//				'title'=>$subcategory->title,
//				'relative_title'=>$subcategory->relative_title,
//				'works'=>$works
//			];
//		}
//
//		return $result;
//
//	}
//	public function getUserAuthLikes1(){
//
//		if(!Auth::check()){
//			return redirect(route('login'));
//		}
//
//		$user = Auth::user();
//		$userCategory = $user->category_id;
//		$id = $user->id;
//
//		$subcategories = SubCategory::whereHas('works', function ($query) use ($userCategory, $id) {
//			$query->where(['user_id'=>$id, 'category_id'=>$userCategory]);
//		})->get();
//
//		$result =[];
//		$works = [];
//
//		foreach($subcategories as $subcategory){
//
//			$works=[];
//
//			foreach($subcategory->works as $work ) {
//
//				$works[] = [
//					'name'=>$work->name,
//					'description'=>$work->description,
//					'type'=>$subcategory->relative_title,
//					'source'=>$work->source,
//					'count_views'=>$work->count_views,
//					'rating'=>$work->rating,
//					'is_can_comment'=>$work->is_can_comment,
//					'is_active'=>'is_active'
//				];
//			}
//			$result[]=[
//				'title'=>$subcategory->title,
//				'relative_title'=>$subcategory->relative_title,
//				'works'=>$works
//			];
//		}
//
//		return $result;
//
//	}
//	public function getUserLikes1($id){
//
//		$user = User::where('id',$id)->first();
//
//		$userCategory = $user->category_id;
//
//		$subcategories = SubCategory::whereHas('works', function ($query) use ($userCategory, $id) {
//			$query->where(['user_id'=>$id, 'category_id'=>$userCategory]);
//		})->get();
//
//		$result =[];
//
//		foreach($subcategories as $subcategory){
//
//			$likes=[];
//
//			foreach($subcategory->works as $work ) {
//
//				$likes[] = [
//					'name'=>$work->name,
//					'description'=>$work->description,
//					'type'=>$subcategory->relative_title,
//					'source'=>$work->source,
//					'count_views'=>$work->count_views,
//					'rating'=>$work->rating,
//					'is_can_comment'=>$work->is_can_comment,
//					'is_active'=>'is_active'
//				];
//			}
//			$result[]=[
//				'title'=>$subcategory->title,
//				'relative_title'=>$subcategory->relative_title,
//				'works'=>$likes
//			];
//		}
//
//		return $result;
//
//	}
//	public function changeAvatar1(Request $request){
//		$id = Auth::id();
//		if (!empty($request->file('img'))) {
//			$file = $request->file('img');
//			$size = $file->getSize();
//			$fileName = rand(0, 9999) . $file->hashName();
//
//			$data = [
//				'type' => 'avatars',
//				'id' => $id,
//				'size' => $size,
//				'model' => User::class,
//			];
//
//			UploadImagesTrait::deleteImage($id,User::class);
//
//			return  UploadImagesTrait::uploadResizeImage($file, $fileName, $data, 300, 'max');
//
//		}
//
//		return 'error';
//
//	}
//	public function getSettings1(){
//		$user = Auth::user();
//		$userInformation = UserInformation::where('user_id',$user->id)->first();
//		return [
//			'name'=>$user->name,
//			'surname'=>$user->surname,
//			'email'=>$user->email,
//			'birthday'=>$userInformation->date_of_birth,
//			'phone'=>$userInformation->phone,
//			'additional_phone'=>$userInformation->additional_phone,
//			'quote'=>$userInformation->quote,
//			'personal_site'=>$userInformation->personal_site,
//			'about'=>$userInformation->about_user
//		];
//
//
//	}
//	public function changeSettings1(Request $request){
//
//		$id = Auth::id();
//		$name = $request->name;
//		$surname = $request->surname;
//		$birthday = $request->birthday;
//		$phone = $request->phone;
//		$additionalPhone = $request->additional_phone;
//		$site = $request->site;
//		$quote = $request->quote;
//		$about = $request->about;
//
//		$user = User::query()
//			->findOrFail($id)
//			->update([
//				'name'=>$name,
//				'surname'=>$surname,
//				'updated_at'=> time()
//			]);
//
//		$userInformation = UserInformation::where('user_id',$id)
//			->update([
//				'date_of_birth'=>$birthday,
//				'phone'=>$phone,
//				'additional_phone'=>$additionalPhone,
//				'personal_site'=>$site,
//				'quote'=>$quote,
//				'about_user'=>$about
//			]);
//
//		if($user && $userInformation){
//			return ([
//				'status'=>'success',
//				'id'=>$id
//			]);
//		} else {
//			return ([
//				'status'=>'error',
//			]);
//		}
//	}
}
