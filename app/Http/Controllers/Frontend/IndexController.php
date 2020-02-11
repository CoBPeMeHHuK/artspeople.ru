<?php

	namespace App\Http\Controllers\Frontend;

	use App\Http\Controllers\AppController;
	use App\Services\Frontend\CategoryService;
	use App\Services\Frontend\SliderService;
	use Illuminate\Support\Facades\Auth;


    class IndexController extends AppController
	{



	    /**
	     * IndexController constructor.
	     * @param SliderService $slider
	     * @param CategoryService $category
	     */
	    public function __construct(SliderService $slider,CategoryService $category)
	    {
		    parent::__construct();
		    $this->category = $category;
		    $this->slider = $slider;
		    $this->template = 'frontend.main.index';
	    }



	    /**
		 * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
		 * @throws \Throwable
		 */
		public function show()
		{

			$categories=$this->getCategory();
			$sliders=$this->getSliders();
			$firstSlider = $this->getFirstSlider();

			if (Auth::user()) {
				$this->isAuth=true;
				$this->vars['user_id'] = Auth::user()->id;
			}

			$this->vars['isAuth'] = $this->isAuth;


			$css = view('frontend.main.partials.css')->render();
			$this->vars['css'] = $css;

			$sliders = view('frontend.main.partials.sliders')
				->with([
					'sliders'=>$sliders,
					'firstSlider'=>$firstSlider
				])
				->render();
			$this->vars['sliders'] = $sliders;

			$best = view('frontend.main.partials.best')->render();
			$this->vars['best'] = $best;

			$scripts = view('frontend.main.partials.js')->render();
			$this->vars['scripts'] =  $scripts;


			return $this->renderOutput();
		}



	    /**
	     * @return bool|mixed
	     */
	    private function getCategory(){
		    $category=$this->category->get();
		    if($category->isEmpty()){
			    return FALSE;
		    }
		    return $category;
	    }



	    /**
	     * @return bool
	     */
	    private function getSliders(){

		    $sliders= $this->slider
			    ->orderBy('rating','desc')
			    ->active()
			    ->with(['images' => function ($query) {
				    $query->where('type', 'sliders');
			    }])
			    ->get();
		    if($sliders->isEmpty()){
			    return FALSE;
		    }

		    return $sliders;
	    }




	    /**
	     * @return mixed
	     */
	    private function getFirstSlider(){

		    $slider= $this->slider
			    ->orderBy('rating','desc')
			    ->active()
			    ->with(['images' => function ($query) {
				    $query->where('type', 'sliders');
			    }])
			    ->first();

		    return $slider;
	    }

    }
