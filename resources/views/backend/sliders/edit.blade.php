@extends('backend.admin')

@section('content_header')

@stop

@section('content')
    <input type="text" hidden id="type_element" value="sliders">
    <input type="text" hidden id="id_element" value="{{ $slider->id }}">
	<div class="box-header">
		<h1 class="box-title">
			@if($type=='create')
                <input type="text" hidden id="action" value="create">
				Создание слайдера
				@else
                <input type="text" hidden id="action" value="edit">
				Редактирование слайдера
			@endif
		</h1>
		<div class="pull-right box-tools">
			<a href="{{ route('admin.sliders.index') }}"><button class="btn btn-primary ">Вернуться обратно</button></a>
		</div>
	</div>
    <div class="box box-primary">
        <div class="slider">
            <form name="form">
                <input type="hidden" name="_token" value="{{ csrf_token() }}">
                <div class="box-body">
                    <div class="form-group">
                        <label for="exampleInputEmail1">Название</label>
                        <input type="name" class="form-control" id="name_element" value="{{ $slider->title }}" placeholder="Введите название слайдера">
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Описание</label>
                        <textarea class="form-control textarea" id="description_element"  placeholder="Введите описание слайдера">{!! $slider->description !!}</textarea>
                    </div>
                    <div class="form-group">
                        <div class="dropzone" id="my-dropzone" name="uploader">
                            <div class="fallback">
                                <input name="file" type="file" multiple />
                            </div>
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Рейтинг в числовом формате</label>
                        <input class="form-control" id="rating_element"  placeholder="Введите число от 1 до 100" value="{!! $slider->rating !!}">
                    </div>
                    <div class="checkbox">
                        <label>
                            <input type="checkbox" id="is_activity_element"
                            @if($slider->is_active == 1)

								checked
								@endif
	                            >Сделать слайдер активным
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
    <script type="" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    <script type="text/javascript" src="{{ asset('additionally/js/editor.js') }}"></script>
    <script type="text/javascript" src="{{ asset('additionally/js/dropzone.js') }}"></script>
    <script type="text/javascript" src="{{ mix('js/dropzone_sliders.js') }}"></script>
    <script type="text/javascript" src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>
    <script type="text/javascript" src="{{ mix('js/create.js') }}"></script>

@stop
