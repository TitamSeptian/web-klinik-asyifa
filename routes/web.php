<?php

use App\Http\Controllers\DashboardController;
use App\Http\Controllers\DoctorController;
use App\Http\Controllers\GalleryController;
use App\Http\Controllers\LandingController;
use App\Http\Controllers\PostController;
use App\Http\Controllers\ServiceController;
use App\Http\Controllers\TagController;
use Illuminate\Support\Facades\Route;


/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', [LandingController::class, 'home'])->name('home');;
Route::get('/about', [LandingController::class, 'about'])->name('about');

Route::get('/articles', [LandingController::class, 'articles'])->name('articles');

Route::get('/{slug}/blog', [LandingController::class, 'blog'])->name('blog');

// Route::get('/dashboard', function () {
//     return Inertia::render('Dashboard/Dashboard');
// });

Route::prefix("/admin")->middleware(["auth"])->group(function () {
    Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard');
    Route::resource('/tags', TagController::class);
    Route::resource('/doctor', DoctorController::class);
    Route::resource('/service', ServiceController::class);
    Route::resource('/post', PostController::class);
    Route::put('/post/{post}/status', [PostController::class, 'status'])->name('post.status');
    Route::resource('/gallery', GalleryController::class);
});
