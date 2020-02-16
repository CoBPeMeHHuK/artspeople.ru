<div class="sl_slider">
	@if(count($sliders)>0)
		@foreach($sliders as $slider)
            @foreach($slider->images->where('condition','max') as $image)
			<div class="sl_item" style="background-image: url({{ asset("https://357319.selcdn.ru/artspeople/".$image->type.'/'.$image->src) }});">
                <a class="slider_a" href="/articles">
                <div class="wrapper_main">
                    <div class="logoName">
						<h1>{{ $slider->title }}</h1>
						<p>{!! $slider->description !!}</p>
                    </div>
                </div>
                </a>
            </div>
            @endforeach
		@endforeach
	@endif
</div>

<div class="container-head">
	<div class="count">
		<p class="one"></p>
		<p class="two">/10</p>
	</div>

	<div class="slider-nav">
		@if(count($sliders) >0)
			@foreach($sliders as $id => $slider)
				@if(!$loop->first)
					@foreach($slider->images->where('condition','min') as $image)
					<div class="sl_item-nav">
						<div class="img-nav"
                             style="background-image: url({{ asset("https://357319.selcdn.ru/artspeople/".$image->type.'/'.$image->src) }});"></div>
					</div>
					@endforeach

				@endif
			@endforeach

			@foreach($firstSlider->images->where('condition','min') as $image)
			<div class="sl_item-nav">
				<div class="img-nav"
                     style="background-image: url({{ asset("https://357319.selcdn.ru/artspeople/".$image->type.'/'.$image->src) }});"></div>
			</div>
				@endforeach
		@endif
	</div>
</div>
