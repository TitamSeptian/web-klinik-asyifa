<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;
use Inertia\Inertia;

class LandingController extends Controller
{
    public function home()
    {
        return Inertia::render('Landing/Landing');
    }

    public function about()
    {
        return Inertia::render('Landing/About');
    }

    public function articles()
    {
        $posts = Post::all();
        return Inertia::render('Landing/Articles', [
            'posts' => $posts
        ]);
    }

    public function blog($slug = null)
    {
        $post = Post::where('slug', $slug)->first();
        return Inertia::render('Landing/Blog', [
            'post' => $post
        ]);
    }
}
