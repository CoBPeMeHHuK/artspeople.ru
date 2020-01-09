<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\AppController;
use Illuminate\Http\Request;
use App\Model\Image;
use Illuminate\Support\Facades\Storage;


class ImagesController extends AppController
{
	
	
	/**
	 * @param Request $request
	 * @return false|string
	 */
	public function deleteImage(Request $request)
	{

		 $name = $request->get('name');
		 $this->delete($name);

         $name = 'min_'.$name;
         $this->delete($name);

        return json_encode(['status'=>'success']);

	}
	
	
	/**
	 * @param $name
	 */

    private function delete($name){
        $images = Image::query()->where('src',$name)->get();
        if($images){
            foreach($images as $image){
                $pathImage =  $image->type.'/'.$name;
                Storage::disk('public')->delete($pathImage);
                $image->delete();
            }
        }
    }
}


