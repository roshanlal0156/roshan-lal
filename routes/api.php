<?php

use App\Http\Controllers\BlogController;
use Illuminate\Support\Facades\Route;

Route::get('blogs', [BlogController::class, 'list']);
Route::get('blogs/{slug}', [BlogController::class, 'getDetails']);