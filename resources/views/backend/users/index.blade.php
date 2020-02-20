@extends('backend.admin')

@section('content_header')

@stop

@section('content')

    <div class="row">

        <div class="col-xs-12">
            <div class="box-header">
                <h3 class="box-title">Колличество пользователей - {{ count($users) }}</h3>
            </div>
            <div class="box">
                <!-- /.box-header -->
                <div class="box-body table-responsive no-padding">
                    <table class="table table-hover">
                        <tbody><tr>
                            <th>ID</th>
                            <th>Аватар</th>
                            <th>ФИО</th>
                            <th></th>
                        </tr>

                        @if(count($users)>0)
                            @foreach($users as $user)
                                <tr>
                                    <td>{{ $user->id }}</td>
                                    <td><div class="admin_avatar" style="background-image: url({{ asset("https://357319.selcdn.ru/artspeople/".$user->avatar->type.'/'.$user->avatar->src) }});"></div></td>
                                    <td>
                                        {{ $user->surname .' '. $user->name }}
                                    </td>

                                    <td><a href="/profile/{{ $user->id }}"><button class="btn btn-success">Перейти</button></a></td>

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

@stop
