<div class="sl_slider">
    @if(count($sliders)>0)
        @foreach($sliders as $slider)
            @foreach($slider->images->where('condition','max') as $image)

                <div class="sl_item"
                     style="background-image: url({{ asset("https://357319.selcdn.ru/artspeople/".$image->type.'/'.$image->src) }});">
                    @if($slider->is_blackout_overlay == 1)
                        <div class="sl_item__overlay"></div>
                    @endif
                    <div class="wrapper_main">
                        <div class="logoName">
                            <h1>{{ $slider->title }}</h1>
                            <p>{!! $slider->description !!}</p>
                            <div class="slider_btn__container">
                                <a class="slider_a" href="{{ $slider->url }}">
                                    <span class="slider_btn">Подробнее</span>
                                </a>
                            </div>
                        </div>
                    </div>
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
