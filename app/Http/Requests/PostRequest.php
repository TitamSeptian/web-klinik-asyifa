<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class PostRequest extends FormRequest
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
        $rules['title'] = ['required', 'string', 'max:255'];
        $rules['body'] = ['required', 'string'];
        $rules['tags'] = ['required'];
        $rules['mini_body'] = ['required', 'string', 'max:255'];
        if ($this->method() == 'POST') {
            $rules['thumbnail'] = ['required', 'image', 'mimes:jpeg,png,jpg,gif,svg', 'max:2048'];
            $rules['cover'] = ['required', 'image', 'mimes:jpeg,png,jpg,gif,svg', 'max:2048'];
        }
        return $rules;
    }

    public function messages()
    {
        return [
            'title.required' => 'Title Harus diisi',
            'body.required' => 'Body Harus diisi',
            'tags.required' => 'Tags Harus diisi',
            'cover.required' => 'Cover Harus diisi',
            'cover.image' => 'Cover Harus berupa gambar',
        ];
    }
}
