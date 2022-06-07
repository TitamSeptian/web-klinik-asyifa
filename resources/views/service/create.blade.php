@extends('partials.master', ['title' => 'Services', 'activePage' => 'service'])
@section('content')
    <h1
        class="text-gray-800 text-3xl font-black capitalize after:content-[''] after:block after:w-10 after:h-1 after:bg-gray-800 after:rounded-full">
        Serives
    </h1>
    <a href="{{ route('service.index') }}" class="btn btn-sm mb-4 my-4"><i class='bx bx-arrow-back'></i> Kembali</a>
    <form action="{{ route('service.store') }}" method="post">
        @csrf
        <div class="form-control">
            <label class="label" for="title">Title</label>
            <input class="input" type="text" name="title" id="title" value="{{ old('title') }}" required>
            @error('title')
                <span class="invalid">{{ $message }}</span>
            @enderror
        </div>
        <div class="form-control">
            <label class="label" for="icon">Icon</label>
            <span class="text-sm italic">Cari icon di <a href="https://boxicons.com/" class="underline text-blue-500"
                    target="_blank">https://boxicons.com</a> jika tidak diisi akan di isi icon default</span>
            <input class="input" type="text" name="icon" id="icon" value="{{ old('icon') }}">
            @error('icon')
                <span class="invalid">{{ $message }}</span>
            @enderror
        </div>
        <div class="form-control">
            <label class="label" for="type">Type</label>
            <select name="type" id="type" class="input">
                <option selected disabled>-- PILIH --</option>
                <option value="lab" {{ old('type') == 'lab' ? 'selected' : '' }}>Service Labolatorium</option>
                <option value="service" {{ old('type') == 'service' ? 'selected' : '' }}>Service Klinik</option>
            </select>
            @error('type')
                <span class="invalid">{{ $message }}</span>
            @enderror
        </div>
        <div class="form-control sm:col-span-2 mt-2">
            <label for="description" class="label">Deskripsi</label>
            <div>
                <textarea name="description" id="description">{{ old('description') }}</textarea>
            </div>
            @error('description')
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
            .create(document.querySelector('#description'), {
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
