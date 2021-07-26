<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
//request del tipo get, put// 
/*Route::get('/', function () {
    $name = 'Prueba';
    return view('welcome', ['name' => $name]);
});*/
Route::get('/excel', 'App\Http\Controllers\ExcelController@index')->name('index');


