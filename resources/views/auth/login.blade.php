<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="{{ asset('css/app.css') }}">
    <title>Login</title>
</head>

<body>
    <div class="relative min-h-screen overflow-x-hidden">
        <section class="relative flex justify-center items-center max-h-screen min-h-screen overflow-hidden">
            <div class="bg-white shadow-lg p-10 rounded-lg">
                <form action="{{ route('login') }}" method="post">
                    @csrf
                    @method('post')
                    <div class="flex flex-col gap-y-5">
                        <img src="{{ asset('images/logo.svg') }}" alt="Logo" class="w-auto h-10">
                        <input type="email"
                            class="rounded-lg border-gray-300 border-2 md:w-[360px] w-full block focus:border-thePrimary transition-all duration-100 ease-in"
                            placeholder="Enter Your Email" name="email" />
                        @error('email')
                            <span class="text-red-500 text-sm">{{ $message }}</span>
                        @enderror
                        <input type="password"
                            class="rounded-lg border-gray-300 border-2 md:w-[360px] w-full block focus:border-thePrimary transition-all duration-100 ease-in mt-4"
                            placeholder="Enter Your Password" name="password" />
                        @error('password')
                            <span class="text-red-500 text-sm">{{ $message }}</span>
                        @enderror
                        <button class="block w-full text-center text-white bg-error-600 py-2 rounded-lg">Login</button>
                        <a href="{{ route('register') }}" class="text-blue-700 justify-self-end">Register</a>
                    </div>
                </form>
            </div>
        </section>
    </div>
</body>

</html>
