<?php
    
    namespace App\Model;
    
    use Illuminate\Database\Eloquent\Model;
    
    class Message extends Model
    {
        protected $fillable = ['text', 'user_to', 'user_from', 'is_read'];
        
        public function avatar()
        {
            return $this->hasOne(Image::class, 'element_id', 'user_from')->where("type", "avatars");
        }
        
        public function to_user()
        {
            return $this->hasOne(User::class, 'id', 'user_to');
        }
        
        public function from_user()
        {
            return $this->hasOne(User::class, 'id', 'user_from');
        }
        
        public function getMessageUser()
        {
            return $this->hasOne(User::class, 'id', 'user_from');
        }
    }
