<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class ChangeTableWorks extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('works', function (Blueprint $table) {
            $table->smallInteger('is_active_main_pages')->unsigned()->default(0)->after('is_active');
            $table->smallInteger('is_moderated')->unsigned()->default(0)->after('is_active_main_pages');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('works', function (Blueprint $table) {
            $table->dropColumn('is_active_main_pages');
            $table->dropColumn('is_moderated');
        });
    }
}
