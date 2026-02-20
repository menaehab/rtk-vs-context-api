<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\Task\IndexTaskRequest;
use App\Http\Requests\Task\StoreTaskRequest;
use App\Http\Requests\Task\UpdateTaskRequest;
use App\Http\Resources\TaskResource;
use App\Models\Task;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class TaskController extends Controller
{
    // get: tasks
    public function index(IndexTaskRequest $request)
    {
        $validated = $request->validated();

        $tasks = Task::query()
            ->where('user_id', $request->user()->id)
            ->with('category')
            ->when(isset($validated['status']), function ($query) use ($validated) {
                $query->where('status', $validated['status']);
            })
            ->when(isset($validated['category_id']), function ($query) use ($validated) {
                $query->where('category_id', $validated['category_id']);
            })
            ->latest('id')
            ->paginate($validated['per_page'] ?? 10)
            ->withQueryString();

        return TaskResource::collection($tasks);
    }

    // get: tasks/{task}
    public function show(Request $request, int $task): TaskResource
    {
        $taskModel = Task::where('user_id', $request->user()->id)
            ->with('category')
            ->findOrFail($task);

        return new TaskResource($taskModel);
    }

    // post: tasks
    public function store(StoreTaskRequest $request): JsonResponse
    {
        $task = $request->user()->tasks()->create($request->validated());
        $task->load('category');

        return (new TaskResource($task))
            ->response()
            ->setStatusCode(201);
    }

    // put: tasks/{task}
    public function update(UpdateTaskRequest $request, int $task): TaskResource
    {
        $taskModel = Task::where('user_id', $request->user()->id)->findOrFail($task);
        $taskModel->update($request->validated());
        $taskModel->load('category');

        return new TaskResource($taskModel);
    }

    // put: tasks/{task}/toggle
    public function toggle(Request $request, int $task): TaskResource
    {
        $taskModel = Task::where('user_id', $request->user()->id)->findOrFail($task);

        $taskModel->status = $taskModel->status === Task::STATUS_COMPLETED
            ? Task::STATUS_PENDING
            : Task::STATUS_COMPLETED;

        $taskModel->save();
        $taskModel->load('category');

        return new TaskResource($taskModel);
    }

    // delete: tasks/{task}
    public function destroy(Request $request, int $task): JsonResponse
    {
        $taskModel = Task::where('user_id', $request->user()->id)->findOrFail($task);
        $taskModel->delete();

        return response()->json(status: 204);
    }
}
