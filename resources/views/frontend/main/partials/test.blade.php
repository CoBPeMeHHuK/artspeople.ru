<div class="sl_slider">
	@if(count($sliders)>0)
		@foreach($sliders as $slider)

			<div class="sl_item" style="background-image: url({{ asset('images/sliders/'.$slider->img_max) }});">
				<div class="wrapper_main">
					<div class="logoName">
						<h1>{{ $slider->title }}</h1>
						<p>{!! $slider->description !!}</p>
					</div>
				</div>
			</div>

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

					<div class="sl_item-nav">
						<div class="img-nav"
						     style="background-image: url({{ asset('images/sliders/'.$slider->img_min) }});"></div>
					</div>

				@endif
			@endforeach

			<div class="sl_item-nav">
				<div class="img-nav"
				     style="background-image: url({{ asset('images/sliders/'.$firstSlider) }});"></div>
			</div>

		@endif

	</div>
</div>
