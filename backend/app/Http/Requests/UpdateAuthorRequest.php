<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;

class UpdateAuthorRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'name' => 'required|string|min:3|max:30',
            'email' => ['email', Rule::unique('authors')->ignore((int) $this->segment(3))],
            'website' => 'url:http,https',
            'bio' => 'required|string|max:1000',
            'nationality' => 'string',
            'genre.*' => 'string',
        ];
    }
}
