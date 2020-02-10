<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\AppController;
use App\Model\Article;
use Illuminate\Http\Request;

class ArticlesController extends AppController
{


	public function index()
    {
        $articles = Article::all();
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
            'slider' => $article,
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

    }


    public function update(int $id, Request $request)
    {

    }


    public function destroy(int $id){

    }


}
