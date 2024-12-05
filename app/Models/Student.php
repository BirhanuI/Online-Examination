<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\SoftDeletes;

class Student extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'user_id',
        'registration_number',
        'first_name',
        'last_name',
        'phone',
        'grade',
        'section',
        'date_of_birth',
        'gender',
        'address',
        'city',
        'state',
        'profile_photo',
    ];
    protected $appends = ['full_name'];
    public function getFullNameAttribute()
    {
        return $this->first_name . ' ' . $this->last_name;
    }
    public function user():BelongsTo
    {
        return $this->belongsTo(User::class);
    }

}
