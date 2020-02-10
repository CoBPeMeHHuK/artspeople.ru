<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\AppController;
use App\Model\Article;
use App\Services\Frontend\CategoryService;
use App\Services\Frontend\SliderService;
use Illuminate\Support\Facades\Auth;

class ArticleController extends AppController
{

    public function __construct()
    {
        parent::__construct();
        $this->template = 'frontend.articles.index';
    }

    public function index()
    {

        $articles = $this->getArticles();

        if (Auth::user()) {
            $this->isAuth=true;
            $this->vars['user_id'] = Auth::user()->id;
        }

        $parameters = [
            'articles'=>$articles
        ];

        $this->vars['isAuth'] = $this->isAuth;

        $css = view('frontend.articles.partials.css')->render();
        $this->vars['css'] = $css;

        $content = view('frontend.articles.partials.articles-content')->with($parameters)->render();
        $this->vars['content'] =  $content;

        $scripts = view('frontend.articles.partials.js')->render();
        $this->vars['scripts'] =  $scripts;


        return $this->renderOutput();
    }



    public function show(int $id){
        if (Auth::user()) {
            $this->isAuth=true;
            $this->vars['user_id'] = Auth::user()->id;
        }

        $this->vars['isAuth'] = $this->isAuth;


        $css = view('frontend.articles.partials.css')->render();
        $this->vars['css'] = $css;

        $content = view('frontend.articles.partials.article-content')->render();
        $this->vars['content'] =  $content;

        $scripts = view('frontend.articles.partials.js')->render();
        $this->vars['scripts'] =  $scripts;


        return $this->renderOutput();
    }

    private function getArticles(){
        return Article::where('is_active',1)->get();
    }

}
