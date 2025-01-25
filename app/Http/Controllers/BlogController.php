<?php

namespace App\Http\Controllers;

use App\Models\Blog;
use Illuminate\Http\Request;

class BlogController extends Controller
{
    public function list() {
        return Blog::get(['id', 'slug', 'title', 'description', 'created_at']);
    }
    public function getDetails($slug) {
        return Blog::where('slug', $slug)->first();
    }
}
