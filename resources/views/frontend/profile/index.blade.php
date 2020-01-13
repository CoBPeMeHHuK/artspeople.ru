<html lang="en">

<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta http-equiv="X-UA-Compatible" content="ie=edge">
	<meta name="_token" content="{{ @csrf_token() }}"/>
	<title>Профиль</title>

	{!! $css !!}

</head>
<body>
<div id="app">
<div class="profile_header_mobile_container">

	<div class="burgerClose">
		<div class="close hamburger hamburger--spring">
			<div class="logo">
				<img src="{{ asset('images/logo/logo_white5.png') }}">
			</div>
			<div class="hamburger-box">
				<div class="hamburger-inner"></div>
			</div>
		</div>
	</div>
	<div class="modalMenu">
		<div class="menu_container_mobile">
			<ul>
			{{--<li><a href="/">ГЛАВНАЯ</a></li>--}}
			@if($isAuth)
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
	@if($isAuth)
	<div class="profile_header_mobile">
		<ul class="header_mobile_ul">

			<li class="header_mobile_li">
				<router-link to="/profile/works">
					<span class="bottom-item__icon bottom_icon_works"></span>
				</router-link>
			</li>
            <li class="header_mobile_li">
                <router-link to="/profile/friends">
                    <span class="bottom-item__icon bottom_icon_friends"></span>
                </router-link>
            </li>			<li class="header_mobile_li">
				<router-link to="/profile/mail">
					<span class="bottom-item__icon bottom_icon_mail"></span>
				</router-link>
			</li>
			<li class="header_mobile_li">
				<router-link to="/profile/settings">
					<span class="bottom-item__icon bottom_icon_contacts"></span>
				</router-link>
			</li>
			<li class="header_mobile_li">
				<router-link to="/profile/{{ $user->id }}">
					<span class="bottom-item__icon bottom_icon_homepage"></span>
				</router-link>
			</li>
		</ul>
	</div>
		@endif
</div>


<div class="main">

	{!! $left_sidebar !!}

	<div class="right-section {!! $isActiveLeftSidebar !!}">
		<div class="profile_header">
			<div class="header-container">
				<ul class="header-container__ul">
					{{--<li><a href="/">ГЛАВНАЯ</a></li>--}}
					@if($isAuth)
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
		{!! $content !!}
	</div>


</div>
</div>

{!! $scripts !!}


</body>

</html>
