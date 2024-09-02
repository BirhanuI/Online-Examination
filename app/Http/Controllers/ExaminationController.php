<?php

namespace App\Http\Controllers;

use App\Models\Exam;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ExaminationController extends Controller
{
    public function index()
    {
        $exams = Exam::latest()->get();
        return Inertia::render('ExamPage/Index', ['exams' => $exams]);
    }
    public function takeExam(Request $request){
        $exam = Exam::find($request->id);
        return Inertia::render('TakeExam/TakeExam',['exam'=>$exam,'questions'=> $exam->questions]);
    }
}
