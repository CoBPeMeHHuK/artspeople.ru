<?php
	namespace App\Http\Controllers\Frontend;
	
	use App\Http\Controllers\AppController;
	use App\Model\Slider;
    use DateTimeZone;
    use Illuminate\Support\Carbon;
    
    class TestController extends AppController{
		public function test(){
		    $time = Carbon::now();
		    
		    return $time;
		}
	}
