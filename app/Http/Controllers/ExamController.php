<?php

namespace App\Http\Controllers;

use App\Models\Exam;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ExamController extends Controller
{
    public function index()
    {
        $exams = Exam::latest()->get();
        return Inertia::render('ExamAdmin/Index',['exams' => $exams]);
    }
    public function store(Request $request)
    {
        $exam = $request->validate([
            'title' => 'required|min:3',
            'description' => '',
            'duration' => 'numeric',
            'subject_id' => 'required',
        ]);
        Exam::create($exam);
    }
}
