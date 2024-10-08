<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Response extends Model
{
    use HasFactory;


    protected $fillable = [
        'user_id',
        'question_id',
        'answer',
        'exam_id',
    ];
    public function  user():BelongsTo
    {
        return $this->belongsTo(User::class);
    }
    public function question():BelongsTo
    {
        return $this->belongsTo(Question::class);
    }
    public function exam():BelongsTo
    {
        return $this->belongsTo(Exam::class);
    }
}
