<?php

namespace App\Http\Controllers;

use App\Models\Doctor;
use App\Models\Gallery;
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
        $twoLatestPost = Post::all()->take(3)->each(function ($post) {
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
        $servicesKlinik = Service::where('type', 'service')->get()->map(function ($service) {
            return [
                'name' => $service->name,
                'icon' => $service->icon,
                'description' => html_entity_decode($service->description),
            ];
        });
        $servicesLab = Service::where('type', 'lab')->get();
        $doctors = Doctor::all()->take(3)->each(function ($doctor) {
            $doctor->path_image = Storage::url($doctor->path_image);
        });
        return Inertia::render('Landing/Landing', [
            'lattestPost' => $latestPost,
            'twoLatestPost' => $twoLatestPost,
            'reviews' => $reviews,
            'servicesKlinik' => $servicesKlinik,
            'servicesLab' => $servicesLab,
            'doctors' => $doctors,
        ]);
    }

    public function about()
    {
        $activity = [
            [
                'name' => 'Senam Sehat',
                'desc' => 'Kegiatan senam dilakukan setiap hari Minggu pagi. Dipimpin oleh instruktur senam berpengalaman dan diikuti olehibu-ibu. Tujuan kegiatan ini adalah untuk mempromosikan cara sehat yang murah dan mengontrol tekanan darah para peserta',
            ],
            [
                'name' => 'Pengajian Rutin',
                'desc' => 'Kegiatan ini dilakukan sebulan sekali pada malam Jumat di minggu pertama awal bulan. Diikuti sekitar 40 orang dari jemaah masjid sekitar',
            ],
            [
                'name' => 'Pelatihan PMR-SBH',
                'desc' => 'Kegiatan ini dilakukan secara insidental dan meilibatkan siswa-siswa SMP-SMA yang mengikuti PMR dan Saka Bakti Husada. Bentuk pelatihannya berupa materi P3K, BHD, RJP, UKS, Kesehatan Remaja, Rokok, Narkoba, dll.',
            ],
            [
                'name' => 'Kegiatan Bakti Sosial (Baksos)',
                'desc' => 'Kegiatan Bakti Sosial (Baksos) dilakukan setiap 1 bulan sekali yaitu berupa pengobatan masal serta skreening kesehatan, hingga pembagian buku tulis bagi anak-anak sekolah. Kegiatan ini bekerja sama dengan Tim Medis Asyiifaa’ dan PKM Senat Unpad'
            ],
            [
                'name' => 'Skreening Anak Pendidikan Usia Dini',
                'desc' => 'Kegiatan ini ditujuakan untuk anak usia dini yaitu, dibawah lima tahun. Basanya menyasar permasalahan seperti kesehatan gigi, mata, gizi anak, dan lain sebagainya. Kegiatan ini bertempat di PAUD Henisa Desa Margaluyu, Kecamatan Tanjungsari Kab. Sumedang.'
            ],
            [
                'name' => 'Pelatihan Dokter Kecil',
                'desc' => 'Dokter yang dibina berasal dari SDN 1 Margaluyu dari kelas 4 dan kelas 5 SD. Harapan adanya kegiatan ini adalah para dokter kecil menjadi kader kesehatan bagi dirinya sendiri, teman sekolahnya, dan keluarganya.'
            ],
        ];
        return Inertia::render('Landing/About', [
            'activity' => $activity,
        ]);
    }

    public function articles()
    {
        $twoLatestPost = Post::all()->take(3)->each(function ($post) {
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
        $posts = Post::all()->each(function ($post) {
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

        return Inertia::render('Landing/Blog', [
            'posts' => $posts,
            'lattestPost' => $latestPost,
            'twoLatestPost' => $twoLatestPost,
        ]);
    }

    public function blog($slug = null)
    {
        $post = Post::where('slug', $slug)->first();
        $post->tags->map(function ($tag) {
            $tag->name = $tag->tag->name;
            unset($tag->name);
            return $tag;
        });
        $post->user = $post->user->name;
        $post->cover = Storage::url($post->cover);
        $post->published_at = \Date::parse($post->published_at)->format('d F Y');
        $post->see_detail = URL::route('blog', $post->slug);

        return Inertia::render('Landing/Articles', [
            'post' => $post
        ]);
    }

    public function gallery()
    {
        $galleries = Gallery::all()->each(function ($gallery) {
            $gallery->path_image = Storage::url($gallery->path_image);
            $gallery->see_detail = URL::route('gallery', $gallery->slug);
        });
        return Inertia::render('Landing/Gallery', [
            'galleries' => $galleries
        ]);
    }
}
