<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\AppController;
use App\Model\Category;
use App\Model\Image;
use App\Model\SubCategory;
use Illuminate\Http\Request;
use App\Traits\UploadImagesTrait;

class CategoriesController extends AppController
{
	
	/**
	 * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
	 */
	public function index()
    {
    	$categories = Category::with([
			'subcategory'
		])->get();
    	
    	$images = Image::where(['entity'=>SubCategory::class])->get();
    	
    	return view('backend.categories.index')->with(['categories'=>$categories,'images'=>$images]);
    }
	
	
	/**
	 * @param int $id
	 * @return \Illuminate\Http\RedirectResponse
	 */

    public function show(int $id){
	    return redirect()->route('admin.categories.edit', $id);
    }
	
	
	/**
	 * @param int $id
	 * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
	 */

    public function edit(int $id)
    {
	    $category = Category::findOrFail($id);
	    
	    return view('backend.categories.edit', [
	    	'method'=>'post',
		    'type' => 'edit',
		    'category' => $category,
		    'action' => route('admin.categories.update', $id)
	    ]);
    }
	
	
	/**
	 * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
	 */

    public function create()
    {
	    return view('backend.categories.edit', [
		    'method'=>'post',
		    'type' => 'create',
		    'category' => new Category(),
		    'action' => route('admin.categories.store')
	    ]);
    }
	
	
	/**
	 * @param Request $request
	 */

    public function store(Request $request)
    {
    
    }
	
	
	/**
	 * @param int $id
	 * @param Request $request
	 * @return \Illuminate\Http\RedirectResponse
	 */

    public function update(int $id, Request $request)
    {
    	
    	$title = $request->title;
    	$relative_title = $request->relative_title;
    	
	    
    	try {
		    Category::query()
			    ->findOrFail($id)
			    ->update([
				    'title'=>$title,
				    'relative_title'=>$relative_title,
				    'updated_at'=> time()
			    ]);
	    }
	    catch (Exception $e) {
		    return redirect()
			    ->back()
			    ->with("Не удалось сохранить категорию!");
	    }
	    return redirect()->route('admin.categories.index');

    }
	
	
	/**
	 * @param int $id
	 */
    
    public function destroy(int $id){

    }


}
