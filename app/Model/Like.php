<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Like extends Model
{

    const STATUS_DEFAULT = 'DEFAULT';
    const STATUS_ACCEPTED = 'ACCEPTED';

    protected $fillable = [
        'work_id',
        'user_id',
        'status',
        'created_at',
        'updated_at'
    ];

    public function work()
    {
        return $this->hasOne(Work::class, 'id','work_id');
    }

}
