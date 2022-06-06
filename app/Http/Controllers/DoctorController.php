<?php

namespace App\Http\Controllers;

use App\Http\Requests\DoctorRequest;
use App\Models\Doctor;
use Illuminate\Support\Facades\Storage;

class DoctorController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $doctors = Doctor::all();
        return view('doctor.index', compact('doctors'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('doctor.create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(DoctorRequest $request)
    {
        $filenameWithExt = $request->file('image')->getClientOriginalName();
        $filename = pathinfo($filenameWithExt, PATHINFO_FILENAME);
        $extension = $request->file('image')->getClientOriginalExtension();
        $fileNameToStore = $request->name . "-" . $request->specialist . '-' . time() . '.' . $extension;
        $path = $request->file('image')->storeAs('public/doctor', $fileNameToStore);
        $doctor = Doctor::create([
            'name' => $request->name,
            'image' => $fileNameToStore,
            'specialist' => $request->specialist,
            'path_image' => $path,
        ]);
        if ($doctor) {
            return redirect()->route('doctor.index')->with('success', 'Doctor created successfully');
        } else {
            return redirect()->route('doctor.index')->with('error', 'Doctor not created');
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
        $doctor = Doctor::findOrFail($id);
        return view('doctor.edit', compact('doctor'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(DoctorRequest $request, $id)
    {
        $doctor = Doctor::findOrFail($id);
        $data = [];
        $data['name'] = $request->name;
        $data['specialist'] = $request->specialist;
        if ($request->hasFile('image')) {
            $filenameWithExt = $request->file('image')->getClientOriginalName();
            $filename = pathinfo($filenameWithExt, PATHINFO_FILENAME);
            $extension = $request->file('image')->getClientOriginalExtension();
            $fileNameToStore = $request->name . "-" . $request->specialist . '-' . time() . '.' . $extension;
            if (Storage::disk('local')->exists($doctor->path_image)) {
                Storage::delete($doctor->path_image);
            }
            $path = $request->file('image')->storeAs('public/doctor', $fileNameToStore);
            $data['image'] = $fileNameToStore;
            $data['path_image'] = $path;
        }
        $doctor->update($data);
        if ($doctor) {
            return redirect()->route('doctor.index')->with('success', 'Doctor updated successfully');
        } else {
            return redirect()->route('doctor.index')->with('error', 'Doctor not updated');
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
        $doctor = Doctor::findOrFail($id);
        if (Storage::disk('local')->exists($doctor->path_image)) {
            Storage::delete($doctor->path_image);
        }
        $doctor->delete();
        if ($doctor) {
            return redirect()->route('doctor.index')->with('success', 'Doctor deleted successfully');
        } else {
            return redirect()->route('doctor.index')->with('error', 'Doctor not deleted');
        }
    }
}
