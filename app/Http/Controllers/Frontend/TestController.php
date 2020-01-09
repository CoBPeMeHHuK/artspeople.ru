<?php
	namespace App\Http\Controllers\Frontend;
	
	use App\Http\Controllers\AppController;
	use App\Model\Slider;
	
	class TestController extends AppController{
		public function test(){
			
			$slider = Slider::with(['images' => function ($query) {
				$query->where('type', 'slider');
			}])->get();
			return view('frontend.test.test')->with(['sliders'=>$slider]);
		}
	}