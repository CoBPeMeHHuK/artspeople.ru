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
			<li><a href="{{ route('register') }}">РЕГИСТРАЦИЯ</a></li>
			<li><a href="{{ route('login') }}">ВОЙТИ</a></li>

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
						<li><a href="{{ route('register') }}">РЕГИСТРАЦИЯ</a> </li>
						<li><a href="{{ route('login') }}">ВОЙТИ</a> </li>
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
</header>
