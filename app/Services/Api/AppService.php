<?php


namespace App\Services\Api;
use Illuminate\Support\Facades\Auth;

class AppService
{
    protected $model = false;
    protected $user;
    protected $message;
    protected $isAuth = false;
	
	public function __construct()
	{
		if(Auth::check()){
			$this->isAuth = true;
		}
	}
}
