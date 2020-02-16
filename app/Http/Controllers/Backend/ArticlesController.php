<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\AppController;
use App\Model\Article;
use App\Traits\UploadImagesTrait;
use Illuminate\Http\Request;

class ArticlesController extends AppController
{


	public function index()
    {
        $articles = Article::with('images' )->orderBy('id','desc')->get();
	    return view('backend.articles.index')->with(['articles'=>$articles]);
    }



    public function show(int $id){
	    return redirect()->route('admin.articles.edit', $id);
    }



    public function edit(int $id)
    {
        $article = Article::query()->findOrFail($id);

        return view('backend.articles.edit', [
            'type' => 'edit',
            'article' => $article,
            'action' => route('admin.articles.update', ['id' => $id])
        ]);
    }


    public function create()
    {
        return view('backend.articles.edit', [
            'type' => 'create',
            'article' => new Article(),
            'action' => route('admin.articles.store')
        ]);
    }


    public function store(Request $request)
    {

        $name = $request->name;
        $typePreview = $request->typePreview;
        $content = $request->description;
        $rating = $request->rating;
        $is_activity = $request->is_activity;
        $action = $request->action;
        $type = $request->type;


        $article = Article::query()->create([
            'title' => $name,
            'type'=>$typePreview,
            'content' => $content,
            'rating'=>$rating,
            'is_active' => $is_activity,
            'created_at' => time()
        ]);

        if (!empty($request->file('file'))) {
            $file = $request->file('file');
            $size = $file->getSize();
            $fileName = rand(0, 9999) . $file->hashName();
            $fileNameMin = 'min_' . $fileName;

            if ($article) {
                $data = [
                    'action' => $action,
                    'type' => $type,
                    'id' => $article->id,
                    'model' => Article::class,
                    'size' => $size
                ];

                switch ($typePreview){
                    case 1:
                        $widthPreview = 580;
                        break;

                    case 4:
                        $widthPreview = 780;
                        break;
                    default:
                        $widthPreview = 380;
                        break;
                }

                $img = UploadImagesTrait::uploadResizeImage($file, $fileName, $data, $widthPreview, 'max');

                $img['status']=='success'? $response='success':$response='error';

                return json_encode(['status'=>$response]);
            }
        }
    }


    public function update(int $id, Request $request)
    {

        $name = $request->name;
        $typePreview = $request->typePreview;
        $content = $request->description;
        $rating = $request->rating;
        $is_activity = $request->is_activity;
        $action = $request->action;
        $type = $request->type;


        $article = Article::query()
            ->findOrFail($id)
            ->update([
                'title'=>$name,
                'type'=>$typePreview,
                'content'=>$content,
                'rating'=>$rating,
                'is_active'=>$is_activity,
                'updated_at'=> time()
            ]);


        if(!empty($request->file('file'))){
            $file = $request->file('file');
            $fileName =rand(0, 9999). $file->hashName();
            $fileNameMin = 'min_'.$fileName;
            $size = $file->getSize();

            if($article){
                $data = [
                    'action' => $action,
                    'type' => $type,
                    'id' => $id,
                    'model' => Article::class,
                    'size' => $size
                ];

                switch ($typePreview){
                    case 1:
                        $widthPreview = 580;
                        break;

                    case 3:
                        $widthPreview = 780;
                        break;
                    default:
                        $widthPreview = 380;
                        break;
                }
                $img=  UploadImagesTrait::uploadResizeImage($file,$fileName,$data,$widthPreview,'max');
            }
        }

        $response='';
        $article ? $response = 'success': $response = 'error';

        return json_encode(['status'=>$response]);

    }


    public function destroy(int $id){
        $article = Article::query()->findOrFail($id);
        if($article){
            $response =  UploadImagesTrait::deleteImage($id,Article::class);
            $article->delete();
            return json_encode(['status'=>$response]);
        }

        return json_encode(['status'=>'error']);
    }


}
