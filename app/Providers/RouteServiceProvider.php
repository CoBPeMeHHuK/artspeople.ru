<?php

namespace App\Providers;

use Illuminate\Foundation\Support\Providers\RouteServiceProvider as ServiceProvider;
use Illuminate\Support\Facades\Route;

class RouteServiceProvider extends ServiceProvider
{
    /**
     * This namespace is applied to your controller routes.
     *
     * In addition, it is set as the URL generator's root namespace.
     *
     * @var string
     */
	protected $namespaceFrontend = 'App\Http\Controllers\Frontend';
	protected $namespaceBackend = 'App\Http\Controllers\Backend';
	protected $namespaceApi = 'App\Http\Controllers\Api';

    /**
     * Define your route model bindings, pattern filters, etc.
     *
     * @return void
     */
    public function boot()
    {
        //

        parent::boot();
    }

    /**
     * Define the routes for the application.
     *
     * @return void
     */
    public function map()
    {
        $this->mapApiRoutes();
	    $this->mapFrontendRoutes();
	    $this->mapBackendRoutes();

        //
    }


	protected function mapFrontendRoutes()
	{
		Route::middleware('web')
			->namespace($this->namespaceFrontend)
			->group(base_path('routes/frontend.php'));
	}
	protected function mapBackendRoutes()
	{
		Route::middleware('web')
			->namespace($this->namespaceBackend)
			->group(base_path('routes/backend.php'));
	}
	
	
    /**
     * Define the "api" routes for the application.
     *
     * These routes are typically stateless.
     *
     * @return void
     */
    protected function mapApiRoutes()
    {
        Route::prefix('api')
             ->middleware('web')
             ->namespace($this->namespaceApi)
             ->group(base_path('routes/api.php'));
    }
}
