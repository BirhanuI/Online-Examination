<?php

use App\Http\Controllers\ExamController;
use App\Http\Controllers\ExaminationController;
use App\Http\Controllers\ExamResultController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\QuestionController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/examination', [ExaminationController::class, 'index'])->name('examination.index');
    Route::post('/examination', [ExaminationController::class, 'store'])->name('take-examination.index');
    Route::get('/take-exam/{title}', [ExaminationController::class, 'takeExam'])->name('take-exam.index');


    Route::get('/exam', [ExamController::class, 'index'])->name('exam.index');
    Route::post('/exam', [ExamController::class, 'store'])->name('exam.index');
    Route::delete('/exam/{id}', [ExamController::class, 'destroy'])->name('exam.destroy');
    Route::get('/exam/{id}', [ExamController::class, 'edit'])->name('exam.edit');
    Route::put('/exam/{id}', [ExamController::class, 'update'])->name('exam.edit');
    Route::get('/exam/create', [ExamController::class, 'create'])->name('exam.create');


    Route::get('/previous-exam', [ExamResultController::class, 'index'])->name('result.index');

    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
