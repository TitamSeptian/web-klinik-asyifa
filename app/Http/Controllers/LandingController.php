<?php

namespace App\Http\Controllers;

use App\Models\Post;
use App\Models\Service;
use App\Models\TagPost;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\URL;
use Inertia\Inertia;


class LandingController extends Controller
{
    public function home()
    {
        $twoLatestPost = Post::all()->take(2)->each(function ($post) {
            $post->tags->map(function ($tag) {
                $tag->name = $tag->tag->name;
                unset($tag->name);
                return $tag;
            });
        })->each(function ($post) {
            $post->user = $post->user->name;
        })->each(function ($post) {
            $post->thumbnail = Storage::url($post->thumbnail);
        })->each(function ($post) {
            $post->published_at = \Date::parse($post->published_at)->format('d F Y');
        })->each(function ($post) {
            $post->see_detail = URL::route('blog', $post->slug);
        });
        $latestPost = Post::all()->take(1)->each(function ($post) {
            $post->tags->map(function ($tag) {
                $tag->name = $tag->tag->name;
                unset($tag->name);
                return $tag;
            });
        })->each(function ($post) {
            $post->user = $post->user->name;
        })->each(function ($post) {
            $post->thumbnail = Storage::url($post->thumbnail);
        })->each(function ($post) {
            $post->published_at = \Date::parse($post->published_at)->format('d F Y');
        })->each(function ($post) {
            $post->see_detail = URL::route('blog', $post->slug);
        });
        // $latest = Post::with('user', 'tags')->orderBy('created_at', 'desc')->limit(3)->get();
        $reviews = [
            [
                'name' => 'Rifki Riyadi Sihabudin',
                'stars' => 5,
                'comment' => 'Dokter Gerry sangat ramah. Terakhir ke klinik untuk tes Covid dan hasilnya positif. Alhamdulillah sekarang sudah sembuh. Biidznillah.',
            ],
            [
                'name' => 'Tahyudin Thea',
                'stars' => 5,
                'comment' => 'Dokter Gerry-nya ramah. Tempatnya bersih.  Menyediakan WiFi gratis.',
            ],
            [
                'name' => 'Fenti Yuliana',
                'stars' => 5,
                'comment' => 'Fasilitas yang dimiliki klinik sudahlengkap, Memiliki layanan USG gratis, EKG gratis, dan menerima BPJS Kesehatan.',
            ],
            [
                'name' => 'Cipta Atmaja',
                'stars' => 5,
                'comment' => 'Pelayanan memuaskan',
            ],
            [
                'name' => 'Intan Yulianty',
                'stars' => 5,
                'comment' => 'Pelayanan terbaik',
            ],
            [
                'name' => 'Shendy Suyanapratama',
                'stars' => 5,
                'comment' => 'Biaya pengobatan sangat terjangkau.',
            ],
        ];
        $servicesKlinik = Service::where('type', 'service')->get();
        $servicesLab = Service::where('type', 'lab')->get();

        return Inertia::render('Landing/Landing', [
            'lattestPost' => $latestPost,
            'twoLatestPost' => $twoLatestPost,
            'reviews' => $reviews,
            'servicesKlinik' => $servicesKlinik,
            'servicesLab' => $servicesLab,
        ]);
    }

    public function about()
    {
        return Inertia::render('Landing/About');
    }

    public function articles()
    {
        $posts = Post::all();
        return Inertia::render('Landing/Blog', [
            'posts' => $posts
        ]);
    }

    public function blog($slug = null)
    {
        $post = Post::where('slug', $slug)->first();
        return Inertia::render('Landing/Articles', [
            'post' => $post
        ]);
    }
}
