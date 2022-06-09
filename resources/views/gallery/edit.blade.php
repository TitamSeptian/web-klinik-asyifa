@extends('partials.master', ['title' => 'Gallery', 'activePage' => 'gallery'])
@section('content')
    <h1
        class="text-gray-800 text-3xl font-black capitalize after:content-[''] after:block after:w-10 after:h-1 after:bg-gray-800 after:rounded-full">
        Gallery
    </h1>
    <a href="{{ route('gallery.index') }}" class="btn btn-sm mb-4 my-4"><i class='bx bx-arrow-back'></i> Kembali</a>
    <form action="{{ route('gallery.update', $gallery->id) }}" method="post" enctype="multipart/form-data">
        @csrf
        @method('PUT')
        <div class="grid grid-cols-1 sm:grid-cols-2 mt-2">
            <div class="flex flex-col space-y-4 px-4 h-full">
                <div class="form-control">
                    <label class="label" for="title">Title</label>
                    <input class="input" type="text" name="title" id="title"
                        value="{{ old('title') ?? $gallery->title }}">
                    @error('title')
                        <span class="invalid">{{ $message }}</span>
                    @enderror
                </div>
                <div class="form-control relative">
                    <label class="btn" for="image">Upload Foto</label>
                    <input accept="image/png, image/jpeg" class="sr-only" type="file" name="image" id="image"
                        data-target="preview-image" onchange="showPreview(event);">
                    @error('image')
                        <span class="invalid">{{ $message }}</span>
                    @enderror
                </div>
                <button class="btn btn-sm mt-4 justify-self-end self-end" type="submit" name="submit">Submit</button>
            </div>
            <div class="aspect-[3/4] rounded-xl overflow-hidden w-full bg-gray-100">
                <img class="w-full h-full object-cover" src="{{ \Storage::url($gallery->path_image) }}"
                    id="preview-image">
            </div>
        </div>


    </form>
@endsection
