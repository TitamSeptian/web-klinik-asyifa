<?php

namespace App\Http\Controllers;

use App\Http\Requests\ServiceRequest;
use App\Models\Service;
use Illuminate\Support\Str;

class ServiceController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $services = Service::all();
        return view('service.index', compact('services'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('service.create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(ServiceRequest $request)
    {
        // dd($request->all());
        $data = [];
        $data['title'] = $request->title;
        $data['icon'] = $request->icon;
        $data['type'] = $request->type;
        $data['slug'] = Str::of($request->title)->slug('-');
        $data['description'] = $request->description;
        $service = Service::create($data);
        if ($service) {
            return redirect()->route('service.index')->with('success', 'Data berhasil ditambahkan');
        } else {
            return redirect()->route('service.index')->with('error', 'Data gagal ditambahkan');
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $service = Service::findOrFail($id);
        return view('service.edit', compact('service'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(ServiceRequest $request, $id)
    {
        $service = Service::findOrFail($id);
        $data = [];
        $data['title'] = $request->title;
        $data['icon'] = $request->icon;
        $data['type'] = $request->type;
        $data['slug'] = Str::of($request->title)->slug('-');
        $data['description'] = $request->description;
        $update =  $service->update($data);
        if ($update) {
            return redirect()->route('service.index')->with('success', 'Data berhasil diubah');
        } else {
            return redirect()->route('service.index')->with('error', 'Data gagal diubah');
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $service = Service::findOrFail($id);
        $delete = $service->delete();
        if ($delete) {
            return redirect()->route('service.index')->with('success', 'Data berhasil dihapus');
        } else {
            return redirect()->route('service.index')->with('error', 'Data gagal dihapus');
        }
    }
}
