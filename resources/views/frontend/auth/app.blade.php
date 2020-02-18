<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Artspeople</title>
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"
          integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
    <link rel="stylesheet" type="text/css" href="{{mix('css/util.css')}}">
	<link rel="stylesheet" href="{{ mix('css/selectric.css') }}">


	<link rel="stylesheet" href="{{ mix('css/hamburgers.min.css') }}">
    <link rel="stylesheet" href="{{ mix('css/hamburger-profile.min.css') }}">
    <link rel="stylesheet" type="text/css" href="{{mix('css/articles.css')}}">
    <link rel="stylesheet" type="text/css" href="{{mix('css/auth.css')}}">
	<link rel="stylesheet" href="{{ asset('additionally/slick/slick.css') }}">
	<link rel="stylesheet" href="{{ asset('additionally/slick/slick-theme.css') }}">
	<link rel="stylesheet" href="{{ mix('css/animate.css') }}">
	<link rel="stylesheet" href="{{ mix('css/magnific.css') }}">


</head>

<body>

<div id="app">

	@include($header)

    @include($content)

	@include($footer)

</div>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/magnific-popup.js/1.1.0/jquery.magnific-popup.min.js" type="text/javascript"></script>
<script src="{{ asset('app/js/frontend/animate-css.js') }}"></script>
<script src="{{ asset('additionally/js/waypoints.min.js') }}"></script>
<script src="{{ asset('additionally/js/slick/slick.min.js') }}"> </script>
<script src="{{ asset('additionally/js/selectric.js') }}"></script>
<script src="{{ asset('additionally/js/auth.js') }}"></script>
<script src="{{ mix('js/main.js') }}"></script>
</body>

</html>
