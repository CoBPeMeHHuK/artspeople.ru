<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTableFriendRequestHistory extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('friend_history', function (Blueprint $table) {
            $table->bigIncrements('id');
	        $table->bigInteger('first_user')->unsigned();
	        $table->bigInteger('second_user')->unsigned();
	        $table->string('status')->default('DEFAULT');
            $table->dateTime('created');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('friend_history');
    }
}
