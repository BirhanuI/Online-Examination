<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Exam extends Model
{
    use HasFactory;
    protected $fillable = [
        'title',
        'description',
        'start_date',
        'end_date',
        'subject_id',
        'duration',
        'grade',
    ];
    public function questions():HasMany
    {
        return $this->hasMany(Question::class);
    }
    public function responses():HasMany
    {
        return $this->hasMany(Response::class);
    }

    public function schedule():HasOne
    {
        return $this->hasOne(ExamSchedule::class);
    }

}
