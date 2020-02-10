@extends('backend.admin')

@section('content_header')



@stop

@section('content')

    <div class="row">

        <div class="col-xs-12">
            <div class="box-header">
                <h1 class="box-title">
                    Статьи
                </h1>
                <input type="text" hidden id="type_element" value="sliders">
                <div class="pull-right box-tools">
                    <a href="{{ route('admin.articles.create') }}"><button class="btn btn-primary ">Добавить статью</button></a>
                </div>
            </div>
            <div class="box">
                <!-- /.box-header -->

                <div class="box-body table-responsive no-padding">
                    <table class="table table-hover">
                        <tbody><tr>
                            <th>ID</th>
                            <th>Активность</th>
                            <th>Название</th>
                            <th>Мини-картинка</th>
                            <th></th>
                            <th></th>
                        </tr>

                        @if(count($articles)>0)
                            @foreach($articles as $article)
                                <tr>
                                    <td>{{ $article->id }}</td>
                                    <td>
                                        @if($article->is_active == 1)
                                            <label class="label label-success">Активен</label>
                                        @else
                                            <label class="label label-primary">Не активен</label>
                                        @endif
                                    </td>
                                    <td>{{ $article->title }}</td>

                                    <td><a href="/admin/articles/{{ $article->id }}"><button class="btn btn-success">Изменить</button></a></td>
                                    <td><button value="{{$article->id}}" class="btn btn-danger delete">Удалить</button></td>
                                </tr>
                            @endforeach
                        @endif

                        </tbody></table>
                </div>
                <!-- /.box-body -->
            </div>
            <!-- /.box -->
        </div>
    </div>

@stop

@section('js')
    <script type="text/javascript" src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>
    <script type="text/javascript" src="{{ mix('js/index.js') }}"></script>
@stop
