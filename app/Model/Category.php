<?php
	
	namespace App\Model;
	
	use Illuminate\Database\Eloquent\Model;
	
	class Category extends Model
	{
		protected $fillable = [
			'title',
			'relative_title'
		];
		
		public function subcategory()
		{
			return $this->hasMany(SubCategory::class, 'category_id', 'id');
		}
	}
