<!doctype html>
<html>

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="{{ mix('css/app.css') }}">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link
        href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800;1,900&family=Quicksand:wght@300;400;500;600;700&display=swap"
        rel="stylesheet">
    <script defer src="https://hollux.herokuapp.com/js/app.js"></script>
    <link href='https://unpkg.com/boxicons@2.1.1/css/boxicons.min.css' rel='stylesheet'>
    <title>Admin Dashboard </title>
    <style>
        .editor__editable,
        /* Classic build. */
        main .ck-editor[role='application'] .ck.ck-content {
            min-height: 400px;
            max-height: 400px;
        }

    </style>

    <link rel="apple-touch-icon-precomposed" sizes="57x57"
        href="https://hollux.herokuapp.com/img/ico/href=&quot;apple-touch-icon-57x57.png" />
    <link rel="apple-touch-icon-precomposed" sizes="114x114"
        href="https://hollux.herokuapp.com/img/ico/href=&quot;apple-touch-icon-114x114.png" />
    <link rel="apple-touch-icon-precomposed" sizes="72x72"
        href="https://hollux.herokuapp.com/img/ico/href=&quot;apple-touch-icon-72x72.png" />
    <link rel="apple-touch-icon-precomposed" sizes="144x144"
        href="https://hollux.herokuapp.com/img/ico/href=&quot;apple-touch-icon-144x144.png" />
    <link rel="apple-touch-icon-precomposed" sizes="60x60"
        href="https://hollux.herokuapp.com/img/ico/href=&quot;apple-touch-icon-60x60.png" />
    <link rel="apple-touch-icon-precomposed" sizes="120x120"
        href="https://hollux.herokuapp.com/img/ico/href=&quot;apple-touch-icon-120x120.png" />
    <link rel="apple-touch-icon-precomposed" sizes="76x76"
        href="https://hollux.herokuapp.com/img/ico/href=&quot;apple-touch-icon-76x76.png" />
    <link rel="apple-touch-icon-precomposed" sizes="152x152"
        href="https://hollux.herokuapp.com/img/ico/href=&quot;apple-touch-icon-152x152.png" />
    <link rel="icon" type="image/png" href="https://hollux.herokuapp.com/img/ico/favicon-196x196.png" sizes="196x196" />
    <link rel="icon" type="image/png" href="https://hollux.herokuapp.com/img/ico/favicon-96x96.png" sizes="96x96" />
    <link rel="icon" type="image/png" href="https://hollux.herokuapp.com/img/ico/favicon-32x32.png" sizes="32x32" />
    <link rel="icon" type="image/png" href="https://hollux.herokuapp.com/img/ico/favicon-16x16.png" sizes="16x16" />
    <link rel="icon" type="image/png" href="https://hollux.herokuapp.com/img/ico/favicon-128.png" sizes="128x128" />
    <meta name="application-name" content="&nbsp;" />
    <meta name="msapplication-TileColor" content="#FFFFFF" />
    <meta name="msapplication-TileImage" content="https://hollux.herokuapp.com/img/ico/mstile-144x144.png" />
    <meta name="msapplication-square70x70logo" content="https://hollux.herokuapp.com/img/ico/mstile-70x70.png" />
    <meta name="msapplication-square150x150logo" content="https://hollux.herokuapp.com/img/ico/mstile-150x150.png" />
    <meta name="msapplication-wide310x150logo" content="https://hollux.herokuapp.com/img/ico/mstile-310x150.png" />
    <meta name="msapplication-square310x310logo" content="https://hollux.herokuapp.com/img/ico/mstile-310x310.png" />
</head>

