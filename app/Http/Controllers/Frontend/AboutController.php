<?php
	
	namespace App\Http\Controllers\Frontend;
	
	use App\Http\Controllers\AppController;
	use App\Services\Frontend\CategoryService;
	use App\Services\Frontend\SliderService;
	use Illuminate\Support\Facades\Auth;


    class AboutController extends AppController
	{
		
	    /**
	     * IndexController constructor.
	     * @param SliderService $slider
	     * @param CategoryService $category
	     */
	    public function __construct(CategoryService $category)
	    {
		    parent::__construct();
		    $this->category = $category;
		    $this->template = 'frontend.about.index';
	    }
	    
	    
		
	    /**
		 * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
		 * @throws \Throwable
		 */
		public function show()
		{
			
			$categories=$this->getCategory();
			
			if (Auth::user()) {
				$this->isAuth=true;
				$this->vars['user_id'] = Auth::user()->id;
			}
			
			$this->vars['isAuth'] = $this->isAuth;
			

			$css = view('frontend.about.partials.css')->render();
			$this->vars['css'] = $css;
			
			$category = view('frontend.about.partials.category')->with(['categories'=>$categories])->render();
			$this->vars['category'] =  $category;
			
			$scripts = view('frontend.about.partials.js')->render();
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
    }
