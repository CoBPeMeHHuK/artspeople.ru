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


Route::get('/get_dropzone_images/{id}', 'SlidersController@getImages');
Route::get('/get_articles_images/{id}', 'ArticleController@getImages');
Route::get('/get_subcategories_images/{id}/{type}', 'SubCategoriesController@getImages');

/*-------------------------- USERS --------------------------------*/

Route::post('/get-auth-user-information', 'UsersController@getAuthUserInformation');
Route::post('/change-avatar', 'UsersController@changeAvatar');
Route::post('/change-settings', 'UsersController@changeSettings');
Route::post('/get-settings', 'UsersController@getSettings');
Route::post('/get-auth-subcategories', 'UsersController@getAuthSubcategories');
Route::post('/get-person-about/{id}', 'UsersController@getPersonAbout');
Route::post('/profile/{id}', 'UsersController@getUserInformation');

/*------------------------ FRIENDS --------------------------------*/

Route::post('/request-to-friend-list', 'FriendController@requestToFriendList');

/*------------------------ WORKS --------------------------------*/

Route::post('/profile/works', 'WorksController@getUserAuthWorks');
Route::post('/profile/{id}/works', 'WorksController@getUserWorks');
Route::post('/upload-works', 'WorksController@uploadWorks');
Route::post('/get-upload-works', 'WorksController@getUploadWorks');
Route::post('/update-settings-work', 'WorksController@updateSettings');
Route::post('/delete-work', 'WorksController@deleteWork');
Route::post('/get-all-works', 'WorksController@getAllWorks');
Route::post('/add-to-active-works', 'WorksController@addToActiveWorks');

/*------------------------ lIKES --------------------------------*/

Route::post('/profile/likes', 'LikeController@getUserAuthLikes');
Route::post('/add-delete-like', 'LikeController@addLike');
Route::post('/profile/{id}/likes', 'LikeController@getLikeWorks');

/*---------------------------------------- NOTIFICATIONS -----------------------------*/

Route::post('/notifications', 'NotificationsController@getFriendsNotifications');

/*---------------------------------------- MESSAGES ----------------------------------*/

Route::post('/get-message-users', 'MessageController@getUsers');
Route::post('/get-user-messages', 'MessageController@getUserMessages');
Route::post('/read-messages', 'MessageController@readMessages');
Route::post('/send-message', 'MessageController@sendMessage');

/*-------------------------------------------------------------------------------------*/










