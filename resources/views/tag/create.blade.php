@extends('partials.master', ['title' => 'Tags', 'activePage' => 'tag'])
@section('content')
    <h1
        class="text-gray-800 text-3xl font-black capitalize after:content-[''] after:block after:w-10 after:h-1 after:bg-gray-800 after:rounded-full">
        Tags
    </h1>
    <a href="{{ route('tags.index') }}" class="btn btn-sm mb-4 my-4"><i class='bx bx-arrow-back'></i> Kembali</a>
    <form action="{{ route('tags.store') }}" method="post">
        @csrf
        <div class="form-control">
            <label class="label" for="name">Nama Tag</label>
            <input class="input" type="text" name="name" id="name" required>
            @error('name')
                <span class="invalid">{{ $message }}</span>
            @enderror
        </div>
        <button class="btn btn-sm mt-4" type="submit" name="submit">Submit</button>

    </form>
@endsection
