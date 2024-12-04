<?php

namespace App\Http\Controllers;

use App\Models\Grade;
use App\Models\Subject;
use App\Models\Teacher;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class TeacherController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $teachers = Teacher::latest()->get();
        $subject = Subject::all();
       return Inertia::render('Teacher/Index', ['teachers' => $teachers,'subject' => $subject]);
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
        // dd($request->all());
        $request->validate([
            'first_name' => 'required',
            'last_name' => 'required',
            'email' => 'required',
            'phone' => 'required',
            'date_of_birth' => 'required|date',
            'gender' => 'required|in:male,female',
            'address' => 'required',
            'city' => 'required',
            'state' => 'required',
            'grade_section.*.grade_id' => 'required', 'bail',
            'grade_section.*.section_id' => 'required', 'bail',
            'grade_section.*.subject_id' => 'required', 'bail',
        ],  [
            'grade_section.*.grade_id.required' => 'Grade is required.',
            'grade_section.*.section_id.required' => 'Section is required.',
            'grade_section.*.subject_id.required' => 'Subject is required.',
        ],);


        // dd($request->grade_section);
        DB::transaction(function () use ($request) {
            $user = User::create(['name' => $request->first_name . ' ' . $request->last_name, 'email' => $request->email, 'password' => bcrypt($request->email),'role' => 'teacher']);
            $teacher = Teacher::create([
                'user_id' => $user->id,
                'full_name' => $request->first_name." ".$request->last_name,
                'email' => $request->email,
                'phone' => $request->phone,
                'date_of_birth' => $request->date_of_birth,
                'gender' => $request->gender,
                'address' => $request->address,
                'city' => $request->city,
                'state' => $request->state,
            ]);
            $teacher->grade_section()->createMany($request->grade_section);

            foreach ($request->grade_section as $gradeSection) {
                $grade = Grade::where('grade', $gradeSection['grade_id'])->first();
                if (!$grade) {
                    Grade::create(['grade' => $gradeSection['grade_id']]);
                }
            }
        });
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
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
