<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ApiDocumentationController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// Admin routes (keep existing Laravel/Inertia functionality)
Route::prefix('admin')->group(function () {
    Route::get('/dashboard', function () {
        return Inertia::render('Dashboard');
    })->middleware(['auth', 'verified'])->name('dashboard');

    Route::middleware('auth')->group(function () {
        Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
        Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
        Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
    });
});

// API Testing Page (moved outside admin prefix)
Route::get('/api-test', function () {
    return view('api-test');
})->name('api.test');

// API Documentation - Beautiful HTML version
Route::get('/test-api', [ApiDocumentationController::class, 'index'])->name('api.documentation');

// API Documentation - JSON version
Route::get('/test-api/json', [ApiDocumentationController::class, 'json'])->name('api.documentation.json');

// React app routes - serve the React app for all frontend routes
Route::get('/{any?}', function () {
    return view('app');
})->where('any', '^(?!admin|api).*$');

require __DIR__.'/auth.php';
