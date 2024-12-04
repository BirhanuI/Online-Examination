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
        Schema::create('teacher__grade_sections', function (Blueprint $table) {
            $table->id();
            $table->foreignId('teacher_id');
            $table->foreignId('grade_id');
            $table->foreignId('subject_id');
            $table->string('section_id');
            $table->boolean('is_main_teacher')->default(false);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('teacher__grade_sections');
    }
};
