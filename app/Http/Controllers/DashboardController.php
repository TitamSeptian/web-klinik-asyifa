<?php

namespace App\Http\Controllers;

use App\Models\Doctor;
use App\Models\Post;
use App\Models\Service;
use Illuminate\Http\Request;

class DashboardController extends Controller
{
    public function index()
    {
        $posts = Post::all();
        $doctors = Doctor::all();
        $services = Service::all();
        return view('dashboard.index', compact('posts', 'doctors', 'services'));
    }
}
