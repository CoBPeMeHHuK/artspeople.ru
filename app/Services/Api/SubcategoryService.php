<?php

namespace App\Services\Api;


class SubcategoryService extends SliderService
{
	public function __construct()
	{
		parent::__construct();
	}
	
	public function getImages($id,$type){
		$image = Image::where([
			'element_id'=>$id,
			'type'=>'subcategories',
			'condition'=>$type
		])->get();
		
		return json_encode($image);
	}
}
