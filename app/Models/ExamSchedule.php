<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class ExamSchedule extends Model
{
    use HasFactory;

    protected $fillable = [
        'exam_id',
        'date',
        'time',
        'is_active'
    ];

    public function exam():BelongsTo
    {
        return $this->belongsTo(Exam::class);
    }
}
