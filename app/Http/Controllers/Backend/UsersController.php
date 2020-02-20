<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\AppController;
use App\Model\User;
use Illuminate\Http\Request;

class UsersController extends AppController
{


	public function index()
    {
        $users = User::with('avatar' )->orderBy('id','desc')->get();
	    return view('backend.users.index')->with(['users'=>$users]);
    }



    public function show(int $id){

    }



    public function edit(int $id)
    {

    }


    public function create()
    {

    }


    public function store(Request $request)
    {

    }


    public function update(int $id, Request $request)
    {

    }


    public function destroy(int $id){

    }
}
