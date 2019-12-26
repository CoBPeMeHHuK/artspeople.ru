<?php


namespace App\Services\Api;


use App\Model\FriendsRequest;
use App\Model\Image;
use App\Model\SubCategory;
use App\Model\User;
use App\Model\UserInformation;
use App\Model\Work;
use App\Traits\UploadImagesTrait;
use Illuminate\Support\Facades\Auth;

class UserService extends AppService
{

    public function __construct()
    {
        parent::__construct();
    }
    
    public function getAuthUserInformation(){
    	Auth::check() ? $user = $this->getAuthUser() : $user = false;
    	return $user;
    }

    public function getUserInformation($id){
		Auth::check() ? $authId = Auth::id() : $authId = false;
        $user = $this->getUser($id);
        $avatar  = $this->getAvatar($id);
        $statuses = FriendsRequest::FRIEND_REQUEST_STATUSES;
        
        if($authId != false){
	        $status = FriendsRequest::where([['first_user',$authId],['second_user',$id]])
		        ->orWhere([['first_user',$id],['second_user',$authId]])
		        ->get('status')
		        ->first();
	        if($status == null) $status = ['status'=>FriendsRequest::FRIEND_REQUEST_STATUSES[0]];
        } else{
        	$status = ['status'=>FriendsRequest::FRIEND_REQUEST_STATUSES[0]];
        }
        

        $result = [
        	'id'=>$id,
            'name'=>$user->name,
            'surname'=>$user->surname,
            'avatar'=>$avatar->src,
	        'avatar_type'=>$avatar->type,
            'quote'=>$user->userInformation()->first()->quote,
            'isAuth'=>Auth::check(),
	        'statuses'=>$statuses,
	        'friendRequest'=>$status
        ];
        return json_encode($result);
    }
	
	public function getUserWorks($id){
		
    	$works = Work::where('user_id',$id)
			->orderBy('id','desc')
			->get();
		$worksArray =[];
		$idNumber = 0;
		
		foreach($works as $work ) {
			foreach($work->images as $image)
				
				$worksArray[] = [
					'id'=>$work->id,
					'user'=>$work->user,
					'avatar'=>$work->avatar,
					'subcategory_id'=>$work->subcategory_id,
					'title'=>$work->name,
					'description'=>$work->description,
					'src'=>$image->src,
					'count_views'=>$work->count_views,
					'rating'=>$work->rating,
					'is_can_comment'=>$work->is_can_comment,
					'is_active'=>$work->is_active,
					'created'=>date("d.m.Y", strtotime($work->created_at))
				];
			$idNumber++;
		}
		return json_encode($worksArray);
    }
	
    public function getUserAuthWorks(){
		
    	$this->redirectIfNotAuth(route('login'));
    	$user = Auth::user();
    	
    	return $this->getLikes($user);
    }
	
	public function getUserAuthLikes(){
		
		$this->redirectIfNotAuth(route('login'));
		$user = Auth::user();
		
		return $this->getLikes($user);
    }
    
	public function getUserLikes($id){
		
		$this->redirectIfNotAuth(route('login'));
		$user = User::where('id',$id)->first();
		
		return $this->getLikes($user);
	}
	
	public function changeAvatar($request){
		$id = Auth::id();
		if (!empty($request->file('img'))) {
			$file = $request->file('img');
			$size = $file->getSize();
			$fileName = rand(0, 9999) . $file->hashName();
			
			$data = [
				'type' => 'avatars',
				'id' => $id,
				'size' => $size,
				'model' => User::class,
			];
			
			
			UploadImagesTrait::deleteImage($id,User::class);
			
			return  UploadImagesTrait::uploadResizeImage($file, $fileName, $data, 300, 'max');
		}
		
		return 'error';
    }
	
