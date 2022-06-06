@extends('partials.master', ['title' => 'Doctor', 'activePage' => 'doctor'])
@section('content')
    <h1
        class="text-gray-800 text-3xl font-black capitalize after:content-[''] after:block after:w-10 after:h-1 after:bg-gray-800 after:rounded-full">
        Doctor
    </h1>
    <a href="{{ route('doctor.index') }}" class="btn btn-sm mb-4 my-4"><i class='bx bx-arrow-back'></i> Kembali</a>
    <form action="{{ route('doctor.update', $doctor->id) }}" method="post" enctype="multipart/form-data">
        @csrf
        @method('PUT')
        <div class="grid grid-cols-1 sm:grid-cols-2 mt-2">
            <div class="flex flex-col space-y-4 px-4 h-full">
                <div class="form-control">
                    <label class="label" for="name">Nama</label>
                    <input class="input" type="text" name="name" id="name"
                        value="{{ old('name') ?? $doctor->name }}">
                    @error('name')
                        <span class="invalid">{{ $message }}</span>
                    @enderror
                </div>
                <div class="form-control">
                    <label class="label" for="specialist">Spesialist</label>
                    <input class="input" type="text" name="specialist" id="specialist" required
                        value="{{ old('specialist') ?? $doctor->specialist }}">
                    @error('specialist')
                        <span class="invalid">{{ $message }}</span>
                    @enderror
                </div>
                <div class="form-control relative">
                    <label class="btn" for="image">Upload Thumbnail</label>
                    <input accept="image/png, image/jpeg" class="sr-only" type="file" name="image" id="image"
                        onchange="showPreview(event);">
                    @error('image')
                        <span class="invalid">{{ $message }}</span>
                    @enderror
                </div>
                <button class="btn btn-sm mt-4 justify-self-end self-end" type="submit" name="submit">Submit</button>
            </div>
            <div class="aspect-[3/4] rounded-xl overflow-hidden w-full bg-gray-100">
                <img class="w-full h-full object-cover" src="{{ \Storage::url($doctor->path_image) }}" id="preview-image">
            </div>
        </div>


    </form>
@endsection
