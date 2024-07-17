<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class ExaminationController extends Controller
{
    public function index()
    {
        return Inertia::render('ExamPage/Index');
    }
}
