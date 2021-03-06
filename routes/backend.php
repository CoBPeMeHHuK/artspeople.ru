<?php
	Route::get('/admin', function () {
		return redirect('/admin/sliders');
	});
	Route::post('/delete_image','ImagesController@deleteImage')->name('delete_image');

	Route::group(['prefix' => 'admin', 'as' => 'admin.', 'name' => 'admin.','middleware'=>'role:root|administrator'], function () {

        Route::resource('users', 'UsersController');
		Route::resource('sliders', 'SlidersController');
        Route::resource('articles', 'ArticlesController');
        Route::post('/articles/{id}', 'ArticlesController@update')->name('articles.update');
		Route::post('/sliders/{id}', 'SlidersController@update')->name('sliders.update');
		Route::resource('categories', 'CategoriesController');
		Route::resource('subcategories', 'SubCategoriesController');
		Route::post('/subcategories/{id}', 'SubCategoriesController@update')->name('subcategories.update');
		Route::post('/subcategory_upload_max', 'SubCategoriesController@uploadMaxImage')->name('upload_max');

	});


