<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Статьи</title>

    {!! $css !!}
</head>

<body>

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
                    <a href="/">
                    <div class="logo">
                        <img src="{{ asset('images/logo/logo.png') }}">
                    </div>
                    </a>
                </div>
                <div class="col-md-9  col-xs-9 col-sm-9">
                    <ul>
                        <li><a href="/">ГЛАВНАЯ</a> </li>
                        <li><a href="/articles">НОВОСТИ</a> </li>
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
                    <a href="/">
                    <div class="logo">
                        <img src="{{ asset('images/logo/logo_white5.png') }}">
                    </div>
                    </a>
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

    {!! $content !!}

</section>

<footer>
    <div class="footer">
        <a href="https://instagram.com/artspeople.ru?igshid=bvoukvyxzxe6"><i class="fa fa-instagram"></i></a>
        <a href="https://t.me/CoBPeMeHHuK"><i class="fa fa-telegram"></i></a>
        <a href="https://vk.com/artspeopleru"><i class="fa fa-vk"></i></a>
    </div>
</footer>
{!! $scripts !!}

</body>

</html>
