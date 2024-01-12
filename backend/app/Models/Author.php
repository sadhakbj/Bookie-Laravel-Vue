<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Author extends Model
{
    use HasFactory;

    protected $fillable = ['name', 'email', 'website', 'bio', 'twitter', 'profile_image', 'nationality', 'genre'];

    protected $casts = [
        'genre' => 'array',
    ];
}
