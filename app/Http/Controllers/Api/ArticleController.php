<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\AppController;
use App\Model\Image;

class ArticleController extends AppController
{


	public function __construct()
	{
		parent::__construct();

	}

	public function getImages($id){
        $image = Image::where([
            'element_id'=>$id,
            'type'=>'articles',
            'condition'=>'max'
        ])->get();

        return json_encode($image);
	}

}
