<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Work extends Model
{
    protected $fillable = [
        'user_id',
        'category_id',
        'subcategory_id',
        'name',
        'description',
        'count_views',
        'rating',
        'is_can_comment',
        'is_active',
        'created_at',
        'updated_at'
    ];

    public function images()
    {
        return $this->hasMany(Image::class, 'element_id','id')->where("type", "works");
    }

    public function subcategories()
    {
        return $this->hasMany(SubCategory::class, 'id','subcategory_id');
    }
    
    public function user(){
    	return $this->hasOne(User::class,'id','user_id');
    }
	
	public function avatar(){
		return $this->hasOne(Image::class, 'element_id','user_id')->where("type", "avatars");
	}

    public function scopeActive($query)
    {
        return $query->where('is_active', 1);
    }

}
