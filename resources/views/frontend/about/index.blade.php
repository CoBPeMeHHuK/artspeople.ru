<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>О проекте</title>

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
            {{--<li><a href="/">ГЛАВНАЯ</a></li>--}}
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
                        {{--<li><a href="/">ГЛАВНАЯ</a> </li>--}}
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

</header>

<section>

    {!! $category !!}

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

{!! $scripts !!}

</body>

</html>
