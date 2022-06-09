<?php

namespace App\Http\Controllers;

use App\Http\Requests\UserRequest as Request;
use App\Models\User;
use Illuminate\Support\Facades\Auth;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $users = User::all();
        return view('user.index', compact('users'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('user.create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $user = User::create($request->all());
        if ($user) {
            return redirect()->route('user.index')->with('success', 'User berhasil ditambahkan');
        } else {
            return redirect()->route('user.index')->with('error', 'User gagal dibuat');
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
        $user = User::find($id);
        return view('user.edit', compact('user'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $user = User::find($id);
        $user->update($request->all());
        if ($user) {
            return redirect()->route('user.index')->with('success', 'User berhasil diubah');
        } else {
            return redirect()->route('user.index')->with('error', 'User gagal diubah');
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
        $user = User::find($id);
        if ($user->id == Auth::id()) {
            return redirect()->route('user.index')->with('error', 'User yang login tidak dapat dihapus');
        }
        $user->delete();
        if ($user) {
            return redirect()->route('user.index')->with('success', 'User berhasil dihapus');
        } else {
            return redirect()->route('user.index')->with('error', 'User gagal dihapus');
        }
    }
}
