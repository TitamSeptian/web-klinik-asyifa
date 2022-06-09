<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class GalleryRequest extends FormRequest
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
        $rules = [
            'title' => ['required', 'string', 'max:255'],
        ];
        if ($this->method() == 'POST') {
            $rules['image'] = ['required', 'image', 'mimes:jpeg,png,jpg,svg', 'max:2048'];
        }
        return $rules;
    }
}
