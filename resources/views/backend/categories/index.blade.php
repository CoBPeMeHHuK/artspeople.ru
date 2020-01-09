@extends('backend.admin')

@section('content_header')



@stop

@section('content')

    <div class="row">

        <div class="col-xs-12">
	        <div class="box-header">
		        <h1 class="box-title">
			        Категории
		        </h1>
		        <input type="text" hidden id="type_element" value="subcategories">
		        <div class="pull-right box-tools">
			        <a href="{{ route('admin.subcategories.create') }}"><button class="btn btn-primary ">Добавить подкатегорию</button></a>
		        </div>

	        </div>
            <div class="box">
                <!-- /.box-header -->

                <div class="box-body table-responsive no-padding">
                    <table class="table table-hover">


                        @if(count($categories)>0)
		                    <tbody>
	                        @foreach($categories as $category)
		                        <tr>
				                    <th></th>
				                    <th></th>
				                    <th></th>
				                    <th></th>
				                    <th style="text-align: center;">
					                    <p style="font-size: 30px;">{!! $category->title !!}</p>
					                    <p><a href="/admin/categories/{{ $category->id }}"><button class="btn btn-success">Изменить</button></a></p>
				                    </th>
				                    <th></th>
			                        <th></th>
			                        <td></td>
			                        <th></th>
			                    </tr>
			                    <tr>
				                    <th>ID</th>
				                    <th>Активность</th>
				                    <th>Название</th>
				                    <th>Относительное название</th>
				                    <th>Описание</th>
				                    <th>Мини-картинка</th>
				                    <th>Картинка</th>
				                    <th></th>
				                    <th></th>
			                    </tr>
			                    @foreach($category->subcategory as $subcategory)
								<tr>
				                    <th>{{ $subcategory->id }}</th>
				                    <th>
					                    <label class="label label-success">Активен</label>
				                    </th>
				                    <th>{!! $subcategory->title !!}</th>
				                    <th>{!! $subcategory->relative_title !!}</th>
				                    <th><div class="subcategory_description">{!! $subcategory->description !!}</div></th>
				                    <th>
									@foreach($images->where('element_id',$subcategory->id)->where('condition','min') as $image)
						                    <div class="admin_img" style="background-image: url({{ asset(Storage::url($image->type.'/'.$image->src)) }});"></div>
										@endforeach
										</th>
				                    <th>
					                    @foreach($images->where('element_id',$subcategory->id)->where('condition','max') as $image)
						                    <div class="admin_img" style="background-image: url({{ asset(Storage::url($image->type.'/'.$image->src)) }});"></div>
					                    @endforeach
				                    </th>
				                    <th><a href="/admin/subcategories/{{ $subcategory->id }}"><button class="btn btn-success">Изменить</button></a></th>
				                    <th><button value="{{$subcategory->id}}" class="btn btn-danger delete">Удалить</button></th>
								</tr>
			                    @endforeach
	                        @endforeach
		                    </tbody>
                        @endif

                        </table>
                </div>
            </div>
        </div>
    </div>

@stop

@section('js')
    <script type="text/javascript" src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>
    <script type="text/javascript" src="{{ mix('js/index.js') }}"></script>
    @stop
