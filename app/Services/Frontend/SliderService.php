<?php
	
	namespace App\Services\Frontend;
	use App\Model\Slider;
	use App\Services\AppService;
	
	class SliderService extends AppService
	{
		public function __construct(Slider $slider)
		{
			$this->model = $slider;
		}
	}
