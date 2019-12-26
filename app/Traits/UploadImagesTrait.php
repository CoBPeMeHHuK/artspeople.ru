<?php

namespace App\Traits;
use App\Model\Image;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Intervention\Image\ImageManager;

trait UploadImagesTrait {
	
	
	/**
	 * @param $file
	 * @param $filename
	 * @param $data
	 * @param $width
	 * @param $condition
	 * @return array
	 */
	
    public static function uploadResizeImage($file,$filename,$data,$width,$condition)
    {
        $type = $data['type'];
        $entity = $data['model'];
        $size = $data['size'];
        $id = $data['id'];
        $disk = Storage::disk('selectel');
        $manager = new ImageManager();
        if($width== null){
            $image = $manager->make(file_get_contents($file))
                ->stream();
        }else{
            $image = $manager->make(file_get_contents($file))
                ->resize($width, null, function ($constraint) {
                    $constraint->aspectRatio();
                })
                ->stream();
        }

        $path = $type . '/' . $filename;

        if ($disk->put($path, $image)) {

            Image::query()->create([
                "entity" => $entity,
                "element_id" => $id,
                "src" => $filename,
                "type" => $type,
                'size' => $size,
                'condition'=>$condition
            ]);

            return ([
                'status'=>'success',
                'path' => $filename
            ]);
        } else{
            return ([
                'status'=>'error',
                 'path' => ''
            ]);
        }
    }
	
	
	/**
	 * @param int $id
	 * @param $entity
	 * @return string
	 */
    public static function deleteImage(int $id,$entity)
    {
	    $images = Image::query()->where(['element_id'=>$id,'entity'=>$entity])->get();
	    foreach($images as $image){
		    $pathMaxImage =  $image->type.'/'.$image->src;
		    $pathMinImage =  $image->type.'/min_'.$image->src;
		    Storage::disk('selectel')->delete($pathMaxImage);
		    Storage::disk('selectel')->delete($pathMinImage);
		    $image->delete();
	    }
	    
	    return 'success';
    }
    
}
