<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class FriendHistory extends Model
{
	
	protected $table = 'friend_history';
	public $timestamps = false;
	protected $fillable = [
		'first_user',
		'second_user',
		'status',
		'created'
	];
}
