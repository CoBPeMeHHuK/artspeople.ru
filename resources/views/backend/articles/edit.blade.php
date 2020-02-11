@extends('backend.admin')

@section('content_header')



@stop

@section('content')
    <input type="text" hidden id="type_element" value="articles">
    <input type="text" hidden id="id_element" value="{{ $article->id }}">
    <div class="box-header">
        <h1 class="box-title">
            @if($type=='create')
                <input type="text" hidden id="action" value="create">
                Создание статьи
            @else
                <input type="text" hidden id="action" value="edit">
                Редактирование статьи
            @endif
        </h1>
        <div class="pull-right box-tools">
            <a href="{{ route('admin.articles.index') }}"><button class="btn btn-primary ">Вернуться обратно</button></a>
        </div>
    </div>
    <div class="box box-primary">
        <div class="slider">
            <form name="form">
                <input type="hidden" name="_token" value="{{ csrf_token() }}">
                <div class="box-body">
                    <div class="form-group">
                        <label for="exampleInputEmail1">Название</label>
                        <input type="name" class="form-control" id="name_element" value="{{ $article->title }}" placeholder="Введите название статьи">
                    </div>

                    <div class="form-group">
                        <label for="exampleInputEmail1">Выбор вида превью статьи</label>
                        <div class="radio">
                            <label for="optionsRadios1">
                            <input type="radio" name="optionsRadios" id="optionsRadios1" value="1"
                            @if($article->type == 1 || $article->type !=2 || $article->type !=3 || $article->type !=4)
                                checked
                                @endif>
                            Превью нормальной ширины, половина экрана
                            </label>
                        </div>
                        <div class="radio">
                            <label for="optionsRadios2">
                                <input type="radio" name="optionsRadios" id="optionsRadios2" value="2"
                                       @if($article->type == 2)
                                       checked
                                    @endif>
                                Мини превью, один из трёх в ширине экрана
                            </label>
                        </div>
                        <div class="radio">
                            <label for="optionsRadios3">
                                <input type="radio" name="optionsRadios" id="optionsRadios3" value="3"
                                       @if($article->type == 3)
                                       checked
                                    @endif>
                                Самый большое превью
                            </label>
                        </div>
                        <div class="radio">
                            <label for="optionsRadios4">
                                <input type="radio" name="optionsRadios" id="optionsRadios4" value="4"
                                       @if($article->type == 4)
                                       checked
                                    @endif>
                                Дополнение к самому большому превью
                            </label>
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="my-dropzone">Превью картинка</label>
                        <div class="dropzone" id="my-dropzone" name="uploader">
                            <div class="fallback">
                                <input name="file" type="file" multiple />
                            </div>
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Описание статьи</label>
                        <textarea class="form-control textarea" id="description_element"  placeholder="Введите описание статьи">{!! $article->content !!}</textarea>
                    </div>
                    <div class="checkbox">
                        <label>
                            <input type="checkbox" id="is_activity_element"
                                   @if($article->is_active == 1)

                                   checked
                                @endif
                            >Сделать статью активной
                        </label>
                    </div>
                </div>
                <!-- /.box-body -->

                <div class="box-footer">
                    <button id="btn" type="submit" class="btn btn-primary">Сохранить</button>
                </div>
            </form>
        </div>

    </div>

@stop

@section('js')
    <link type="text/css" rel="stylesheet" href="{{ asset('additionally/summernote/summernote.css') }}">
    <script type="text/javascript" src="{{ asset('additionally/js/dropzone.js') }}"></script>
    <script type="text/javascript" src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>
    <script type="text/javascript" src="{{ asset('additionally/summernote/summernote.min.js') }}"></script>
    <script type="text/javascript" src="{{ asset('additionally/summernote/lang/summernote-ru-RU.js') }}"></script>
    <script type="text/javascript" src="{{ asset('additionally/js/articles_backend.js') }}"></script>

@stop
