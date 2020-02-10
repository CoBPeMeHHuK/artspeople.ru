<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Article extends Model
{

    const ARTICLE_TYPES = [
        1=>'NORMAL',
        2=>'MEDIUM',
	    3=>'LARGEST',
	    4=>'LARGEST_SECOND'
    ];

	protected $fillable = [
		'title',
		'img_preview',
		'type',
        'content'
	];

}
