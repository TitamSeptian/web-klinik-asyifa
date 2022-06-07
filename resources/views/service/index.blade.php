@extends('partials.master', ['title' => 'Service', 'activePage' => 'service'])

@push('css')
    <link rel="stylesheet" type="text/css" href="{{ asset('vendor/dataTables/jquery.dataTables.css') }}">
    <link href="{{ asset('vendor/dataTables/responsive.dataTables.min.css') }}" rel="stylesheet">
    <style>
        /*Overrides for Tailwind CSS */

        /*Form fields*/
        .dataTables_wrapper select,
        .dataTables_wrapper .dataTables_filter input {
            color: #4a5568;
            /*text-gray-700*/
            padding-left: 1rem;
            /*pl-4*/
            padding-right: 1rem;
            /*pl-4*/
            padding-top: .5rem;
            /*pl-2*/
            padding-bottom: .5rem;
            /*pl-2*/
            line-height: 1.25;
            /*leading-tight*/
            border-width: 2px;
            /*border-2*/
            border-radius: .25rem;
            border-color: #1f2937;
            /*border-gray-200*/
            background-color: #fff;
            /*bg-gray-200*/
        }

        /*Row Hover*/
        table.dataTable.hover tbody tr:hover,
        table.dataTable.display tbody tr:hover {
            background-color: #f3f4f6;
            /*bg-indigo-100*/
        }

        /*Pagination Buttons*/
        .dataTables_wrapper .dataTables_paginate .paginate_button {
            font-weight: 700;
            /*font-bold*/
            border-radius: .25rem;
            /*rounded*/
            border: 1px solid transparent;
            /*border border-transparent*/
        }

        /*Pagination Buttons - Current selected */
        .dataTables_wrapper .dataTables_paginate .paginate_button.current {
            color: #fff !important;
            /*text-white*/
            box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .1), 0 1px 2px 0 rgba(0, 0, 0, .06);
            /*shadow*/
            font-weight: 700;
            /*font-bold*/
            border-radius: .25rem;
            /*rounded*/
            background: #1f2937 !important;
            /*bg-indigo-500*/
            border: 1px solid transparent;
            /*border border-transparent*/
        }

        /*Pagination Buttons - Hover */
        .dataTables_wrapper .dataTables_paginate .paginate_button:hover {
            color: #fff !important;
            /*text-white*/
            font-weight: 700;
            /*font-bold*/
            border-radius: .25rem;
            /*rounded*/
            background: #1f2937 !important;
            /*bg-indigo-500*/
            border: 1px solid transparent;
            /*border border-transparent*/
        }

        /*Add padding to bottom border */
        table.dataTable.no-footer {
            border-bottom: 1px solid #e2e8f0;
            /*border-b-1 border-gray-300*/
            margin-top: 0.75em;
            margin-bottom: 0.75em;
        }

        /*Change colour of responsive icon*/
        table.dataTable.dtr-inline.collapsed>tbody>tr>td:first-child:before,
        table.dataTable.dtr-inline.collapsed>tbody>tr>th:first-child:before {
            background-color: #1f2937 !important;
            /*bg-indigo-500*/
        }
    </style>
@endpush
@section('content')
    <h1
        class="text-gray-800 text-3xl font-black capitalize after:content-[''] after:block after:w-10 after:h-1 after:bg-gray-800 after:rounded-full">
        Services
    </h1>
    <a href="{{ route('service.create') }}" class="btn btn-sm mb-4 my-4"><i class='bx bx-plus'></i> Tambah</a>

    {{-- <div class="overflow-x-auto table-wrapper"> --}}
    {{-- <div class="inline-block p-3 min-w-full"> --}}
    <div class="py-2 lg:mt-0 rounded bg-white overflow-x-auto table-wrapper">
        <table class="min-w-full" id="dataTable">
            <thead class="thead">
                <tr>
                    <th scope="col" class="th">Icon</th>
                    <th scope="col" class="th">Title</th>
                    <th scope="col" class="th">Deskripsi</th>
                    <th scope="col" class="th">Tipe</th>
                    <th scope="col" class="th"></th>
                </tr>
            </thead>
            <tbody class="divide-y-2">
                @foreach ($services as $service)
                    <tr class="bg-white border-b ">
                        <td class="td">{!! $service->icon !!}</td>
                        <td class="td">
                            {{ $service->title }}
                        </td>
                        <td class="td font-medium text-gray-900">
                            <article class="prose">{!! $service->description !!}</article>
                        </td>
                        <td class="td font-medium text-gray-900">{{ $service->type }}</td>
                        <td class="td flex space-x-2 justify-end">
                            <a class="btn btn-sm" href="{{ route('service.edit', $service->id) }}">Edit</a>
                            <form action="{{ route('service.destroy', $service->id) }}" method="post">
                                @csrf
                                @method('DELETE')
                                <button class="btn btn-sm btn-outline" type="submit"
                                    onClick="javascript: return confirm('Tag akan dihapus ?');">Delete</button>
                            </form>
                        </td>
                    </tr>
                @endforeach
            </tbody>
        </table>
    </div>
    {{-- </div> --}}
    {{-- </div> --}}
@endsection
@push('js')
    <script type="text/javascript" charset="utf8" src="{{ asset('vendor/dataTables/jquery.dataTables.js') }}"></script>
    <script>
        $(document).ready(function() {
            $('#dataTable').DataTable({
                responsive: true,
            });

        });
    </script>
@endpush
