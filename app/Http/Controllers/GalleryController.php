<?php

namespace App\Http\Controllers;

use App\Http\Requests\GalleryRequest as Request;
use App\Models\Gallery;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class GalleryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $galleries = Gallery::all();
        return view('gallery.index', compact('galleries'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('gallery.create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $slug = Str::of($request->title)->slug('-');
        $fileNameImage = $slug . '-' . time() . '.' . $request->file('image')->getClientOriginalExtension();
        $pathImage = $request->file('image')->storeAs('public/gallery', $fileNameImage);
        $gallery = Gallery::create([
            'title' => $request->title,
            'slug' => $slug,
            'path_image' => $pathImage,
        ]);
        if ($gallery) {
            return redirect()->route('gallery.index')->with('success', 'Foto berhasil di simpan');
        } else {
            return redirect()->route('gallery.index')->with('error', 'Foto gagal di simpan');
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $gallery = Gallery::findOrFail($id);
        return view('gallery.edit', compact('gallery'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $data = [];
        $gallery = Gallery::findOrFail($id);
        $slug = Str::of($request->title)->slug('-');
        if ($request->hasFile('image')) {
            if (Storage::disk('local')->exists($gallery->path_image)) {
                Storage::delete($gallery->path_image);
            }
            $fileNameImage = $slug . '-' . time() . '.' . $request->file('image')->getClientOriginalExtension();
            $pathImage = $request->file('image')->storeAs('public/gallery', $fileNameImage);
            $data['path_image'] = $pathImage;
        }
        $data['title'] = $request->title;
        $data['slug'] = $slug;
        $update = $gallery->update($data);
        if ($update) {
            return redirect()->route('gallery.index')->with('success', 'Foto berhasil di simpan');
        } else {
            return redirect()->route('gallery.index')->with('error', 'Foto gagal di simpan');
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $gallery = Gallery::findOrFail($id)->delete();
        if ($gallery) {
            return redirect()->route('gallery.index')->with('success', 'Foto berhasil di hapus');
        } else {
            return redirect()->route('gallery.index')->with('error', 'Foto gagal di hapus');
        }
    }
}
