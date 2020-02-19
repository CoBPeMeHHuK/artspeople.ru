<?php

	namespace App\Model;

	use Illuminate\Database\Eloquent\Model;

	class Slider extends Model
	{

		protected $fillable = [
			'title',
            'description',
			'type',
            'rating',
            'url',
            'is_blackout_overlay',
			'is_active',
            'created_at',
            'updated_at'
		];

		public function images()
		{
			return $this->hasMany(Image::class, 'element_id', 'id')->where("type", "sliders");
		}

		public function scopeActive($query)
		{
			return $query->where('is_active', 1);
		}
	}
