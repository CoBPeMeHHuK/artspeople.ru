<?php

namespace App\Services\Api;


use App\Model\Image;

class SliderService extends AppService
{
	
	public function __construct()
	{
		parent::__construct();
	}
	
	public function getImages($id){
		
		$image = Image::where([
			'element_id'=>$id,
			'type'=>'sliders',
			'condition'=>'max'
		])->get();
		
		return json_encode($image);
	}
}
