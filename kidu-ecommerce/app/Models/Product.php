<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Spatie\Sluggable\HasSlug;
use Spatie\Sluggable\SlugOptions;

class Product extends Model
{
    use HasFactory, SoftDeletes, HasSlug;

    protected $fillable = [
        'name',
        'slug',
        'description',
        'sku',
        'retail_price',
        'wholesale_price',
        'stock',
        'min_order_qty',
        'category_id',
        'supplier_id',
        'images',
        'specifications',
        'weight',
        'dimensions',
        'origin_country',
        'status',
        'is_featured',
        'meta_title',
        'meta_description',
    ];

    protected $casts = [
        'images' => 'array',
        'specifications' => 'array',
        'retail_price' => 'decimal:2',
        'wholesale_price' => 'decimal:2',
        'is_featured' => 'boolean',
    ];

    public function getSlugOptions(): SlugOptions
    {
        return SlugOptions::create()
            ->generateSlugsFrom('name')
            ->saveSlugsTo('slug');
    }

    public function category()
    {
        return $this->belongsTo(Category::class);
    }

    public function supplier()
    {
        return $this->belongsTo(Supplier::class);
    }

    public function orderItems()
    {
        return $this->hasMany(OrderItem::class);
    }

    public function cartItems()
    {
        return $this->hasMany(CartItem::class);
    }

    public function getPriceForUser($user = null)
    {
        if ($user && $user->isWholesale()) {
            return $this->wholesale_price;
        }
        return $this->retail_price;
    }
} 