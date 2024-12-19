<?php

namespace App\Http\Controllers;

use App\Models\Attempts;
use App\Models\Exam;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class ExamResultController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $exams = Attempts::with('exam')->where('user_id', Auth::id())->whereHas('exam')->get();

        return Inertia::render('ExamResult/ExamResult', ['exams' => $exams]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Request $request, string $examId)
    {
        $userId = Auth::id();
        $exam = Exam::find($examId);

        if (!$exam) {
            return response()->json(['error' => 'Exam not found'], 404);
        }
        $exam->load([
            'questions' => function ($query) {
                $query->select('id', 'exam_id', 'question', 'option1', 'option2', 'option3', 'option4', 'answer');
            },
            'schedule' => function ($query) use ( $exam) {
                $query->whereRaw('DATE_ADD(date, INTERVAL ? MINUTE) < ?', [$exam->duration, Carbon::now()]);
            },
            'questions.responses' => function ($query) use ($userId) {
                $query->where('user_id', $userId);
            }
        ]);
        return Inertia::render('ExamResult/Show', [
            'exam' => $exam,'score'=> $request->score
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
