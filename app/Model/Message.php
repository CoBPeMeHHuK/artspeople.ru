<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Message extends Model
{
  protected $fillable = ['text','user_to','user_from','is_read'];

    public function avatar()
    {
        return $this->hasOne(Image::class, 'element_id','user_from')->where("type", "avatars");
    }
}
