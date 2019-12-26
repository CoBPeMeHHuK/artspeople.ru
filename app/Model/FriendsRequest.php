<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class FriendsRequest extends Model
{
	
	protected $table = 'friends';
	
	const FRIEND_REQUEST_STATUSES = [
    	0=>'DEFAULT',
	    1=>'NOT ACCEPTED',
	    2=>'ACCEPTED',
	    3=>'REJECTED'
    ];
	
	protected $fillable = [
		'first_user',
		'second_user',
		'status',
	];
	
	public function firstUser()
	{
		return $this->hasOne(User::class, 'id', 'first_user');
	}
	
	public function secondUser()
	{
		return $this->hasOne(User::class, 'id', 'second_user');
	}
 
 
 
}
