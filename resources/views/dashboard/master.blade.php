<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <title>Klinik, {{ $title }}</title>
    <!-- Favicon icon -->
    <link rel="icon" type="image/png" sizes="16x16" href="./images/favicon.png">
    <link rel="stylesheet" href="./vendor/chartist/css/chartist.min.css">
    <link href="./vendor/bootstrap-select/dist/css/bootstrap-select.min.css" rel="stylesheet">
    <link href="./css/style.css" rel="stylesheet">
    <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&family=Roboto:wght@100;300;400;500;700;900&display=swap"
        rel="stylesheet">
    @stack('css')
</head>

<body>
    {{-- <!--*******************
        Preloader start
    ********************--> --}}
    <div id="preloader">
        <div class="sk-three-bounce">
            <div class="sk-child sk-bounce1"></div>
            <div class="sk-child sk-bounce2"></div>
            <div class="sk-child sk-bounce3"></div>
        </div>
    </div>
    {{-- <!--*******************
        Preloader end
    ********************--> --}}

    {{-- <!--**********************************
        Main wrapper start
    ***********************************--> --}}
    <div id="main-wrapper">
        {{-- <!--**********************************
            Header start
        ***********************************--> --}}
        @include('dashboard.partials.header')
        {{-- <!--**********************************
            Header end ti-comment-alt
        ***********************************--> --}}
        {{-- <!--**********************************
            Sidebar start
        ***********************************--> --}}
        @include('dashboard.partials.sidebar')
        {{-- <!--**********************************
            Sidebar end
        ***********************************--> --}}

        {{-- <!--**********************************
            Content body start
        ***********************************--> --}}
        <div class="content-body">
            <!-- row -->
            <div class="container-fluid">
                @yield('content')
            </div>
        </div>
        {{-- <!--**********************************
            Content body end
        ***********************************--> --}}

        {{-- <!--**********************************
            Footer start
        ***********************************--> --}}
        @include('dashboard.partials.footer')
        {{-- <!--**********************************
            Footer end
        ***********************************--> --}}


    </div>
    {{-- <!--**********************************
        Main wrapper end
    ***********************************--> --}}

    {{-- <!--**********************************
        Scripts
    ***********************************--> --}}
    {{-- <!-- Required vendors --> --}}
    <script src="./vendor/global/global.min.js"></script>
    <script src="./vendor/bootstrap-select/dist/js/bootstrap-select.min.js"></script>
    <script src="./vendor/chart.js/Chart.bundle.min.js"></script>
    <script src="./js/custom.min.js"></script>
    <script src="./js/deznav-init.js"></script>
    @stack('js')
</body>

</html>
