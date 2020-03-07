<?php


namespace App\Services\Api;



use App\Model\Like;
use Illuminate\Support\Facades\Auth;

class LikeService extends AppService
{

    public function __construct()
    {
        parent::__construct();
    }

    public function getUserAuthLikes(){

        $this->redirectIfNotAuth(route('login'));
        $user = Auth::user();

        return $this->getLikes($user);
    }


    public function addLike($request){

        isset($request->work_id) ? $workId = $request->work_id : $workId = false;
        Auth::check() ? $authId = Auth::id() : $authId = false;

        if($workId && $authId){


            $getLike = Like::where([['work_id',$workId],['user_id',$authId]])->first();

            if($getLike) {
                $statusLike = $this->updateLike($getLike);

            }else{
                $statusLike = $this->createLike($workId,$authId);
            }

        } else{
            $statusLike = false;
        }

        $statusLike ? $response = [
            'status'=>'success',
            'message'=>$statusLike
        ] : $response = [
            'status'=>'error',
            'message'=>$statusLike
        ];

        return $response;
    }

    public function getLikeWorks(int $id){

        $likes = Like::where([['user_id',$id],['status',Like::STATUS_ACCEPTED]])
            ->with('work.image','work.user','work.avatar','work.likes')
            ->get();


        $likes ? $response = [
            'status'=>'success',
            'likes'=>$likes
        ] : $response = [
            'status'=>'error',
            'message'=>'no work found'
        ];

        return $response;
    }


    /*------------------------------------------ВСПОМОГАТЕЛЬНЫЕ МЕТОДЫ--------------------------------------*/

    private function updateLike($like){
        switch ($like->status){
            case Like::STATUS_DEFAULT:
                $updateLike = $like->update([
                    'status'=> Like::STATUS_ACCEPTED,
                    'updated_at'=> time()
                ]);

                $updateLike ? $message = 'updated' : $message = false;
                break;
            case Like::STATUS_ACCEPTED:
                $updateLike = $like->update([
                    'status'=> Like::STATUS_DEFAULT,
                    'updated_at'=> time()
                ]);

                $updateLike ? $message = 'deleted' : $message = false;
                break;
            default:
                $message = false;
                break;
        }

        return $message;
    }

    private function createLike($workId,$authId){
        $createLike =  Like::query()->create([
            'work_id'=>$workId,
            'user_id'=>$authId,
            'status'=>Like::STATUS_ACCEPTED,
            'created_at' => time()
        ]);

        $createLike ? $message = 'created' : $message = false;

        return $message;

    }

    private function redirectIfNotAuth($route){
        if(!$this->isAuth){
            return redirect($route);
        } else{
            return false;
        }
    }

    private function getLikes($user){
        $userCategory = $user->category_id;
        $id = $user->id;
        $subcategories = $this->getWorks($userCategory,$id);

        $result =[];

        foreach($subcategories as $subcategory){
            $works=[];
            foreach($subcategory->works as $work ) {

                $works[] = [
                    'name'=>$work->name,
                    'description'=>$work->description,
                    'type'=>$subcategory->relative_title,
                    'source'=>$work->source,
                    'count_views'=>$work->count_views,
                    'rating'=>$work->rating,
                    'is_can_comment'=>$work->is_can_comment,
                    'is_active'=>'is_active'
                ];
            }
            $result[]=[
                'title'=>$subcategory->title,
                'relative_title'=>$subcategory->relative_title,
                'works'=>$works
            ];
        }
        return $result;
    }


}
