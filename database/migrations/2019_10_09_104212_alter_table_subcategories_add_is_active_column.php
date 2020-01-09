<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AlterTableSubcategoriesAddIsActiveColumn extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('subcategories', function (Blueprint $table) {
	        $table->tinyInteger('rating')->default(1)->unsigned()->after('description');
	        $table->tinyInteger('is_active')->default(1)->unsigned()->after('rating');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('subcategories', function (Blueprint $table) {
	        $table->dropColumn('rating');
	        $table->dropColumn('is_active');
        });
    }
}
