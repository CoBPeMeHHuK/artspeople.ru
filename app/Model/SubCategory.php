<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class SubCategory extends Model
{
    protected $table = 'subcategories';

    protected $fillable = [
        'title',
	    'relative_title',
        'description',
        'mobile_description',
        'type',
        'rating',
        'is_active',
	    'category_id',
        'created_at',
        'updated_at'
    ];

    public function images()
    {
        return $this->hasMany(Image::class, 'element_id', 'id')->where("type", "subcategories");
    }

    public function work_images()
    {
        return $this->hasMany(Image::class, 'element_id', 'id')->where("type", "works");
    }

    public function works(){
        return $this->hasMany(Work::class,'subcategory_id','id');
    }

    public function scopeActive($query)
    {
        return $query->where('is_active', 1);
    }



}


