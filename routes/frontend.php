<?php
	
	
	Auth::routes();
	
	Route::get('/', 'IndexController@show')->name('index');
	Route::get('/about','AboutController@show')->name('about');
	Route::get('/profile/{id}/{slug?}', 'ProfileController@show')->name('profile');
    Route::get('/test','TestController@test')->name('test');
