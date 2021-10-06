<?php

namespace App\Providers;

use App\Repositories\Base\BaseRepository;
use App\Repositories\Contracts\IRepository;
use Illuminate\Support\ServiceProvider;

class RepositoryServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     *
     * @return void
     */
    public function register()
    {
        $repositories = [];

        $this->app->bind(IRepository::class, BaseRepository::class);

        foreach ($repositories as $repository) {
            $this->app->bind(
                'App\Repositories\Contracts\I' . $repository . 'Repository',
                'App\Repositories\\' . $repository . 'Repository'
            );
        }
    }

    /**
     * Bootstrap services.
     *
     * @return void
     */
    public function boot()
    {
        //
    }
}
