<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class UserInformation extends Model
{
	protected $table = 'user_information';
	
	protected $fillable = [
		'date_of_birth',
		'gender',
		'phone',
		'additional_phone',
		'quote',
		'personal_site',
		'about_user',
		'user_id',
		'created_at',
		'updated_at'
	];
	
}
