<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\AppController;
use App\Model\FriendsRequest;
use App\Model\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ProfileController extends AppController  {
	
	
	
	/**
	 * ProfileController constructor.
	 */
	public function __construct()
	{
		parent::__construct();
		$this->template = 'frontend.profile.index';
	}
	
	
	/**
	 * @param $id
	 * @return ProfileController
	 * @throws \Throwable
	 */
    public function show($id){

		
		$user = false;
		$isActiveLeftSidebar = false;
		$isAuthClass = '';
		$friends = $this->getFriends();
	
	    if (Auth::user()) {
		    $this->isAuth=true;
		    $user = Auth::user();
		    $this->vars['user_id'] = $user->id;
		    $isActiveLeftSidebar = 'auth';
		    $isAuthClass = 'is_auth';
	    }
	    
	    $leftSideBarParameters = [
	    	'isAuth'=>$this->isAuth,
		    'user'=>$user,
            'friends'=>$friends
	    ];
	
	    $this->vars['user'] = $user;
	    $this->vars['isAuth'] = $this->isAuth;
	    $this->vars['isActiveLeftSidebar'] = $isActiveLeftSidebar;
	   
	
	    $css = view('frontend.profile.partials.css')->render();
	    $this->vars['css'] = $css;
	
	    $left_sidebar = view('frontend.profile.partials.left-sidebar')->with($leftSideBarParameters)->render();
	    $this->vars['left_sidebar'] = $left_sidebar;
	
	    $content = view('frontend.profile.partials.content')->with(['isAuth'=>$isAuthClass,'friends'=>$friends])->render();
	    $this->vars['content'] = $content;
	
	    $scripts = view('frontend.profile.partials.js')->render();
	    $this->vars['scripts'] = $scripts;
		
	    return $this->renderOutput();
    }

    private function getFriends(){

        $authId =  Auth::id();
//        $friends = User::where('id','!=',$authId)->get();
	    
	    $firstFriends = FriendsRequest::where('second_user',$authId)
		    ->where('status',FriendsRequest::FRIEND_REQUEST_STATUSES[2])
		    ->with('firstUser.avatar')
		    ->get();
	
	    $secondFriends = FriendsRequest::where('first_user',$authId)
		    ->where('status',FriendsRequest::FRIEND_REQUEST_STATUSES[2])
		    ->with('secondUser.avatar')
		    ->get();
	    
	    $friends = $firstFriends->merge($secondFriends);
	    

        return $friends;
    }
}
