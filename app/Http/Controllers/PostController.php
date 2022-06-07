<?php

namespace App\Http\Controllers;

use App\Http\Requests\PostRequest as Request;
use App\Models\Post;
use App\Models\Tag;
use App\Models\TagPost;
use Illuminate\Support\Facades\Storage;
use Jenssegers\Date\Date as Date;
use Illuminate\Support\Str;



class PostController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $posts = Post::all();
        return view('post.index', compact('posts'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $tags = Tag::all();
        return view('post.create', compact('tags'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $slug = Str::of($request->title)->slug('-') . '-' . date("Ymd");
        $fileNameThumbnail = $slug . '-' . time() . '.' . $request->file('thumbnail')->getClientOriginalExtension();
        $filenameCover = $slug . '-' . time() . '.' . $request->file('cover')->getClientOriginalExtension();
        $pathThumbnail = $request->file('thumbnail')->storeAs('public/post/thumbnail', $fileNameThumbnail);
        $pathCover = $request->file('cover')->storeAs('public/post/cover', $filenameCover);
        $post = Post::create([
            'title' => $request->title,
            'slug' => Str::of($request->title)->slug('-') . '-' . date("Ymd"),
            'body' => $request->body,
            'cover' => $pathCover,
            'thumbnail' => $pathThumbnail,
            'user_id' => auth()->id(),
        ]);
        foreach ($request->tags as $tag) {
            TagPost::create([
                'tag_id' => $tag,
                'post_id' => $post->id,
            ]);
        }

        if ($post) {
            return redirect()->route('post.index')->with('success', 'Data berhasil ditambahkan');
        } else {
            return redirect()->route('post.index')->with('error', 'Data gagal ditambahkan');
        }
        return redirect('post');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $post = Post::where('slug', $id)->first();
        return view('post.show', compact('post'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $post = Post::findOrFail($id);
        $tags = Tag::all();
        return view('post.edit', compact('post', 'tags'));
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
        $post = Post::findOrFail($id);
        $slug = Str::of($request->title)->slug('-') . '-' . date("Ymd");
        $data['title'] = $request->title;
        $data['slug'] = $slug;
        $data['body'] = $request->body;
        if ($request->hasFile('thumbnail')) {
            if (Storage::disk('local')->exists($post->thumbnail)) {
                Storage::delete($post->thumbnail);
            }
            $fileNameThumbnail = $slug . '-' . time() . '.' . $request->file('thumbnail')->getClientOriginalExtension();
            $pathThumbnail = $request->file('thumbnail')->storeAs('public/post/thumbnail', $fileNameThumbnail);
            $data['thumbnail'] = $pathThumbnail;
        }
        if ($request->hasFile('cover')) {
            if (Storage::disk('local')->exists($post->cover)) {
                Storage::delete($post->cover);
            }
            $filenameCover = $slug . '-' . time() . '.' . $request->file('cover')->getClientOriginalExtension();
            $pathCover = $request->file('cover')->storeAs('public/post/cover', $filenameCover);
            $data['cover'] = $pathCover;
        }
        $data['status'] = "DRAFT";
        $update = $post->update($data);
        TagPost::where('post_id', $id)->delete();
        foreach ($request->tags as $tag) {
            TagPost::create([
                'tag_id' => $tag,
                'post_id' => $post->id,
            ]);
        }
        if ($update) {
            return redirect()->route('post.index')->with('success', 'Data berhasil diubah');
        } else {
            return redirect()->route('post.index')->with('error', 'Data gagal diubah');
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
        $post = Post::findOrFail($id);
        $post->tags()->delete();
        if (Storage::disk('local')->exists($post->thumbnail)) {
            Storage::delete($post->thumbnail);
        }
        if (Storage::disk('local')->exists($post->cover)) {
            Storage::delete($post->cover);
        }
        $post->delete();
        return redirect()->route('post.index')->with('success', 'Data berhasil dihapus');
    }

    public function status($id)
    {
        $post = Post::findOrFail($id);
        $post->status = 'PUBLISHED';
        $post->published_at = Date::now();
        $post->save();
        if ($post) {
            return redirect()->route('post.index')->with('success', 'Data berhasil diubah');
        } else {
            return redirect()->route('post.index')->with('error', 'Data gagal diubah');
        }
    }
}
