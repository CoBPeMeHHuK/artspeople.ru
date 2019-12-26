@extends('backend.admin')

@section('content_header')

@stop

@section('content')
	<input type="text" hidden id="type_element" value="subcategories">
	<input type="text" hidden id="id_element" value="{{ $subcategory->id }}">
	<div class="box-header">
		<h1 class="box-title">
			@if($type=='create')
				<input type="text" hidden id="action" value="create">
				Создание подкатегории
			@else
				<input type="text" hidden id="action" value="edit">
				Редактирование подкатегории
			@endif
		</h1>
		<div class="pull-right box-tools">
			<a href="{{ route('admin.subcategories.index') }}"><button class="btn btn-primary ">Вернуться обратно</button></a>
		</div>
	</div>
	<div class="box box-primary">
		<div class="subcategories">
			<form name="form">
				<input type="hidden" name="_token" value="{{ csrf_token() }}">
				<div class="box-body">
					<label for="exampleInputEmail1">К какой категории относится</label>
					<select class="form-control form-control-lg form-padding" id="category_type">
						@foreach($categories as $category)
							<option value="{{ $category->id }}">{!! $category->title !!}</option>
							@endforeach
					</select>


					<div class="form-group">
						<label for="exampleInputEmail1">Название</label>
						<input type="text" class="form-control" id="name_element" value="{{ $subcategory->title }}" placeholder="Введите название подкатегории">
					</div>
					<div class="form-group">
						<label for="exampleInputEmail1">Относительное название</label>
						<input type="text" class="form-control" id="relative_name_element" value="{{ $subcategory->relative_title }}" placeholder="Введите относительное название подкатегории">
					</div>
					<div class="form-group">
						<label for="exampleInputPassword1">Описание</label>
						<textarea class="form-control textarea" id="description_element">{!! $subcategory->description !!}</textarea>
					</div>

                    <div class="form-group">
                        <label for="exampleInputPassword1">Мобильное мини-описание</label>
                        <textarea class="form-control textarea" id="mobile_description_element">{!! $subcategory->mobile_description !!}</textarea>
                    </div>
					<div class="form-group">
						<label for="exampleInputPassword1">Маленькая картинка</label>
						<div class="dropzone" id="dropzone-min" name="uploader-min">
							<div class="fallback">
								<input name="file" type="file" multiple />
							</div>
						</div>
					</div>

					<div class="form-group">
						<label for="exampleInputPassword1">Большая картинка</label>
						<div class="dropzone" id="dropzone-max" name="uploader-max">
							<div class="fallback">
								<input name="file" type="file" multiple />
							</div>
						</div>
					</div>
					<div class="form-group">
						<label for="exampleInputPassword1">Рейтинг в числовом формате</label>
						<input class="form-control" id="rating_element"  placeholder="Введите число от 1 до 100" value="{!! $subcategory->rating !!}">
					</div>
					<div class="checkbox">
						<label>
							<input type="checkbox" id="is_activity_element"
							       @if($subcategory->is_active == 1)

							       checked
									@endif
							>Сделать слайдер активным
						</label>
					</div>
				</div>
				<!-- /.box-body -->

				<div class="box-footer">
					<button id="btn" type="submit" class="btn btn-primary">Сохранить</button>
					<button id="btn_send_image" value="{{ $subcategory->id }}" type="submit" class="btn btn-primary" style="display: none;">Сохранить</button>
					<input type="text" id="status_response" value="error" hidden>
				</div>
			</form>
		</div>

	</div>

@stop

@section('js')
	<script type="" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
	<script type="text/javascript" src="{{ asset('additionally/js/editor.js') }}"></script>
	<script type="text/javascript" src="{{ asset('additionally/js/dropzone.js') }}"></script>
	<script type="text/javascript" src="{{ asset('additionally/js/dropzonesubcategories.js') }}"></script>
	<script type="text/javascript" src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>
	<script type="text/javascript" src="{{ mix('js/create.js') }}"></script>

@stop
