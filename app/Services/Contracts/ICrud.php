<?php

namespace App\Services\Contracts;

use Illuminate\Database\Eloquent\Model;

interface ICrud
{
    public function create(array $attributes): Model;

    public function update(array $attributes, $id): Model;

    public function delete($id): bool;

    public function view($id): Model;
}