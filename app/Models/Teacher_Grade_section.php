<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Teacher_Grade_section extends Model
{
    use HasFactory;

    protected $fillable = ['teacher_id', 'grade_id', 'section_id','subject_id','is_main_teacher'];
}
