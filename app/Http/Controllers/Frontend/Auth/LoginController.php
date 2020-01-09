<?php

namespace App\Http\Controllers\Frontend\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Foundation\Auth\AuthenticatesUsers;

class LoginController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Login Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles authenticating users for the application and
    | redirecting them to your home screen. The controller uses a trait
    | to conveniently provide its functionality to your applications.
    |
    */

    use AuthenticatesUsers;

    /**
     * Where to redirect users after login.
     *
     * @var string
     */
    
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest')->except('logout');
    }

    public function showLoginForm()
    {
        $header = 'frontend.auth.header';
        $content = 'frontend.auth.login-content';
        $footer = 'frontend.auth.footer';
        return view('frontend.auth.app',[
            'header'=>$header,
            'content'=>$content,
            'footer'=>$footer
        ]);
    }
	
	protected function redirectTo(){
		return url('/profile',auth()->user()->id);
	}
}
