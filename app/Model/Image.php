<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Image extends Model
{
    protected $fillable = [
        'entity',
        'src',
        'element_id',
        'type',
        'condition',
        'size',
        'created_at',
        'updated_at'
    ];

    public function images()
    {
        return $this->hasMany(Image::class, 'type', 'type');
    }
    
    
}
