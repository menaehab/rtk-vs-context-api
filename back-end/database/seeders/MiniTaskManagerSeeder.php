<?php

namespace Database\Seeders;

use App\Models\Category;
use App\Models\Task;
use App\Models\User;
use Illuminate\Database\Seeder;

class MiniTaskManagerSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $user = User::factory()->create([
            'name' => 'Test User',
            'email' => 'test@example.com',
            'password' => 'password',
        ]);

        $categories = Category::factory()
            ->count(3)
            ->sequence(
                ['name' => 'Work'],
                ['name' => 'Personal'],
                ['name' => 'Shopping'],
            )
            ->for($user)
            ->create();

        Task::factory()
            ->count(10)
            ->for($user)
            ->state(fn () => [
                'category_id' => $categories->random()->id,
            ])
            ->create();
    }
}
