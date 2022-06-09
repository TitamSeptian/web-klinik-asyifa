@extends('partials.master', ['title' => 'Dashboard', 'activePage' => 'dashboard'])
@section('content')
    <h1
        class="text-gray-800 text-3xl font-black capitalize after:content-[''] after:block after:w-10 after:h-1 after:bg-gray-800 after:rounded-full">
        Welcome!!
    </h1>
    <div class="mt-8 grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
        <h2 class="sr-only">Statistic</h2>
        <div class="py-4 px-6 bg-gray-50 rounded-xl">
            <div class="flex items-center gap-4">
                <div class="h-14 w-14 grid place-items-center rounded-xl bg-gray-800 text-white text-xl">
                    <i class="bx bx-repost"></i>
                </div>
                <div class="flex flex-col">
                    <span class="text-gray-600 text-lg">
                        Postingan
                    </span>
                    <span class="text-gray-800 text-2xl font-bold">
                        {{ $posts->count() }}
                    </span>
                </div>
            </div>
        </div>
        <div class="py-4 px-6 bg-gray-50 rounded-xl">
            <div class="flex items-center gap-4">
                <div class="h-14 w-14 grid place-items-center rounded-xl bg-gray-800 text-white text-xl">
                    <i class="bx bx-plus-medical"></i>
                </div>
                <div class="flex flex-col">
                    <span class="text-gray-600 text-lg">
                        Dokter
                    </span>
                    <span class="text-gray-800 text-2xl font-bold">
                        {{ $doctors->count() }}
                    </span>
                </div>
            </div>
        </div>
        <div class="py-4 px-6 bg-gray-50 rounded-xl">
            <div class="flex items-center gap-4">
                <div class="h-14 w-14 grid place-items-center rounded-xl bg-gray-800 text-white text-xl">
                    <i class="bx bx-building"></i>
                </div>
                <div class="flex flex-col">
                    <span class="text-gray-600 text-lg">
                        Pelayanan
                    </span>
                    <span class="text-gray-800 text-2xl font-bold">
                        {{ $services->count() }}
                    </span>
                </div>
            </div>
        </div>
    </div>
@endsection
