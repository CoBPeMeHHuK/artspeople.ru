<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\AppController;
use App\Model\Category;
use App\Model\SubCategory;
use App\Traits\UploadImagesTrait;
use Illuminate\Http\Request;

class SubCategoriesController extends AppController
{
	
	
	/**
	 * @return \Illuminate\Http\RedirectResponse|\Illuminate\Routing\Redirector
	 */

	public function index()
    {
    	
    	return redirect(route('admin.categories.index'));
    }
	
	
	/**
	 * @param int $id
	 * @return \Illuminate\Http\RedirectResponse
	 */

    public function show(int $id){
	    return redirect()->route('admin.subcategories.edit', $id);
    }
	
	
	/**
	 * @param int $id
	 * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
	 */

    public function edit(int $id)
    {
	    $subcategory = SubCategory::findOrFail($id);
	    $categories = Category::all();
	
	    return view('backend.subcategories.edit', [
		    'method'=>'put',
		    'type' => 'edit',
		    'subcategory' => $subcategory,
		    'categories'=>$categories,
		    'action' => route('admin.subcategories.update', ['id' => $id])
	    ]);
    }
	
	
	/**
	 * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
	 */

    public function create()
    {
	    return view('backend.subcategories.edit', [
		    'type' => 'create',
		    'subcategory' => new SubCategory(),
		    'categories'=> Category::all(),
		    'action' => route('admin.subcategories.store')
	    ]);
    }
	
	
	/**
	 * @param Request $request
	 * @return false|string
	 */

    public function store(Request $request)
    {
	
	    $title = $request->name;
	    $relative_title = $request->relative_title;
	    $description = $request->description;
        $mobile_description = $request->mobile_description;
	    $category_id = $request->category_type;
	    $rating = $request->rating;
	    $is_activity = $request->is_activity;
	    $action = $request->action;
	    $type = $request->type;
	
	
	    $subcategory = Subcategory::query()->create([
		    'title' => $title,
		    'relative_title' => $relative_title,
		    'description' => $description,
            'mobile_description' => $mobile_description,
		    'category_id' => $category_id,
		    'rating' => $rating,
		    'is_active' => $is_activity,
		    'created_at' => time()
	    ]);
	
	    if (!empty($request->file('file'))) {
		    $file = $request->file('file');
		    $size = $file->getSize();
		    $fileName = 'min_' . rand(0, 9999) . $file->hashName();
	    
	
	    $response = 'error';
	    if ($subcategory) {
		    $data = [
			    'action' => $action,
			    'type' => $type,
			    'id' => $subcategory->id,
			    'model' => SubCategory::class,
			    'size' => $size
		    ];
		    $image = UploadImagesTrait::uploadResizeImage($file, $fileName, $data, 470, 'min');
		    $image['status'] == 'success' ? $response = 'success' : $response = 'error';
	    }
	    
	    } else{
	    	$subcategory ? $response = 'success' : $response = 'error';
	    }
	    
	    return json_encode(['status'=>$response,'id'=>$subcategory->id]);
	
    }
	
	
	/**
	 * @param int $id
	 * @param Request $request
	 * @return false|string
	 */

    public function update(int $id, Request $request)
    {
	    $title = $request->name;
	    $relative_title = $request->relative_title;
	    $description = $request->description;
        $mobile_description = $request->mobile_description;
	    $category_id = $request->category_type;
	    $rating = $request->rating;
	    $is_activity = $request->is_activity;
	    $action = $request->action;
	    $type = $request->type;
	
	    $subcategory = SubCategory::query()
		    ->findOrFail($id)
		    ->update([
			    'title'=>$title,
			    'relative_title'=>$relative_title,
			    'description'=>$description,
                'mobile_description'=>$mobile_description,
			    'category_id'=>$category_id,
			    'rating'=>$rating,
			    'is_active'=>$is_activity,
			    'updated_at'=> time()
		    ]);
	
	    if(!empty($request->file('file'))){
		    $file = $request->file('file');
		    $fileName =rand(0, 9999). $file->hashName();
		    $fileNameMin = 'min_'.$fileName;
		    $size = $file->getSize();
		    $response = 'error';
		    if($subcategory){
			    $data = [
				    'action'=>$action,
				    'type'=>$type,
				    'id'=>$id,
				    'model'=>SubCategory::class,
				    'size'=>$size
			    ];
			    $img =  UploadImagesTrait::uploadResizeImage($file,$fileName,$data,470,'min');
		    }
	    } else{
		    $subcategory ? $response = 'success' : $response = 'error';
	    }
	
	    return json_encode(['status'=>$response]);
	    
    }
	
	
	/**
	 * @param int $id
	 * @return false|string
	 * @throws \Exception
	 */
	
	public function destroy(int $id){
		$subcategory = SubCategory::query()->findOrFail($id);
		if($subcategory){
			$response =  UploadImagesTrait::deleteImage($id,SubCategory::class);
			$subcategory->delete();
			return json_encode(['status'=>$response]);
		}
		
		return json_encode(['status'=>'error']);
	}
	
	
	/**
	 * @param Request $request
	 * @return false|string
	 */
    
    public function uploadMaxImage(Request $request){
		
		$id = $request->id;
		$type = $request->type;
		$action = $request->action;
	    if(!empty($request->file('file'))){
		    $file = $request->file('file');
		    $fileName =rand(0, 9999). $file->hashName();
		    $size = $file->getSize();
		    $data = [
			    'action'=>$action,
			    'type'=>$type,
			    'id'=>$id,
			    'model'=>SubCategory::class,
			    'size'=>$size
		    ];
		
		    $image =  UploadImagesTrait::uploadResizeImage($file,$fileName,$data,850,'max');
		    $image['status']=='success'? $response='success':$response='error';
		    
		    return json_encode(['status'=>$response]);
			   
	    }
    }
}
