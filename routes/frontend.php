<?php


	Auth::routes();

	Route::get('/', 'IndexController@show')->name('index');
	Route::get('/about','AboutController@show')->name('about');
    Route::get('/articles', 'ArticleController@index')->name('articles');
    Route::get('/articles/{id}', 'ArticleController@show')->name('article');
	Route::get('/profile/{id}/{slug?}', 'ProfileController@show')->name('profile');

