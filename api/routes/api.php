<?php

use App\Http\Controllers\PostController;
use App\Models\Post;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


Route::resource("post",PostController::class);
Route::resource("comment",CommentController::class);

Route::group(["prefix"=>"dummy_auth"],function(){
    Route::get('post/{post?}',function(Post $post=null){
        if($post->id<10){return ["ok"=>false,"reason"=>"old content only viewable to admin"];}
        return ["ok"=>true];
    });
});
