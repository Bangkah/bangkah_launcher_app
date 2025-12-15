<?php

use App\Http\Controllers\HomeController;
use App\Http\Controllers\DocsController;
use Illuminate\Support\Facades\Route;

Route::get('/', [HomeController::class, 'index'])->name('home');
Route::get('/docs/{slug}', [DocsController::class, 'show'])->name('docs.show');
