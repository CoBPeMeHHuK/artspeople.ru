<html lang="en">

<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta http-equiv="X-UA-Compatible" content="ie=edge">
	<title>Главная страница</title>

		{!! $css !!}
</head>

<body class="bg">

<header>
	<div class="modalMenu">
		<div class="burgerClose">
			<div class="close hamburger hamburger--spring">
				<div class="hamburger-box">
					<div class="hamburger-inner"></div>
				</div>
			</div>
		</div>

		<ul>
			<li><a href="/">ГЛАВНАЯ</a></li>
            <li><a href="/articles">НОВОСТИ</a></li>
			@if($isAuth)
				<li><a href="{{ route('profile',$user_id) }}">МОЙ ПРОФИЛЬ</a></li>
				<li><a href="{{ route('logout') }}"
				       onclick="event.preventDefault();
                                                     document.getElementById('logout-form').submit();">
						{{ __('Выйти') }}
					</a>

					<form id="logout-form" action="{{ route('logout') }}" method="POST" hidden>
						@csrf
					</form>
				</li>
				@else
				<li><a href="{{ route('register') }}">РЕГИСТРАЦИЯ</a></li>
				<li><a href="{{ route('login') }}">ВОЙТИ</a></li>
			@endif

		</ul>
	</div>

	<div class="menu">
		<div class="container-block">
			<div class="row rows">
				<div class="col-md-3 col-xs-3 col-sm-3">
					<div class="logo">
						<img src="{{ asset('images/logo/logo.png') }}">
					</div>
				</div>
				<div class="col-md-9  col-xs-9 col-sm-9">
					<ul>
						<li><a href="/">ГЛАВНАЯ</a> </li>
                        <li><a href="/">НОВОСТИ</a> </li>
						@if($isAuth)
							<li><a href="{{ route('profile',$user_id) }}">МОЙ ПРОФИЛЬ</a></li>
							<li><a href="{{ route('logout') }}"
							       onclick="event.preventDefault();
                                                     document.getElementById('logout-form').submit();">
									{{ __('Выйти') }}
								</a>

								<form id="logout-form" action="{{ route('logout') }}" method="POST" hidden>
									@csrf
								</form>
							</li>
						@else
							<li><a href="{{ route('register') }}">РЕГИСТРАЦИЯ</a></li>
							<li><a href="{{ route('login') }}">ВОЙТИ</a></li>
						@endif
					</ul>
				</div>
			</div>
		</div>
	</div>

	<div class="mobMenu">
		<div class="container">
			<div class="row">
				<div class="col-md-6 col-xs-6 col-sm-6">
					<div class="logo">
                        <img src="{{ asset('images/logo/logo_white5.png') }}">
                    </div>
				</div>
				<div class="col-md-6 col-xs-6 col-sm-6">
					<div class="open hamburger hamburger--spring">
						<div class="hamburger-box">
							<div class="hamburger-inner"></div>
						</div>
					</div>

				</div>
			</div>
		</div>
	</div>

	{!! $sliders !!}

</header>

<section>

	{!! $best !!}

</section>

<footer>
	<div class="footer">
		<a href="#"><i class="fa fa-facebook"></i></a>
		<a href="#"><i class="fa fa-instagram"></i></a>
		<a href="#"><i class="fa fa-twitter"></i></a>
		<a href="#"><i class="fa fa-pinterest"></i></a>
		<a href="#"><i class="fa fa-vk"></i></a>
	</div>
</footer>

{{--<div class="marquiz-pops marquiz-pops_position_bottom-left marquiz-pops_rounded marquiz-pops_shadowed marquiz-pops_blicked marquiz-pops_position" ><a class="marquiz-pops__body" href="#popup:marquiz_5e034617d74ff400445664f7" data-marquiz-pop-text-color="#ffffff" data-marquiz-pop-background-color="#2050f2" data-marquiz-pop-svg-color="#fff" data-marquiz-pop-close-color="#fff" data-marquiz-pop-color-pulse="rgba(32, 80, 242, 0.4)" data-marquiz-pop-color-pulse-alpha="rgba(32, 80, 242, 0)" data-marquiz-pop-bonuses="1" data-marquiz-pop-delay="20s" data-marquiz-pop="true"><span class="marquiz-pops__icon"></span><span class="marquiz-pops__content"><span class="marquiz-pops__content-title">Ответьте на 6 вопросов</span><span class="marquiz-pops__content-text">&laquo;Индивидуальный подбор объектов&raquo;</span></span><span class="marquiz-pops__bonus">Вам доступен бонус и скидка</span></a></div>--}}

{!! $scripts !!}

</body>

</html>
