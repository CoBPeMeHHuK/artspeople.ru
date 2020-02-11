<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
    Route::get('/get_dropzone_images/{id}','SlidersController@getImages');
    Route::get('/get_articles_images/{id}','ArticleController@getImages');
    Route::get('/get_subcategories_images/{id}/{type}','SubCategoriesController@getImages');
	Route::post('/profile/works','UsersController@getUserAuthWorks');
	Route::post('/profile/likes','UsersController@getUserAuthLikes');
	Route::post('/get-auth-user-information','UsersController@getAuthUserInformation');
	Route::post('/profile/{id}','UsersController@getUserInformation');
	Route::post('/profile/{id}/works','UsersController@getUserWorks');
    Route::post('/get-message-users','UsersController@getUsers');
    Route::post('/get-user-messages','MessageController@getUserMessages');
    Route::post('/read-messages','MessageController@readMessages');
    Route::post('/send-message','MessageController@sendMessage');
	Route::post('/change-avatar','UsersController@changeAvatar');
	Route::post('/change-settings','UsersController@changeSettings');
	Route::post('/get-settings','UsersController@getSettings');
	Route::post('/get-auth-subcategories','UsersController@getAuthSubcategories');
	Route::post('/upload-works','WorksController@uploadWorks');
    Route::post('/get-upload-works','WorksController@getUploadWorks');
	Route::post('/update-settings-work','WorksController@updateSettings');
	Route::post('/delete-work','WorksController@deleteWork');
	Route::post('/notifications','NotificationsController@getFriendsNotifications');
	Route::post('/request-to-friend-list','FriendController@requestToFriendList');
	Route::post('/get-person-about/{id}','UsersController@getPersonAbout');
	Route::post('/add-delete-like','LikeController@addLike');
    Route::post('/profile/{id}/likes','LikeController@getLikeWorks');



