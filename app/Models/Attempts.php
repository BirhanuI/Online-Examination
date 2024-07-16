<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Attempts extends Model
{
    use HasFactory;


    protected $fillable = [
        'user_id',
        'exam_id',
        'score',
        'start_date',
        'end_date',
    ];
}
