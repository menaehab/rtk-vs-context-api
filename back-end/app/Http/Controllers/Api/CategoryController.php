<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\Category\StoreCategoryRequest;
use App\Http\Requests\Category\UpdateCategoryRequest;
use App\Http\Resources\CategoryResource;
use App\Models\Category;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;

class CategoryController extends Controller
{
    public function index(): AnonymousResourceCollection
    {
        $categories = auth()->user()->categories()->latest('id')->get();

        return CategoryResource::collection($categories);
    }

    public function store(StoreCategoryRequest $request): JsonResponse
    {
        $category = auth()->user()->categories()->create($request->validated());

        return (new CategoryResource($category))
            ->response()
            ->setStatusCode(201);
    }

    public function update(UpdateCategoryRequest $request, int $category): CategoryResource
    {
        $categoryModel = Category::where('user_id', auth()->id())->findOrFail($category);
        $categoryModel->update($request->validated());

        return new CategoryResource($categoryModel);
    }

    public function destroy(int $category): JsonResponse
    {
        $categoryModel = Category::where('user_id', auth()->id())->findOrFail($category);
        $categoryModel->delete();

        return response()->json(status: 204);
    }
}
