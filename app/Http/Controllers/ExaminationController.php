<?php

namespace App\Http\Controllers;

use App\Models\Attempts;
use App\Models\Exam;
use App\Models\Question;
use App\Models\Response;
use App\Models\Student;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class ExaminationController extends Controller
{
    public function index()
    {
        $userId = Auth::id();
        $student = Student::where('user_id', $userId)->first();
        if (!$student) {
            return;
        }
        // dd($student->grade);
        $exams = Exam::with('schedule')->where('grade', $student->grade)->whereHas('schedule', function ($query) {
            $query->where('date', '>', Carbon::now()->subMinutes(30));
        })->withCount('questions')->get();
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
        $userId = Auth::id();
        $student = Student::where('user_id', $userId)->first();
        if (!$student) {
            return;
        }
        $exams = Exam::with('schedule')->where('grade', $student->grade)->whereHas('schedule', function ($query) {
            $query->where('date', '>', Carbon::now()->subMinutes(30));
        })->withCount('questions')->get();
        return Inertia::render('ExamPage/Index', ['exams' => $exams]);
    }
    public function takeExam(Request $request)
    {
        $exam = Exam::find($request->id);
        return Inertia::render('TakeExam/TakeExam', ['exam' => $exam, 'questions' => $exam->questions]);
    }
    public function getTime()
    {
        $date =  Carbon::now()->setTimezone('America/New_York');
        return response()->json(['time' => $date]);
    }
}
