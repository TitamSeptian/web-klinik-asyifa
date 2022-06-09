@extends('partials.master', ['title' => 'User', 'activePage' => 'user'])
@section('content')
    <h1
        class="text-gray-800 text-3xl font-black capitalize after:content-[''] after:block after:w-10 after:h-1 after:bg-gray-800 after:rounded-full">
        Users
    </h1>
    <a href="{{ route('user.index') }}" class="btn btn-sm mb-4 my-4"><i class='bx bx-arrow-back'></i> Kembali</a>
    <form action="{{ route('user.update', $user->id) }}" method="post">
        @csrf
        <div class="form-control">
            <label class="label" for="name">Nama</label>
            <input class="input" type="text" name="name" id="name" value="{{ old('name') ?? $user->name }}"
                required>
            @error('name')
                <span class="invalid">{{ $message }}</span>
            @enderror
        </div>
        <div class="form-control">
            <label class="label" for="email">Email</label>
            <input class="input" type="email" name="email" id="email" value="{{ old('email') ?? $user->email }}"
                required>
            @error('email')
                <span class="invalid">{{ $message }}</span>
            @enderror
        </div>
        <span class="text-md my-3">Abaikan jika tidak ada perubahan password</span>
        <div class="form-control">
            <label class="label" for="password">Password</label>
            <input class="input" type="password" name="password" id="password">
            @error('password')
                <span class="invalid">{{ $message }}</span>
            @enderror
        </div>
        <div class="form-control">
            <label class="label" for="password_confirmation">Konfirmasi Password</label>
            <input class="input" type="password" name="password_confirmation" id="password_confirmation">
            @error('password_confirmation')
                <span class="invalid">{{ $message }}</span>
            @enderror
        </div>
        <button class="btn btn-sm mt-4" type="submit" name="submit">Submit</button>

    </form>
@endsection
