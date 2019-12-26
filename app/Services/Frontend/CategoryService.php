<?php

	
	namespace App\Services\Frontend;
	
	
	use App\Model\Category;
	use App\Services\AppService;
	
	class CategoryService extends AppService
	{
		
		public function __construct(Category $category)
		{
			$this->model = $category;
		}
		
	}
