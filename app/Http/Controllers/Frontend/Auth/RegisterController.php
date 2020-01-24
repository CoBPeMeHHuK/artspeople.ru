<?php

namespace App\Http\Controllers\Frontend\Auth;

use App\Http\Controllers\Controller;
use App\Model\Image;
use App\Model\User;
use App\Model\UserInformation;
use Illuminate\Foundation\Auth\RegistersUsers;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class RegisterController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Register Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles the registration of new users as well as their
    | validation and creation. By default this controller uses a trait to
    | provide this functionality without requiring any additional code.
    |
    */

    use RegistersUsers;

    
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest');
    }

    /**
     * Get a validator for an incoming registration request.
     *
     * @param  array  $data
     * @return \Illuminate\Contracts\Validation\Validator
     */
    protected function validator(array $data)
    {
        return Validator::make($data, [
            'name' => ['required', 'string', 'max:255'],
	        'surname' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'email', 'max:255', 'unique:users'],
            'password' => ['required', 'string', 'min:8', 'confirmed'],
            'g-recaptcha-response' => 'required|captcha',
        ]);
    }

    /**
     * Create a new user instance after a valid registration.
     *
     * @param  array  $data
     * @return void
     */
    protected function create(array $data)
    {
        $user  = User::create([
        	'category_id'=> $data['category'],
            'name' => $data['name'],
            'surname' => $data['surname'],
            'email' => $data['email'],
            'password' => Hash::make($data['password']),
        ]);
        
        $image = Image::create([
        	'element_id'=> $user->id,
	        'entity'=>User::class,
	        'src'=>'default.png',
	        'type'=>'avatars',
	        'condition'=>'max',
	        'size'=>500000
        ]);
        
        $userInformation = UserInformation::create([
	        'date_of_birth'=> '',
	        'gender'=> 1,
	        'phone'=>'',
	        'additional_phone'=>'',
	        'quote'=>'',
	        'personal_site'=>'',
	        'about_user'=>'',
	        'user_id'=>$user->id
        ]);
        
        return $user;
    }

    public function showRegistrationForm()
    {
        $header = 'frontend.auth.header';
        $content = 'frontend.auth.register-content';
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
