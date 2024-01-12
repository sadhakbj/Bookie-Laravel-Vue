<?php

namespace App\Http\Controllers;

use App\Http\Requests\{CreateAuthorRequest, UpdateAuthorRequest};
use App\Models\Author;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Model;

class AuthorController extends Controller
{
    public function index(): Collection|array
    {
        return Author::query()->get();
    }


    public function store(CreateAuthorRequest $request): Model|Builder
    {
        $data = $request->validated();

        return Author::query()->create($data);
    }

    public function show(Author $author): Author
    {
        return $author;
    }

    public function update(UpdateAuthorRequest $request, Author $author): Author
    {
        $author->update($request->validated());

        return $author;
    }

    public function destroy(Author $author): ?bool
    {
        return $author->delete();
    }
}
