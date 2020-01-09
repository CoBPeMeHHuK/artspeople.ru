<?php
	/**
	 * Created by PhpStorm.
	 * User: CoBPeMeHHuK
	 * Date: 27.04.2019
	 * Time: 15:12
	 */
	
	namespace App\Services;
	
	
	abstract class AppService
	{
		protected $model = false;
		
		protected $s_rep;
		
		public function get($select = '*')
		{
			$builder = $this->model->select($select);

			return $builder->get();
		}

		public function orderBy($row,$desc){
            $builder = $this->model->orderBy($row,$desc);
            return $builder;
        }
	}
