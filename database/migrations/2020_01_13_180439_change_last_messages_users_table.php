<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class ChangeLastMessagesUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('last_messages_users', function (Blueprint $table) {
            $table->bigInteger('last_user_changes_id')->unsigned()->after('count_of_unread');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('last_messages_users', function (Blueprint $table) {
            $table->dropColumn('last_user_changes_id');
        });
    }
}