	public function getSettings(){
		$user = Auth::user();
		$userInformation = $this->getInformationAboutUser($user->id)->first();
		
		return [
			'name'=>$user->name,
			'surname'=>$user->surname,
			'email'=>$user->email,
			'birthday'=>$userInformation->date_of_birth,
			'phone'=>$userInformation->phone,
			'additional_phone'=>$userInformation->additional_phone,
			'quote'=>$userInformation->quote,
			'personal_site'=>$userInformation->personal_site,
			'about'=>$userInformation->about_user
		];
    }
	
	public function changeSettings($request){
		
		$id = Auth::id();
		$name = $request->name;
		$surname = $request->surname;
		$birthday = $request->birthday;
		$phone = $request->phone;
		$additionalPhone = $request->additional_phone;
		$site = $request->site;
		$quote = $request->quote;
		$about = $request->about;
		
		$user = User::query()
			->findOrFail($id)
			->update([
				'name'=>$name,
				'surname'=>$surname,
				'updated_at'=> time()
			]);
		
		$userInformation = $this->getInformationAboutUser($id)
			->update([
				'date_of_birth'=>$birthday,
				'phone'=>$phone,
				'additional_phone'=>$additionalPhone,
				'personal_site'=>$site,
				'quote'=>$quote,
				'about_user'=>$about
			]);
		
		if($user && $userInformation){
			return ([
				'status'=>'success',
				'id'=>$id
			]);
		} else {
			return ([
				'status'=>'error',
			]);
		}
	}
	
	public function getUsers(){
  
		
		$user = Auth::check() ? Auth::user() : false;
		$users = MessageService::getAuthUserMessages() ? MessageService::getAuthUserMessages() :false;
		$userAvatar = $this->getAvatar(Auth::id());
		
		$parameters = [
			'user'=>$user,
			'userAvatar'=>$userAvatar,
			'users'=>$users
		];
		
		return $parameters;
		
	}
	
	public function getAuthSubcategories(){
		$categoryId = Auth::user()->category_id;
		$subcategories = SubCategory::where('category_id',$categoryId)->get(['id','title']);
		return $subcategories;
	}



	
	
	
	
	
	
	
	
	
	
	
    /*------------------------------------------ВСПОМОГАТЕЛЬНЫЕ МЕТОДЫ--------------------------------------*/
	

    private function getUser($id){
        return User::findOrFail($id);
    }

    private function getAvatar($id){
        return Image::where(['entity'=>User::class,'element_id'=>$id,'type'=>'avatars'])->first();
    }
    
    private function getWorks($userCategory,$id){
    	$subcategory =  SubCategory::whereHas('works', function ($query) use ($userCategory, $id) {
    		$query->where(['user_id'=>$id, 'category_id'=>$userCategory]);
    	})->get();
    	
    	return $subcategory;
    }
    
    private function redirectIfNotAuth($route){
	    if(!$this->isAuth){
		    return redirect($route);
	    } else{
	    	return false;
	    }
    }
    
    private function getLikes($user){
	    $userCategory = $user->category_id;
	    $id = $user->id;
	    $subcategories = $this->getWorks($userCategory,$id);
	
	    $result =[];
	
	    foreach($subcategories as $subcategory){
		    $works=[];
		    foreach($subcategory->works as $work ) {
			
			    $works[] = [
				    'name'=>$work->name,
				    'description'=>$work->description,
				    'type'=>$subcategory->relative_title,
				    'source'=>$work->source,
				    'count_views'=>$work->count_views,
				    'rating'=>$work->rating,
				    'is_can_comment'=>$work->is_can_comment,
				    'is_active'=>'is_active'
			    ];
		    }
		    $result[]=[
			    'title'=>$subcategory->title,
			    'relative_title'=>$subcategory->relative_title,
			    'works'=>$works
		    ];
	    }
	    return $result;
    }
    
    private function getInformationAboutUser($id){
	    return UserInformation::where('user_id',$id);
    }
    
    private function getAuthUser(){
    	$user = User::where('id',Auth::id())
		    ->with('avatar')
		    ->with('userInformation')
		    ->first();
    	
    	return $user;
    }
    
}
