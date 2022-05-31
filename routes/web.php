<?php

use App\Http\Controllers\DashboardController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;


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

Route::get('/', function () {
    return Inertia::render('Landing/Landing');
})->name('home');;
Route::get('/about', function () {
    return Inertia::render('Landing/About');
})->name('about');

Route::get('/articles', function () {
    return Inertia::render('Landing/Articles');
})->name('articles');

Route::get('/blog', function () {
    return Inertia::render('Landing/Blog');
})->name('blog');

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard/Dashboard');
});

Route::prefix("/admin")->group(function () {
    Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard');
});
