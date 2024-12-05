<?php

namespace App\Http\Controllers;

use App\Models\Student;
use App\Models\Teacher;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class StudentController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $teacher = Teacher::where('user_id', Auth::id())->first();
        // dd($teacher->students());

        if (Auth::user()->role == 'admin') {
            $student = Student::with('user')->latest()->get();
        } elseif (Auth::user()->role == 'teacher') {
            if ($teacher->students() == null) {

                $student = $teacher->students()->latest()->get();
            }
        }

        return Inertia::render('Student/Student', ['students' => $student]);
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
        $request->validate([
            'first_name' => 'required',
            'last_name' => 'required',
            'email' => 'required',
            'phone' => 'nullable',
            'section' => 'required',
            'grade' => 'required',
            'date_of_birth' => 'required|date',
            'gender' => 'required|in:male,female',
            'address' => 'required',
            'city' => 'required',
            'state' => 'required',
        ]);
        // dd($request->all());
        DB::transaction(function () use ($request) {
            $user = User::create(['name' => $request->first_name . ' ' . $request->last_name, 'email' => $request->email, 'password' => bcrypt($request->email)]);
            Student::create([
                'first_name' => $request->first_name,
                'last_name' => $request->last_name,
                'email' => $request->email,
                'phone' => $request->phone,
                'grade' => $request->grade,
                'section' => $request->section,
                'date_of_birth' => $request->date_of_birth,
                'gender' => $request->gender,
                'address' => $request->address,
                'city' => $request->city,
                'state' => $request->state,
                'user_id' => $user->id,
            ]);
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
        $student = Student::find($id);
        if (!$student) return;
        $request->validate([
            'first_name' => 'required',
            'last_name' => 'required',
            'email' => 'required',
            'phone' => 'nullable',
            'grade' => 'required',
            'date_of_birth' => 'required|date',
            'gender' => 'required|in:male,female',
            'address' => 'required',
            'city' => 'required',
            'state' => 'required',
        ]);
        DB::transaction(function () use ($request, $id) {
            $student = Student::find($id);
            $student->update(
                [
                    'first_name' => $request->first_name,
                    'last_name' => $request->last_name,
                    'phone' => $request->phone,
                    'grade' => $request->grade,
                    'date_of_birth' => $request->date_of_birth,
                    'gender' => $request->gender,
                    'address' => $request->address,
                    'city' => $request->city,
                    'state' => $request->state,
                ]
            );
            // dd($student);
            User::where('id', $student->user_id)->update(['name' => $request->first_name . ' ' . $request->last_name, 'email' => $request->email]);
        });
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $student = Student::find($id);
        if ($student) $student->delete();
    }
}
