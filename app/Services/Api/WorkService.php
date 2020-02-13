<?php


namespace App\Services\Api;



use App\Model\Like;
use App\Model\Work;
use App\Traits\UploadImagesTrait;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class WorkService extends AppService
{

    public function __construct()
    {
        parent::__construct();
    }



    public function getAllWorks($request){

        isset($request->type) ? $type = $request->type : $type = false;
        if($type){
            switch ($type) {
                case 'tattoo':
                    $works = Work::where('category_id',2)
                        ->orderBy('id','desc')
                        ->with('image','user','avatar','likes')
                        ->get();

                    break;

                case 'photography':
                    $works = Work::where('category_id',1)
                        ->orderBy('id','desc')
                        ->with('image','user','avatar','likes')
                        ->get();

                    break;

                default:
                    $works = Work::query()
                        ->orderBy('id','desc')
                        ->with('image','user','avatar','likes')
                        ->get();
            }
        } else{
            $works = false;
        }


        $works ? $response = [
            'status'=>'success',
            'works'=>$works
        ] : $response = [
            'status'=>'error',
            'message'=>'no work found'
        ];

        return $response;
    }

	/**
	 * @return false|string
	 */
	public function getUploadWorks(){

		$id = Auth::id();
		$works = Work::where('user_id',$id)
			->orderBy('id','desc')
			->get();
		$worksArray =[];
		$idNumber = 0;

		foreach($works as $work ) {
			foreach($work->images as $image)

				$worksArray[] = [
					'id'=>$work->id,
					'subcategory_id'=>$work->subcategory_id,
					'title'=>$work->name,
					'description'=>$work->description,
					'src'=>$image->src,
					'count_views'=>$work->count_views,
					'rating'=>$work->rating,
					'is_can_comment'=>$work->is_can_comment,
					'is_active'=>$work->is_active,
					'created'=>date("d.m.Y", strtotime($work->created_at))
				];
			$idNumber++;
		}
		return json_encode($worksArray);

	}


	/**
	 * @param $request
	 * @return false|string
	 */
	public function uploadWorks($request){

		$title = $request->title;
		$description = $request->description;
		$categoryId = Auth::user()->category_id;
		$subcategoryId = $request->subcategory;
		$userId = Auth::id();
		$type='works';
		if(strlen($title)==0) $title = '';
		if(strlen($description)==0) $description = '';

		$work =  Work::query()->create([
			'user_id'=>$userId,
			'category_id'=>$categoryId,
			'subcategory_id'=>$subcategoryId,
			'name' => $title,
			'description'=>$description,
			'created_at' => time()
		]);

		if (!empty($request->file('file'))) {
			$file = $request->file('file')[0];
			$size = $file->getSize();
			$fileName = rand(0, 9999) . $file->hashName();


			$response = 'error';
			$path = '';
			if ($work) {
				$data = [
					'type' => $type,
					'id' => $work->id,
					'model' => Work::class,
					'size' => $size
				];
				$image = UploadImagesTrait::uploadResizeImage($file, $fileName, $data, null, 'max');
				$image['status'] == 'success' ? $response = 'success' : $response = 'error';
				$path = $image['path'];
			}

		} else{
			$work ? $response = 'success' : $response = 'error';
			$path = '';
		}

		return json_encode([
			'status'=>$response,
			'path'=>$path,
			'title'=>$title,
			'description'=> $description,
			'subcategory_id'=>$subcategoryId,
			'id_db'=>$work->id,
		]);

	}


	/**
	 * @param $request
	 * @return array
	 */
	public function updateSettings($request){

		$id = $request->id;
		$title = $request->title;
		$description = $request->description;
		$subcategory = $request->subcategory;


		$work = Work::query()
			->findOrFail($id)
			->update([
				'name'=>$title,
				'description'=>$description,
				'subcategory_id'=>$subcategory,
				'updated_at'=> time()
			]);


		$work ? $response=[
			'status'=>'success',
			'title'=>$title,
			'description'=>$description,
			'subcategory_id'=>$subcategory,
			'id'=>$id
		]: $response = [
			'status'=>'error'
		];

		return $response;

	}


	/**
	 * @param $request
	 * @return false|string
	 * @throws \Exception
	 */
	public function deleteWork($request){
		$id = $request->id;
		$work = Work::query()->findOrFail($id);
		if($work){
			$response =  UploadImagesTrait::deleteImage($id,Work::class);
			$work->delete();
			Like::where([
			    'work_id'=>$id,
            ])
            ->delete();

			return json_encode(['status'=>$response]);
		}

		return json_encode(['status'=>'error']);
	}




    /*------------------------------------------ВСПОМОГАТЕЛЬНЫЕ МЕТОДЫ--------------------------------------*/



}
