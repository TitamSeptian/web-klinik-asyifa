<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class DoctorRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'name' => ['required'],
            'image' => ['required', 'mimes:jpeg,jpg,png'],
            'specialist' => ['required'],
        ];
    }

    public function messages()
    {
        return [
            'name.required' => 'Nama Harus di isi',
            'image.required' => 'Gambar Harus di isi',
            'image.mimes' => 'Image harus jpeg, jpg atau png',
            'specialist.required' => 'Specialist harus di isi',
        ];
    }
}
