@extends('backend.admin')

@section('content_header')

@stop

@section('content')
    <input type="text" hidden id="type_element" value="sliders">
    <input type="text" hidden id="id_element" value="{{ $category->id }}">
	<div class="box-header">
		<h1 class="box-title">
			@if($type=='create')
                <input type="text" hidden id="action" value="create">
				Создание категории
				@else
                <input type="text" hidden id="action" value="edit">
				Редактирование категории
			@endif
		</h1>
		<div class="pull-right box-tools">
			<a href="{{ route('admin.categories.index') }}"><button class="btn btn-primary ">Вернуться обратно</button></a>
		</div>
	</div>
    <div class="box box-primary">
        <div class="category">
            <form method="{{ $method }}" action="{{ $action }}">
                <input type="hidden" name="_token" value="{{ csrf_token() }}">
	            @if($type == 'edit')
		            {{ method_field('PUT') }}
					@endif
                <div class="box-body">
                    <div class="form-group">
                        <label for="exampleInputEmail1">Название</label>
                        <input type="text" class="form-control" name="title" id="title" value="{{ $category->title }}" placeholder="Введите название категории">
                    </div>
	                <div class="form-group">
		                <label for="exampleInputEmail1">Относительное название</label>
		                <input type="text" class="form-control" name="relative_title" id="relative_title" value="{{ $category->relative_title }}" placeholder="Введите относительное название категории">
	                </div>
                </div>
	            <div class="box-footer">
                    <input id="btn" type="submit" class="btn btn-primary" value="Сохранить">
                </div>
            </form>
        </div>

    </div>

@stop

@section('js')
    <script type="" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    <script type="text/javascript" src="{{ asset('additionally/js/editor.js') }}"></script>
    <script type="text/javascript" src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>
    <script type="text/javascript" src="{{ mix('js/create.js') }}"></script>

@stop
