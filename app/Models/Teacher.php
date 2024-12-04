<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Teacher extends Model
{
    use HasFactory;

    protected $guarded = [];

    protected $fillable = [
        'user_id',
        'email',
        'full_name',
        'phone',
        'grade',
        'date_of_birth',
        'gender',
        'address',
        'city',
        'state',
        'profile_photo',
    ];
    public function user():BelongsTo
    {
        return $this->belongsTo(User::class);
    }
    public function grade_section():HasMany
    {
        return $this->hasMany(Teacher_Grade_section::class);
    }
    public function students()
    {
        return Student::whereIn('grade_id', $this->grade_section()->pluck('grade_id'))
                      ->where(function ($query) {
                          foreach ($this->grade_section as $gradeSection) {
                              $sections = explode(',', $gradeSection->sections);
                              $query->orWhereIn('section', $sections);
                          }
                      });
    }
}
