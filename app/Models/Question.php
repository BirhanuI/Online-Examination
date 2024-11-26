<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Question extends Model
{
    use HasFactory;

    protected $fillable = [
        'exam_id',
        'subject_id',
        'question',
        'option1',
        'option2',
        'option3',
        'option4',
        'answer',
        'description',
        'image',
    ];

    public function exam():BelongsTo
    {
        return $this->belongsTo(Exam::class);
    }

    public function responses():HasOne
    {
        return $this->hasOne(Response::class);
    }
}
