<?php
	
	namespace App\Model;
	
    use Illuminate\Notifications\Notifiable;
	use Illuminate\Contracts\Auth\MustVerifyEmail;
	use Illuminate\Foundation\Auth\User as Authenticatable;
    use Illuminate\Support\Facades\Auth;
    use Spatie\Permission\Traits\HasRoles;
	
	class User extends Authenticatable
	{
		use Notifiable, HasRoles;
		
		/**
		 * The attributes that are mass assignable.
		 *
		 * @var array
		 */
        protected $fillable = [
            'name','surname', 'email', 'password','category_id'
        ];
		
		/**
		 * The attributes that should be hidden for arrays.
		 *
		 * @var array
		 */
		protected $hidden = [
			'password',
			'remember_token',
		];
		
		/**
		 * The attributes that should be cast to native types.
		 *
		 * @var array
		 */
		protected $casts = [
			'email_verified_at' => 'datetime',
		];

        /**
         * @return \Illuminate\Database\Eloquent\Relations\HasOne
         */
		public function userInformation(){
			return $this->hasOne(UserInformation::class,'user_id');
		}



        /**
         * @return \Illuminate\Database\Eloquent\Relations\HasOne
         */
        public function avatar()
        {
            return $this->hasOne(Image::class, 'element_id')->where("type", "avatars");
        }
        
        public function messages_to(){
            return $this->hasMany(Message::class,'user_to','id');
        }
        
        public function messages_from(){
            return $this->hasMany(Message::class,'user_from','id');
        }
        
        public function last_messages_to(){
            return $this->hasOne(LastMessageUser::class,'user_to','id');
        }
        
        public function last_messages_from(){
            return $this->hasOne(LastMessageUser::class,'user_from','id');
        }

	}
