<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('teachers', function (Blueprint $table) {
            $table->string('email');
            $table->string('phone');
            $table->date('date_of_birth');
            $table->enum('gender', ['male', 'female'])->nullable();
            $table->string('address')->nullable();
            $table->string('city')->nullable();
            $table->string('state')->nullable();
            $table->string('profile_photo')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('teachers', function (Blueprint $table) {
            $table->dropColumn('email');
            $table->dropColumn('phone');
            $table->dropColumn('date_of_birth');
            $table->dropColumn('gender');
            $table->dropColumn('address');
            $table->dropColumn('city');
            $table->dropColumn('state');
            $table->dropColumn('profile_photo');
        });
    }
};
