<?php
 
namespace App\Http\Controllers\Update;
 
use DB;
use Config;
use Artisan;
use App\Http\Controllers\Controller;
use App\Models\AutomaticPaymentGateway;
use Illuminate\Support\Facades\File;
use Illuminate\Filesystem\Filesystem;
use Illuminate\Support\Facades\Schema;

class UpdateController extends Controller
{
   
    /**
     * Start upgrading to latest version
     *
     * @return void
     */
    public function update()
    {
        try {
            
            // Check if update file exists, or application is up to date
            if (!File::exists(base_path('updating'))) {
                return redirect('/');
            }

            Schema::disableForeignKeyConstraints();
            DB::statement('SET FOREIGN_KEY_CHECKS = 0');

            // Run migration
            Artisan::call('migrate', [ '--force' => true ]);

            // Empty payment gateways table
            try {
                AutomaticPaymentGateway::truncate();
            } catch (\Throwable $th) {
                // Continue
            }

            // After that we need to run seeders
            try {
                Artisan::call('db:seed', [ '--class' => 'AutomaticPaymentGatewaysTableSeeder', '--force' => true ]);
                Artisan::call('db:seed', [ '--class' => 'OfflinePaymentGatewaysTableSeeder', '--force' => true ]);
            } catch (\Throwable $th) {
                // Continue
            }

            // Clear cache
            Artisan::call('view:clear');
            Artisan::call('config:clear');

            // Delete update file
            File::delete(base_path('updating'));
            
            // Delete folder
            if (File::exists(app_path('Http/Controllers/Update'))) {
                File::deleteDirectory( app_path('Http/Controllers/Update') );
            }

            // Redirect
            return redirect('/');

        } catch (\Throwable $th) {
            throw $th;
        }
    }

}