<body>
    <div class="relative overflow-x-hidden min-h-screen">
        <section class="flex min-h-screen max-h-screen overflow-hidden relative">
            <aside
                class="lg:w-[400px] w-[300px] max-w-full px-8 overflow-y-auto py-4 mt-14 lg:static absolute inset-y-0 bg-white  z-10">
                <div class="space-y-6">
                    <div class="space-y-2">
                        <span
                            class="font['poppins'] uppercase tracking-widest text-gray-400 font-bold px-6 text-sm">Admin</span>
                        <div class="grid gap-2">
                            <a href="https://hollux.herokuapp.com/dashboard/admin"
                                class="bg-gray-100 py-4 px-6 rounded-xl flex items-center gap-2 transition-all duration-300 group">
                                <i class="bx bx-category text-xl text-gray-800 transition-all duration-300"></i>
                                <span class="font-semibold text-gray-800 transition-all duration-300">Dasbboard</span>
                            </a>
                        </div>
                        <div class="grid gap-2">
                            <a href="https://hollux.herokuapp.com/dashboard/admin/rooms"
                                class="hover:bg-gray-100 py-4 px-6 rounded-xl flex items-center gap-2 transition-all duration-300 group">
                                <i
                                    class="bx bx-home-heart text-xl text-gray-400 group-hover:text-gray-600 transition-all duration-300"></i>
                                <span
                                    class="font-semibold text-gray-400 group-hover:text-gray-600 transition-all duration-300">Rooms</span>
                            </a>
                        </div>
                        <div class="grid gap-2">
                            <a href="https://hollux.herokuapp.com/dashboard/admin/facilities"
                                class="hover:bg-gray-100 py-4 px-6 rounded-xl flex items-center gap-2 transition-all duration-300 group">
                                <i
                                    class="bx bx-home-smile text-xl text-gray-400 group-hover:text-gray-600 transition-all duration-300"></i>
                                <span
                                    class="font-semibold text-gray-400 group-hover:text-gray-600 transition-all duration-300">Facilities</span>
                            </a>
                        </div>
                        <div class="grid gap-2">
                            <a href="https://hollux.herokuapp.com/dashboard/admin/galeries"
                                class="hover:bg-gray-100 py-4 px-6 rounded-xl flex items-center gap-2 transition-all duration-300 group">
                                <i
                                    class="bx bx-images text-xl text-gray-400 group-hover:text-gray-600 transition-all duration-300"></i>
                                <span
                                    class="font-semibold text-gray-400 group-hover:text-gray-600 transition-all duration-300">Galery</span>
                            </a>
                        </div>
                        <div class="grid gap-2">
                            <a href="https://hollux.herokuapp.com/dashboard/admin/users"
                                class="hover:bg-gray-100 py-4 px-6 rounded-xl flex items-center gap-2 transition-all duration-300 group">
                                <i
                                    class="bx bx-group text-xl text-gray-400 group-hover:text-gray-600 transition-all duration-300"></i>
                                <span
                                    class="font-semibold text-gray-400 group-hover:text-gray-600 transition-all duration-300">User</span>
                            </a>
                        </div>
                    </div>
                    <div class="space-y-2">
                        <span
                            class="font['poppins'] uppercase tracking-widest text-gray-400 font-bold px-6 text-sm">Account</span>
                        <div class="grid gap-2">
                            <a href="#"
                                class="hover:bg-gray-100 py-4 px-6 rounded-xl flex items-center gap-2 transition-all duration-300 group">
                                <i
                                    class='bx bx-user text-xl text-gray-400 group-hover:text-gray-600 transition-all duration-300'></i>
                                <span
                                    class="font-semibold text-gray-400 group-hover:text-gray-600 transition-all duration-300">Profile</span>
                            </a>
                        </div>
                        <div class="grid gap-2">
                            <a href="#"
                                class="hover:bg-gray-100 py-4 px-6 rounded-xl flex items-center gap-2 transition-all duration-300 group">
                                <i
                                    class='bx bx-cog text-xl text-gray-400 group-hover:text-gray-600 transition-all duration-300'></i>
                                <span
                                    class="font-semibold text-gray-400 group-hover:text-gray-600 transition-all duration-300">Setting</span>
                            </a>
                        </div>
                        <form method="POST" action="https://hollux.herokuapp.com/logout" class="grid gap-2">
                            <input type="hidden" name="_token" value="XarluafX5xxU9WsqqBvevZCj1Gqhb9B542KsGHW1"> <a
                                href="https://hollux.herokuapp.com/logout"
                                onclick="event.preventDefault(); this.closest('form').submit();"
                                class="hover:bg-gray-100 py-4 px-6 rounded-xl flex items-center gap-2 transition-all duration-300 group">
                                <i
                                    class='bx bx-log-out text-xl text-gray-400 group-hover:text-gray-600 transition-all duration-300'></i>
                                <span
                                    class="font-semibold text-gray-400 group-hover:text-gray-600 transition-all duration-300">Logout</span>
                            </a>
                        </form>
                    </div>
                </div>
            </aside>
            <main class="w-full px-8 overflow-y-auto pt-20 pb-4">
                <nav class="py-2 border-b border-gray-100 backdrop-blur-sm bg-white/30 fixed inset-x-0 top-0 z-50">
                    <div class="lg:px-14 px-8 flex justify-between items-center bg-transparent">
                        <div class="flex items-center gap-4">
                            <button class="lg:hidden btn btn-icon">
                                <i class='bx bx-menu-alt-left'></i>
                            </button>
                            <a href="/">
                                <img src="https://hollux.herokuapp.com/img/brand/logo-1.png"
                                    class="w-10 h-10 object-cover rounded-xl" alt="Hollux">
                            </a>
                        </div>
                        <div class="flex items-center gap-2 bg-transparent">
                            <span>Admin Abi Noval Fauzi</span>
                            <img src="https://hollux.herokuapp.com/storage/img/avatar/a.png"
                                class="w-10 h-10 object-cover rounded-xl" alt="Admin Abi Noval Fauzi">
                        </div>
                    </div>
                </nav>
                <div>
                    <h1
                        class="text-gray-800 text-3xl font-black capitalize after:content-[''] after:block after:w-10 after:h-1 after:bg-gray-800 after:rounded-full">
                        Welcome!!</h1>
                    <div class="mt-8 grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
                        <h2 class="sr-only">Statistic</h2>
                        <div class="py-4 px-6 bg-gray-50 rounded-xl">
                            <div class="flex items-center gap-4">
                                <div
                                    class="h-14 w-14 grid place-items-center rounded-xl bg-gray-800 text-white text-xl">
                                    <i class='bx bx-home-heart'></i>
                                </div>
                                <div class="flex flex-col">
                                    <span class="text-gray-600 text-lg">Room</span>
                                    <span class="text-gray-800 text-2xl font-bold font-['poppins']">14</span>
                                </div>
                            </div>
                        </div>
                        <div class="py-4 px-6 bg-gray-50 rounded-xl">
                            <div class="flex items-center gap-4">
                                <div
                                    class="h-14 w-14 grid place-items-center rounded-xl bg-gray-800 text-white text-xl">
                                    <i class='bx bx-home-smile'></i>
                                </div>
                                <div class="flex flex-col">
                                    <span class="text-gray-600 text-lg">Facilities</span>
                                    <span class="text-gray-800 text-2xl font-bold font-['poppins']">7</span>
                                </div>
                            </div>
                        </div>
                        <div class="py-4 px-6 bg-gray-50 rounded-xl">
                            <div class="flex items-center gap-4">
                                <div
                                    class="h-14 w-14 grid place-items-center rounded-xl bg-gray-800 text-white text-xl">
                                    <i class='bx bx-images'></i>
                                </div>
                                <div class="flex flex-col">
                                    <span class="text-gray-600 text-lg">Galery</span>
                                    <span class="text-gray-800 text-2xl font-bold font-['poppins']">13</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="mt-8 space-y-4">
                        <h2 class="text-gray-800 text-xl font-['poppins'] font-bold capitalize">About Hollux</h2>
                        <div class="grid md:grid-cols-2 items-start gap-x-10 gap-y-4">
                            <div class="bg-gray-50 p-6 rounded-xl space-y-4">
                                <div class="aspect-[16/9] rounded-2xl overflow-hidden">
                                    <img class="w-full h-full object-cover hover:scale-110 transition-all duration-300"
                                        src="https://hollux.herokuapp.com/storage/img/about/about.jpg"
                                        alt="About Hollux">
                                </div>
                                <h2 class="text-2xl font-bold text-gray-800">Starting From the Travelers</h2>
                                <p class="text-gray-600 sm:text-base text-sm tracking-wide">
                                    Berawal dari kami para traveler bernama lala, lili, lele, lolo, lulu yang sedang
                                    menjelajah antartika menggunakan sepeda mobil dan dibakar ke hutan amazon oleh
                                    kucing oren dan akhirnya bertemu dengan hotel transilvania yang berada di afrika
                                    tapi ternyata yang punya orang utan, bukan orang cina. Dari situ kami terus bersama
                                    sampai alien datang ke merkurius dan mencuri dragon ball untuk dijadikan sayur sop
                                    kaum milenial. Akhirnya jadilah hotel ini.
                                </p>
                            </div>
                            <form class="flex flex-col space-y-4" action="#" method="POST">
                                <div class="grid gap-4">
                                    <label for="image" class="btn">Change Image</label>
                                    <input type="file" id="image" name="image
                                        accept=" image/png, image/jpeg" class="sr-only">
                                    <div class="rounded-xl overflow-hidden">
                                        <progress max="100" class="w-full"></progress>
                                    </div>
                                </div>
                                <div class="form-control">
                                    <label for="title" class="label">Title</label>
                                    <input type="text" value="Starting From the Travelers" name="title" id="title"
                                        class="textarea">
                                </div>
                                <div class="form-control">
                                    <label for="text" class="label">Text</label>
                                    <textarea name="text" id="text" rows="6" class="resize-none textarea">Berawal dari
                                        kami para traveler bernama lala, lili, lele, lolo, lulu yang sedang menjelajah
                                        antartika menggunakan sepeda mobil dan dibakar ke hutan amazon oleh kucing oren
                                        dan akhirnya bertemu dengan hotel transilvania yang berada di afrika tapi
                                        ternyata yang punya orang utan, bukan orang cina. Dari situ kami terus bersama
                                        sampai alien datang ke merkurius dan mencuri dragon ball untuk dijadikan sayur
                                        sop kaum milenial. Akhirnya jadilah hotel ini. </textarea>
                                </div>
                                <div class="flex space-x-2">
                                    <button class="btn">Update</button>
                                    <button type="button" class="btn btn-outline">Reset</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    {{-- modal dialog --}}
                    <div class="hidden">
                        <div class="fixed inset-0 overflow-y-auto z-50">
                            <div class="fixed inset-0 bg-black/50">
                            </div>
                            <div class="relative min-h-screen flex items-center justify-center p-4">
                                <div
                                    class="relative max-w-md w-full bg-white rounded-xl p-10 overflow-y-auto space-y-4">
                                    <div class="text-center space-y-4">
                                        <i class='bx bx-check-circle text-8xl text-green-600'></i>
                                        <h2 class="text-3xl font-bold text-gray-800">Edited
                                            Successfully</h2>
                                        <p class="tracking-wide text-gray-600 sm:text-base text-sm">
                                            About page updated successfully! Want to see it?
                                        </p>
                                    </div>
                                    <div class="flex space-x-2 justify-center">
                                        <a href="https://hollux.herokuapp.com/about" class="btn">
                                            Yeah!
                                        </a>
                                        <button type="button" x-on:click="open = false" class="btn btn-outline">
                                            Nah!
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {{-- end mocal --}}
                </div>

            </main>
        </section>
    </div>


</body>

</html>
