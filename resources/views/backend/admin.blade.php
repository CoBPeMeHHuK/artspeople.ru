@extends('adminlte::page')



@section('title', 'Админка')




@section('content_header')

	<h1>Админка</h1>

@stop



@section('content')

	<p>Добро пожаловать в админку</p>

@stop



@section('css')
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <link rel="stylesheet" href="{{ mix('css/admin.css') }}">
    <link rel="stylesheet" href="{{ mix('css/editor.css') }}">
@stop



@section('js')


@stop
