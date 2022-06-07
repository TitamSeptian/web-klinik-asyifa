@extends('partials.master', ['title' => 'Posts', 'activePage' => 'post'])
@section('content')
    <h1
        class="text-gray-800 text-3xl font-black capitalize after:content-[''] after:block after:w-10 after:h-1 after:bg-gray-800 after:rounded-full">
        Posts
    </h1>
    <a href="{{ route('post.index') }}" class="btn btn-sm mb-4 my-4"><i class='bx bx-arrow-back'></i> Kembali</a>
    <form action="{{ route('post.store') }}" method="post" enctype="multipart/form-data">
        @csrf
        <div class="form-control">
            <label class="label" for="title">Title</label>
            <input class="input" type="text" name="title" id="title" value="{{ old('title') }}" required>
            @error('title')
                <span class="invalid">{{ $message }}</span>
            @enderror
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 mt-4 place-items-start gap-4">
            <div class="form-control relative">
                <label class="btn" for="thumbnail">Upload Thumbnail</label>
                <input accept="image/png, image/jpeg" class="sr-only" type="file" name="thumbnail" id="thumbnail"
                    data-target="preview-thumbnail" onchange="showPreview(event);">
                @error('thumbnail')
                    <span class="invalid">{{ $message }}</span>
                @enderror
            </div>
            <div class="form-control relative">
                <label class="btn" for="cover">Upload Cover</label>
                <input accept="image/png, image/jpeg" class="sr-only" type="file" name="cover" id="cover"
                    data-target="preview-cover" onchange="showPreview(event);">
                @error('cover')
                    <span class="invalid">{{ $message }}</span>
                @enderror
            </div>
            <div class="aspect-[8/6] rounded-xl overflow-hidden w-full bg-gray-100">
                <img class="w-full h-full object-cover hidden" src="" id="preview-thumbnail">
            </div>
            <div class="aspect-[16/9] rounded-xl overflow-hidden w-full bg-gray-100">
                <img class="w-full h-full object-cover hidden" src="" id="preview-cover">
            </div>
        </div>
        <div class="form-control sm:col-span-2 mt-2">
            <label for="body" class="label">Body</label>
            <div>
                <textarea name="body" id="body">{{ old('body') }}</textarea>
            </div>
            @error('body')
                <span class="invalid">{{ $message }}</span>
            @enderror
        </div>
        <div class="flex flex-wrap gap-4 mt-4">
            @foreach ($tags as $tag)
                <label for="{{ $tag->id }}"
                    class="bg-gray-100 py-2 px-4 rounded-lg flex items-center gap-1 cursor-pointer hover:cursor-pointer">
                    <input type="checkbox" name="tags[]" id="{{ $tag->id }}" value="{{ $tag->id }}"
                        class="checkbox cursor-pointer">
                    <span class="text-sm">{{ $tag->name }}</span>
                </label>
            @endforeach
            @error('tags')
                <span class="invalid">{{ $message }}</span>
            @enderror
        </div>
        <button class="btn btn-sm mt-4" type="submit" name="submit">Submit</button>

    </form>
@endsection
@push('js')
    <script src="{{ asset('vendor/ckeditor/ckeditor.js') }}"></script>
    <script>
        ClassicEditor
            .create(document.querySelector('#body'), {
                licenseKey: '',
            })
            .then(editor => {
                window.editor = editor;
            })
            .catch(error => {
                console.error('Oops, something went wrong!');
                console.error(
                    'Please, report the following error on https://github.com/ckeditor/ckeditor5/issues with the build id and the error stack trace:'
                );
                console.warn('Build id: mdlvtsyyxna-8io70adi6rh1');
                console.error(error);
            });
    </script>
@endpush
