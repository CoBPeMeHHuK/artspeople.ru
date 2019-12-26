<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\AppController;
use App\Model\Image;
use Exception;
use Illuminate\Http\Request;
use App\Model\Slider;

class SubCategoriesController extends AppController
{
	
	
	/**
	 * @param $id
	 * @param $type
	 * @return false|string
	 */
	public function getImages($id,$type){
		$image = Image::where([
			'element_id'=>$id,
			'type'=>'subcategories',
			'condition'=>$type
		])->get();
		
		return json_encode($image);
	}

}
