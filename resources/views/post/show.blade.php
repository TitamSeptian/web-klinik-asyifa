@extends('partials.master', ['title' => 'Posts', 'activePage' => 'post'])
@section('content')
    <h1
        class="text-gray-800 text-3xl font-black capitalize after:content-[''] after:block after:w-10 after:h-1 after:bg-gray-800 after:rounded-full">
        Posts {{ $post->title }}
    </h1>
    <a href="{{ route('post.index') }}" class="btn btn-sm mb-4 my-4"><i class='bx bx-arrow-back'></i> Kembali</a>
    <div class="aspect-[16/9] rounded-xl overflow-hidden w-full bg-gray-100">
        <img class="w-full h-full object-cover" src="{{ \Storage::url($post->cover) }}" id="preview-cover">
    </div>
    <article class="prose">
        {!! $post->body !!}
    </article>
    <div class="flex">
        @foreach ($post->tags as $key => $tag)
            <span class="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                {{ $post->tags[$key]->tag->name }}
            </span>
        @endforeach
    </div>
@endsection
