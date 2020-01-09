<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\AppController;
use App\Model\Image;
use App\Services\Api\SliderService;
use Exception;
use Illuminate\Http\Request;
use App\Model\Slider;

class SlidersController extends AppController
{
	 protected $sliderService;
	
	
	public function __construct(SliderService $sliderService)
	{
		parent::__construct();
		
		$this->sliderService = $sliderService;
	}
    
	public function getImages($id){
		
		return $this->sliderService->getImages($id);
		
	}

}
