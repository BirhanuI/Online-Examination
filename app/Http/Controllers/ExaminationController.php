<?php

namespace App\Http\Controllers;

use App\Models\Attempts;
use App\Models\Exam;
use App\Models\Question;
use App\Models\Response;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class ExaminationController extends Controller
{
    public function index()
    {
        $exams = Exam::latest()->get();
        return Inertia::render('ExamPage/Index', ['exams' => $exams]);
    }
    public function store(Request $request)
    {
        // dd($request->answers);
        $request->validate([
            'exam_id' => "required|exists:exams,id"
        ]);
        $result = 0;
        foreach ($request->answers as $questionId => $answer) {
            Response::create(['question_id' => $questionId, 'user_id' => Auth::id(), 'answer' => $answer, 'exam_id' => $request->exam_id]);
            $question = Question::find($questionId);
            if ($question->answer == $answer) {
                $result++;
            }
        }
        Attempts::create(['user_id' => Auth::id(), 'exam_id' => $request->exam_id, 'score' => $result, 'start_date' => now(), 'end_date' => now()]);
        return to_route('examination.index');
    }
    public function takeExam(Request $request)
    {
        $exam = Exam::find($request->id);
        return Inertia::render('TakeExam/TakeExam', ['exam' => $exam, 'questions' => $exam->questions]);
    }
}
