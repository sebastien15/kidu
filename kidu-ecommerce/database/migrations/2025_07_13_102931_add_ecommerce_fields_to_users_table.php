<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up()
    {
        Schema::table('users', function (Blueprint $table) {
            $table->string('phone')->nullable();
            $table->text('address')->nullable();
            $table->string('city')->nullable();
            $table->string('country')->nullable();
            $table->enum('user_type', ['retail', 'wholesale'])->default('retail');
            $table->string('company_name')->nullable();
            $table->string('tax_number')->nullable();
            $table->string('preferred_currency', 3)->default('USD');
            $table->string('preferred_language', 2)->default('en');
            $table->boolean('is_active')->default(true);
            $table->string('avatar')->nullable();
        });
    }

    public function down()
    {
        Schema::table('users', function (Blueprint $table) {
            $table->dropColumn([
                'phone', 'address', 'city', 'country', 'user_type',
                'company_name', 'tax_number', 'preferred_currency',
                'preferred_language', 'is_active', 'avatar'
            ]);
        });
    }
};
