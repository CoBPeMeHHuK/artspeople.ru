<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTableLastMessagesUsers extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('last_messages_users', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->text('message');
            $table->bigInteger('user_to')->unsigned();
            $table->bigInteger('user_from')->unsigned();
            $table->string('unique_users_record');
            $table->smallInteger('count_of_unread')->default(0);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('last_messages_users');
    }
}
