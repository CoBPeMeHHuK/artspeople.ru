<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\AppController;
use Exception;
use Illuminate\Http\Request;
use App\Model\Slider;
use App\Traits\UploadImagesTrait;

class SlidersController extends AppController
{


	/**
	 * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
	 */

	public function index()
    {

	    $sliders = Slider::with(['images' => function ($query) {
		    $query->where('type', 'sliders');
	    }])->get();
	    return view('backend.sliders.index')->with(['sliders'=>$sliders]);
    }


	/**
	 * @param int $id
	 * @return \Illuminate\Http\RedirectResponse
	 */

    public function show(int $id){
	    return redirect()->route('admin.sliders.edit', $id);
    }


	/**
	 * @param int $id
	 * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
	 */

    public function edit(int $id)
    {
        $slider = Slider::query()
	        ->with(['images' => function ($query) use ($id) {
	        $query->where([
	        	'type'=> 'slider',
		        'element_id'=>$id
	        ]);
	        }])
	        ->findOrFail($id);

        return view('backend.sliders.edit', [
            'type' => 'edit',
            'slider' => $slider,
            'action' => route('admin.sliders.update', ['id' => $id])
        ]);
    }


	/**
	 * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
	 */

    public function create()
    {
        return view('backend.sliders.edit', [
            'type' => 'create',
            'slider' => new Slider(),
            'action' => route('admin.sliders.store')
        ]);
    }


	/**
	 * @param Request $request
	 * @return false|string
	 */
    public function store(Request $request)
    {

	    $name = $request->name;
	    $description = $request->description;
	    $isOverlay = $request->is_overlay;
	    $rating = $request->rating;
	    $is_activity = $request->is_activity;
	    $action = $request->action;
	    $type = $request->type;
	    $url= $request->url;

	    $slider = Slider::query()->create([
		    'title' => $name,
		    'description' => $description,
		    'is_blackout_overlay'=>$isOverlay,
		    'url'=>$url,
		    'rating' => $rating,
		    'is_activity' => $is_activity,
		    'created_at' => time()
	    ]);

	    if (!empty($request->file('file'))) {
		    $file = $request->file('file');
		    $size = $file->getSize();
		    $fileName = rand(0, 9999) . $file->hashName();
		    $fileNameMin = 'min_' . $fileName;

		    if ($slider) {
		    	$data = [
		    		'action' => $action,
				    'type' => $type,
				    'id' => $slider->id,
				    'model' => Slider::class,
				    'size' => $size
			    ];

		    	$img_max = UploadImagesTrait::uploadResizeImage($file, $fileName, $data, 1920, 'max');
		    	$img_min = UploadImagesTrait::uploadResizeImage($file, $fileNameMin, $data, 350, 'min');
		    }
	    }


        $img_max['status']=='success' && $img_min['status']=='success'? $response='success':$response='error';

        return json_encode(['status'=>$response]);

    }



	/**
	 * @param int $id
	 * @param Request $request
	 * @return false|string
	 */
    public function update(int $id, Request $request)
    {

	    $name = $request->name;
	    $description = $request->description;
	    $rating = $request->rating;
        $isOverlay = $request->is_overlay;
	    $is_activity = (int)$request->is_activity;
	    $action = $request->action;
	    $type = $request->type;
	    $url = $request->url;

	    $slider = Slider::query()
		    ->findOrFail($id)
		    ->update([
		    'title'=>$name,
		    'description'=>$description,
		    'is_blackout_overlay'=>$isOverlay,
		    'url'=>$url,
		    'rating'=>$rating,
		    'is_active'=>$is_activity,
		    'updated_at'=> time()
	    ]);

	    if(!empty($request->file('file'))){
            $file = $request->file('file');
            $fileName =rand(0, 9999). $file->hashName();
            $fileNameMin = 'min_'.$fileName;
		    $size = $file->getSize();

		    if($slider){
			    $data = [
				    'action'=>$action,
				    'type'=>$type,
				    'id'=>$id,
				    'model'=>Slider::class,
				    'size'=>$size
			    ];
			    $img_max =  UploadImagesTrait::uploadResizeImage($file,$fileName,$data,1920,'max');
			    $img_min =  UploadImagesTrait::uploadResizeImage($file,$fileNameMin,$data,350,'min');
		    }
	    }

	    $response='';
	    $slider ? $response = 'success': $response = 'error';

	    return json_encode(['status'=>$response]);
    }


	/**
	 * @param int $id
	 * @return false|string
	 * @throws Exception
	 */

    public function destroy(int $id){
	    $slider = Slider::query()->findOrFail($id);
	    if($slider){
		    $response =  UploadImagesTrait::deleteImage($id,Slider::class);
		    $slider->delete();
		    return json_encode(['status'=>$response]);
	    }

	    return json_encode(['status'=>'error']);
    }


}
