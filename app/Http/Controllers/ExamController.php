<?php

namespace App\Http\Controllers;

use App\Models\Exam;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;
use Inertia\Inertia;

class ExamController extends Controller
{
    public function index()
    {
        $exams = Exam::latest()->get();
        return Inertia::render('ExamAdmin/Index', ['exams' => $exams]);
    }
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'title' => ['required', 'bail', 'min:3'],
            'description' => [''],
            'subject_id' => 'required',
            'duration' => ['required', 'bail'],
            'questions.*.question' => ['required', 'bail',],
            'questions.*.option1' => ['required', 'bail',],
            'questions.*.option2' => ['required', 'bail',],
            'questions.*.option3' => ['bail',],
            'questions.*.option4' => ['bail',],
            'questions.*.answer' => 'required|bail',
        ],  [
            'questions.*.question.required' => 'Question is required.',
            'questions.*.option1.required' => 'Option A is required.',
            'questions.*.option2.required' => 'Option B is required.',
            'questions.*.answer.required' => 'Answer is required.',
        ],);
        if ($validator->fails()) {
            return redirect()->back()->withErrors($validator)->withInput();
        }
        DB::transaction(function () use ($request) {
            $exam =  Exam::create($request->all());
            //    dd($request->get('questions'));
            $exam->questions()->createMany($request->get('questions'));
            // $request->session()->flash('success', 'Exam created successfully.');
        });
    }
    public function create()
    {
        return Inertia::render('ExamAdmin/CreateExam');
    }
    public function edit(string $id)
    {
        $exam = Exam::find($id)->load('questions');
        // dd($exam);
        return Inertia::render('ExamAdmin/CreateExam', ['exam' => $exam]);
    }
    public function update(Request $request, string $id)
    {
        $validator = Validator::make($request->all(), [
            'title' => ['required', 'bail', 'min:3'],
            'description' => [''],
            'subject_id' => 'required',
            'duration' => ['required', 'bail'],
            'questions.*.question' => ['required', 'bail',],
            'questions.*.option1' => ['required', 'bail',],
            'questions.*.option2' => ['required', 'bail',],
            'questions.*.option3' => ['bail',],
            'questions.*.option4' => ['bail',],
            'questions.*.answer' => 'required|bail',
        ],  [
            'questions.*.question.required' => 'Question is required.',
            'questions.*.option1.required' => 'Option A is required.',
            'questions.*.option2.required' => 'Option B is required.',
            'questions.*.answer.required' => 'Answer is required.',
        ],);
        if ($validator->fails()) {
            return redirect()->back()->withErrors($validator)->withInput();
        }
        DB::transaction(function () use ($request, $id) {
            $exam =  Exam::find($id);
            $exam->update($request->all());
            if(!$exam){
                return to_route('exam.index');
            }
            $exam->questions()->delete();
            $exam->questions()->createMany($request->get('questions'));
        });
        return to_route('exam.index');
    }
    public function destroy(string $id)
    {

        Exam::find($id)->delete();
    }
}
