@extends('backend.admin')

@section('content_header')



@stop

@section('content')

    <div class="row">

        <div class="col-xs-12">
	        <div class="box-header">
		        <h1 class="box-title">
			        Слайдеры
		        </h1>
		        <input type="text" hidden id="type_element" value="sliders">
		        <div class="pull-right box-tools">
			        <a href="{{ route('admin.sliders.create') }}"><button class="btn btn-primary ">Добавить слайдер</button></a>
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
                            <th>Описание</th>
                            <th>Мини-картинка</th>
                            <th>Картинка</th>
                            <th>Затемнение</th>
                            <th>Рейтинг</th>
                            <th>Url</th>
                            <th></th>
                            <th></th>
                        </tr>

                        @if(count($sliders)>0)
                            @foreach($sliders as $slider)
                        <tr>
                            <td>{{ $slider->id }}</td>
                            <td>
                                @if($slider->is_active == 1)
                                    <label class="label label-success">Активен</label>
                                @else
                                    <label class="label label-primary">Не активен</label>
                                @endif
                            </td>
                            <td>{{ $slider->title }}</td>
                            <td>{!! $slider->description !!}</td>
	                        @foreach($slider->images->where('condition','min') as $image)
                            <td><div class="admin_img"style="background-image: url({{ asset("https://357319.selcdn.ru/artspeople/".$image->type.'/'.$image->src) }});"></div></td>
	                        @endforeach

	                        @foreach($slider->images->where('condition','max') as $image)
                            <td><div class="admin_img" style="background-image: url({{ asset("https://357319.selcdn.ru/artspeople/".$image->type.'/'.$image->src) }});"></div></td>
	                        @endforeach
                            <td>
                                @if($slider->is_blackout_overlay == 1)
                                    Есть
                                    @else
                                    Нет
                                    @endif
                            </td>
                            <td>{{ $slider->rating }}</td>
                            <td>{{ $slider->url }}</td>


                            <td><a href="/admin/sliders/{{ $slider->id }}"><button class="btn btn-success">Изменить</button></a></td>
                            <td><button value="{{$slider->id}}" class="btn btn-danger delete">Удалить</button></td>
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
