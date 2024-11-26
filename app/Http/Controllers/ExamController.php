<?php

namespace App\Http\Controllers;

use App\Models\Exam;
use App\Models\ExamSchedule;
use App\Models\Question;
use App\Models\Subject;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;
use Inertia\Inertia;

class ExamController extends Controller
{
    public function index()
    {
        $exams = Exam::with('schedule')->latest()->get();

        return Inertia::render('ExamAdmin/Index', ['exams' => $exams]);
    }
    public function store(Request $request)
    {
        // dd($request->all());
        $validator = Validator::make($request->all(), [
            'title' => ['required', 'bail', 'min:3'],
            'description' => [''],
            'subject_id' => 'required',
            'grade' => 'required',
            'duration' => ['required', 'bail'],
            'questions.*.question' => ['required', 'bail',],
            'questions.*.option1' => ['required', 'bail',],
            'questions.*.option2' => ['required', 'bail',],
            'questions.*.option3' => ['bail',],
            'questions.*.option4' => ['bail',],
            'questions.*.answer' => 'required|bail',
            // 'questions.*.image' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
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
            foreach ($request->questions as $question) {
                // dd($question);
                $imageName = time() . '.' . $question['image']->extension();
                $question['image']->move(public_path('images'), $imageName);
                // $exam->questions->create(array_merge($question, ['image' => "images/" . $imageName]));
                Question::create(['exam_id'=> $exam->id, 'image' => "images/" . $imageName , 'question' => $question['question'], 'option1' => $question['option1'], 'option2' => $question['option2'], 'option3' => $question['option3'], 'option4' => $question['option4'], 'answer' => $question['answer']]);
            }
        });
    }
    public function create()
    {
        $subject = Subject::all();
        return Inertia::render('ExamAdmin/CreateExam', ['subject' => $subject]);
    }
    public function edit(string $id)
    {
        $exam = Exam::find($id)->load('questions');
        // dd($exam);
        return Inertia::render('ExamAdmin/CreateExam', ['exam' => $exam, 'subject' => Subject::all()]);
    }
    public function update(Request $request, string $id)
    {
        $validator = Validator::make($request->all(), [
            'title' => ['required', 'bail', 'min:3'],
            'description' => [''],
            'subject_id' => 'required',
            'grade' => 'required',
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
            if (!$exam) {
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
    public function setExamSchedule(Request $request, string $id)
    {
        // $schedule = ExamSchedule::all();
        // dd($schedule);
        $validatedData = $request->validate([
            'date' => 'required|date',
            'time' => 'required|date',
        ]);
        $exam = Exam::find($id);
        if (!$exam) return false;
        $date = $validatedData['date'];
        $time = $validatedData['time'];
        $dateTime = Carbon::create($time);
        $date = $date . ' ' . $dateTime->format('H:i:s');
        $carbonDate = Carbon::createFromFormat('Y-m-d H:i:s', $date, 'Africa/Addis_Ababa');
        $date = $carbonDate->setTimezone('UTC');

        $existingSchedule = $exam->schedule()->first();
        if ($existingSchedule) {
            $existingSchedule->update(['date' => $date, 'time' => $time]);
        } else {
            $exam->schedule()->create(['date' => $date, 'time' => $time]);
        }
    }
}
