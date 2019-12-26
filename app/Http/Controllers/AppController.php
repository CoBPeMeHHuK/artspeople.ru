<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AppController extends Controller
{
    protected $template;
    protected $category;
    protected $slider;
    protected $vars=array();
    protected $isAuth = false;

public function __construct()
{

}
	
	/**
	 * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
	 */
    protected function renderOutput(){
        return view($this->template)->with($this->vars);
    }
}
