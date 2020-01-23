@if(count($categories)>0)
	@foreach($categories as $category)

		<section class="{{ $category->relative_title }}_section">
			<div class="{{ $category->relative_title }}_text animated fadeOut">
				<h2>{{ $category->title }}</h2>
			</div>
			<div class="{{ $category->relative_title }}_slide animated">

				@foreach($category->subcategory as $subcategory)
                    @foreach($subcategory->images->where('condition','min') as $image)
					<div class="sl_photo">
						<div class="sl_image" style="background-image: url({{ asset(Storage::url($image->type.'/'.$image->src)) }});">
						</div>
					</div>
                        @endforeach
				@endforeach
			</div>
		</section>

		<section class="name_of_work {{ 'after_'.$category->relative_title }}">
			<div class="wrapper">
				<div class="sl_{{ $category->relative_title }}_for">

					@foreach($category->subcategory as $subcategory)
                        @foreach($subcategory->images->where('condition','max') as $image)
						<div class="{{ $category->relative_title }}_name_sl">
							<div class="left_content">
								<h2>{{ $subcategory->title }}</h2>
								<p class="desktop_{{ $category->relative_title }}">
									{!! $subcategory->description !!}
								</p>
                                <p class="mobile_{{ $category->relative_title }}">
                                    {!! $subcategory->mobile_description !!}
                                </p>
								<span class="after_mobile_{{ $category->relative_title }}">...</span>
								<span class="after_mobile_{{ $category->relative_title }}-up"><i class="fa fa-angle-up"></i></span>

							</div>
							<div class="work_image">
								<img src="{{ asset(Storage::url($image->type.'/'.$image->src)) }}" alt="">
							</div>
						</div>
                            @endforeach
					@endforeach
				</div>
			</div>
		</section>

	@endforeach
@endif
