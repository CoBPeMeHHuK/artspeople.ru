<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class LastMessageUser extends Model
{
    
    protected $table = 'last_messages_users';
  protected $fillable = ['message','user_to','user_from','unique_user_record','is_read'];

  
}
