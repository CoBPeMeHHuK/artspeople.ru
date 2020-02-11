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
		'type',
        'content',
        'is_active'
	];

    public function images()
    {
        return $this->hasMany(Image::class, 'element_id', 'id')->where("type", "articles");
    }

    public function image()
    {
        return $this->hasOne(Image::class, 'element_id', 'id')->where("type", "articles");
    }

}
