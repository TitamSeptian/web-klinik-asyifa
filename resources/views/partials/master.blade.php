<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="{{ asset('css/app.css') }}">
    <link href='https://unpkg.com/boxicons@2.1.1/css/boxicons.min.css' rel='stylesheet'>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
        rel="stylesheet">
    <meta name="csrf-token" content="{{ csrf_token() }}">

    @stack('css')
    <title>{{ $title }}</title>
</head>

<body>
    <div class="relative min-h-screen overflow-x-hidden">
        <section class="relative flex max-h-screen min-h-screen overflow-hidden">
            {{-- sidebar --}}
            <aside
                class="lg:w-[400px] w-[300px] max-w-full px-8 overflow-x-hidden overflow-y-auto py-4 mt-14 lg:static absolute inset-y-0 bg-red z-10 bg-white transition-all duration-300">
                <div class="space-y-6">
                    <div class="space-y-2">
                        <span class="px-6 text-sm font-bold tracking-widest uppercase text-gray-600">
                            Dashboard
                        </span>
                        <div class="grid gap-2">
                            <a href="#"
                                class="flex items-center gap-2 px-6 py-4 transition-all duration-300 hover:bg-gray-100 rounded-xl group {{ $activePage == 'dashboard' ? 'bg-gray-100 text-gray-600' : '' }}">
                                <i
                                    class="text-xl text-gray-400 transition-all duration-300 bx bxs-dashboard group-hover:text-gray-600"></i>
                                <span
                                    class="font-semibold text-gray-400 transition-all duration-300 group-hover:text-gray-600">
                                    Beranda
                                </span>
                            </a>
                        </div>
                        <div class="grid gap-2 ">
                            <a href="/views/room/index.php"
                                class="flex items-center gap-2 px-6 py-4 transition-all duration-300 hover:bg-gray-100 rounded-xl group"
                                id="rooms">
                                <i
                                    class="text-xl text-gray-400 transition-all duration-300 bx bx-repost group-hover:text-gray-600"></i>
                                <span
                                    class="font-semibold text-gray-400 transition-all duration-300 group-hover:text-gray-600">
                                    Post
                                </span>
                            </a>
                        </div>
                        <div class="grid gap-2 ">
                            <a href="/views/room/index.php"
                                class="flex items-center gap-2 px-6 py-4 transition-all duration-300 hover:bg-gray-100 rounded-xl group"
                                id="rooms">
                                <i
                                    class="text-xl text-gray-400 transition-all duration-300 bx bx-building group-hover:text-gray-600"></i>
                                <span
                                    class="font-semibold text-gray-400 transition-all duration-300 group-hover:text-gray-600">
                                    Services
                                </span>
                            </a>
                        </div>
                        <div class="grid gap-2">
                            <a href="{{ route('tags.index') }}"
                                class="flex items-center gap-2 px-6 py-4 transition-all duration-300 hover:bg-gray-100 rounded-xl group {{ $activePage == 'tag' ? 'bg-gray-100 text-gray-600' : '' }}">
                                <i
                                    class="text-xl text-gray-400 transition-all duration-300 bx bx-label group-hover:text-gray-600"></i>
                                <span
                                    class="font-semibold text-gray-400 transition-all duration-300 group-hover:text-gray-600">
                                    Tags
                                </span>
                            </a>
                        </div>
                    </div>
                    <div class="space-y-2">
                        <span class="px-6 text-sm font-bold tracking-widest uppercase text-gray-600">
                            Admin
                        </span>
                        <div class="grid gap-2">
                            <a href="/views/user/index.php"
                                class="flex items-center gap-2 px-6 py-4 transition-all duration-300 hover:bg-gray-100 rounded-xl group">
                                <i
                                    class="text-xl text-gray-400 transition-all duration-300 bx bx-group group-hover:text-gray-600"></i>
                                <span
                                    class="font-semibold text-gray-400 transition-all duration-300 group-hover:text-gray-600">
                                    User
                                </span>
                            </a>
                        </div>
                    </div>
                    <div class="space-y-2">
                        <span class="px-6 text-sm font-bold tracking-widest uppercase text-gray-600">
                            Account
                        </span>
                        <div class="grid gap-2">
                            <a href="/views/user/index.php"
                                class="flex items-center gap-2 px-6 py-4 transition-all duration-300 hover:bg-gray-100 rounded-xl group">
                                <i
                                    class="text-xl text-gray-400 transition-all duration-300 bx bx-cog group-hover:text-gray-600"></i>
                                <span
                                    class="font-semibold text-gray-400 transition-all duration-300 group-hover:text-gray-600">
                                    Profile
                                </span>
                            </a>
                        </div>
                        <div class="grid gap-2">
                            <a href="/views/user/index.php"
                                class="flex items-center gap-2 px-6 py-4 transition-all duration-300 hover:bg-gray-100 rounded-xl group">
                                <i
                                    class="text-xl text-gray-400 transition-all duration-300 bx bx-log-out group-hover:text-gray-600"></i>
                                <span
                                    class="font-semibold text-gray-400 transition-all duration-300 group-hover:text-gray-600">
                                    Logout
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </aside>
            {{-- endsidebar --}}
            <main class="w-full px-8 pt-20 pb-4 overflow-y-auto">
                {{-- navbar --}}
                <nav class="fixed inset-x-0 top-0 z-50 py-2 border-b border-gray-100 backdrop-blur-sm bg-white/30">
                    <div class="flex items-center justify-between px-8 bg-transparent lg:px-14">
                        <div class="flex items-center gap-4">
                            <button class="lg:hidden btn btn-icon" id="btn-menu">
                                <i class="bx bx-menu-alt-left"></i>
                            </button>
                            <a href="/">
                                <img src="{{ asset('images/logo.svg') }}" class="object-cover w-auto h-8"
                                    alt="Logo" />
                            </a>
                        </div>
                        <div
                            class="flex items-center gap-2 font-semibold text-gray-400 uppercase bg-transparent text-md">
                            <span>User</span>
                        </div>
                    </div>
                </nav>
                {{-- endnavbar --}}
                {{-- content --}}
                <div class="">
                    @include('partials.alert')
                    @yield('content')
                </div>
                {{-- endcontent --}}
            </main>
        </section>
    </div>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="{{ asset('js/script.js') }}"></script>
    @stack('js')
</body>

</html>
