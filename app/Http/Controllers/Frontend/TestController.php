<?php
	namespace App\Http\Controllers\Frontend;
	
	use App\Http\Controllers\AppController;
    use Illuminate\Support\Facades\Request;
    
    class TestController extends AppController
    {
        public function captchaForm()
        {
            return view('frontend/test/test');
        }
        public function storeCaptchaForm(Request $request)
        {
            request()->validate([
                'name' => 'required',
                'email' => 'required',
                'mobile_number' => 'required',
                'g-recaptcha-response' => 'required|captcha',
            ]);
            
            dd('successfully validate');
        }
    }
