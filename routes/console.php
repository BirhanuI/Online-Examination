<?php

use Carbon\Carbon;
use Illuminate\Foundation\Inspiring;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\Schedule;

Artisan::command('inspire', function () {
    $this->comment(Inspiring::quote());
})->purpose('Display an inspiring quote')->hourly();
Schedule::call(function () {
    \App\Models\ExamSchedule::where('date', '<', Carbon::now())->get()->each(function ($schedule) {
        $examEnd = Carbon::parse($schedule->date)->addMinutes((int) $schedule->exam->duration);
        $schedule->update(['is_active' => now()->lte($examEnd) ? true : false]);
    });
})->everyMinute();
