<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Kidu E-commerce API Tester</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            min-height: 100vh;
            padding: 20px;
        }

        .container {
            max-width: 1200px;
            margin: 0 auto;
            background: white;
            border-radius: 15px;
            box-shadow: 0 20px 40px rgba(0,0,0,0.1);
            overflow: hidden;
        }

        .header {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 30px;
            text-align: center;
        }

        .header h1 {
            font-size: 2.5rem;
            margin-bottom: 10px;
        }

        .header p {
            font-size: 1.1rem;
            opacity: 0.9;
        }

        .content {
            padding: 30px;
        }

        .section {
            margin-bottom: 40px;
            border: 1px solid #e1e5e9;
            border-radius: 10px;
            overflow: hidden;
        }

        .section-header {
            background: #f8f9fa;
            padding: 20px;
            border-bottom: 1px solid #e1e5e9;
            font-weight: bold;
            font-size: 1.2rem;
            color: #333;
        }

        .section-content {
            padding: 20px;
        }

        .form-group {
            margin-bottom: 15px;
        }

        .form-group label {
            display: block;
            margin-bottom: 5px;
            font-weight: bold;
            color: #333;
        }

        .form-group input, .form-group select, .form-group textarea {
            width: 100%;
            padding: 10px;
            border: 1px solid #ddd;
            border-radius: 5px;
            font-size: 14px;
        }

        .form-group textarea {
            height: 100px;
            resize: vertical;
        }

        .btn {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            border: none;
            padding: 12px 25px;
            border-radius: 5px;
            cursor: pointer;
            font-size: 14px;
            font-weight: bold;
            transition: all 0.3s ease;
        }

        .btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 5px 15px rgba(0,0,0,0.2);
        }

        .btn-secondary {
            background: #6c757d;
        }

        .btn-success {
            background: #28a745;
        }

        .btn-danger {
            background: #dc3545;
        }

        .btn-warning {
            background: #ffc107;
            color: #333;
        }

        .response {
            margin-top: 15px;
            padding: 15px;
            border-radius: 5px;
            font-family: 'Courier New', monospace;
            font-size: 12px;
            white-space: pre-wrap;
            max-height: 300px;
            overflow-y: auto;
        }

        .response.success {
            background: #d4edda;
            border: 1px solid #c3e6cb;
            color: #155724;
        }

        .response.error {
            background: #f8d7da;
            border: 1px solid #f5c6cb;
            color: #721c24;
        }

        .tabs {
            display: flex;
            border-bottom: 1px solid #e1e5e9;
            margin-bottom: 20px;
        }

        .tab {
            padding: 15px 25px;
            cursor: pointer;
            border-bottom: 3px solid transparent;
            transition: all 0.3s ease;
        }

        .tab.active {
            border-bottom-color: #667eea;
            background: #f8f9fa;
        }

        .tab-content {
            display: none;
        }

        .tab-content.active {
            display: block;
        }

        .auth-info {
            background: #e3f2fd;
            padding: 15px;
            border-radius: 5px;
            margin-bottom: 20px;
            border-left: 4px solid #2196f3;
        }

        .status-indicator {
            display: inline-block;
            width: 10px;
            height: 10px;
            border-radius: 50%;
            margin-right: 10px;
        }

        .status-connected {
            background: #28a745;
        }

        .status-disconnected {
            background: #dc3545;
        }

        .quick-actions {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 10px;
            margin-bottom: 20px;
        }

        .quick-btn {
            padding: 10px;
            text-align: center;
            border-radius: 5px;
            cursor: pointer;
            transition: all 0.3s ease;
            font-weight: bold;
        }

        .quick-btn:hover {
            transform: translateY(-2px);
        }

        .quick-btn.get {
            background: #28a745;
            color: white;
        }

        .quick-btn.post {
            background: #007bff;
            color: white;
        }

        .quick-btn.put {
            background: #ffc107;
            color: #333;
        }

        .quick-btn.delete {
            background: #dc3545;
            color: white;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>🚀 Kidu E-commerce API Tester</h1>
            <p>Test all APIs with simple clicks - No Postman needed!</p>
        </div>

        <div class="content">
            <!-- Authentication Status -->
            <div class="auth-info">
                <span class="status-indicator" id="authStatus"></span>
                <strong>Authentication Status:</strong> <span id="authText">Not authenticated</span>
                <br>
                <strong>Token:</strong> <span id="tokenDisplay">None</span>
            </div>

            <!-- Quick Actions -->
            <div class="quick-actions">
                <div class="quick-btn get" onclick="testGetProducts()">📦 Get Products</div>
                <div class="quick-btn get" onclick="testGetCategories()">📂 Get Categories</div>
                <div class="quick-btn post" onclick="testRegister()">👤 Register User</div>
                <div class="quick-btn post" onclick="testLogin()">🔑 Login</div>
                <div class="quick-btn get" onclick="testGetCart()">🛒 Get Cart</div>
                <div class="quick-btn get" onclick="testGetOrders()">📋 Get Orders</div>
            </div>

            <!-- Tabs -->
            <div class="tabs">
                <div class="tab active" onclick="showTab('auth')">🔐 Authentication</div>
                <div class="tab" onclick="showTab('products')">📦 Products</div>
                <div class="tab" onclick="showTab('categories')">📂 Categories</div>
                <div class="tab" onclick="showTab('cart')">🛒 Cart</div>
                <div class="tab" onclick="showTab('orders')">📋 Orders</div>
                <div class="tab" onclick="showTab('users')">👤 Users</div>
                <div class="tab" onclick="showTab('suppliers')">🏢 Suppliers</div>
            </div>

            <!-- Authentication Tab -->
            <div id="auth" class="tab-content active">
                <div class="section">
                    <div class="section-header">Register User</div>
                    <div class="section-content">
                        <div class="form-group">
                            <label>Name:</label>
                            <input type="text" id="regName" value="Test User">
                        </div>
                        <div class="form-group">
                            <label>Email:</label>
                            <input type="email" id="regEmail" value="test@example.com">
                        </div>
                        <div class="form-group">
                            <label>Password:</label>
                            <input type="password" id="regPassword" value="password123">
                        </div>
                        <div class="form-group">
                            <label>Password Confirmation:</label>
                            <input type="password" id="regPasswordConfirm" value="password123">
                        </div>
                        <div class="form-group">
                            <label>User Type:</label>
                            <select id="regUserType">
                                <option value="retail">Retail</option>
                                <option value="wholesale">Wholesale</option>
                            </select>
                        </div>
                        <button class="btn" onclick="registerUser()">Register</button>
                        <div id="registerResponse" class="response"></div>
                    </div>
                </div>

                <div class="section">
                    <div class="section-header">Login</div>
                    <div class="section-content">
                        <div class="form-group">
                            <label>Email:</label>
                            <input type="email" id="loginEmail" value="test@example.com">
                        </div>
                        <div class="form-group">
                            <label>Password:</label>
                            <input type="password" id="loginPassword" value="password123">
                        </div>
                        <button class="btn" onclick="loginUser()">Login</button>
                        <div id="loginResponse" class="response"></div>
                    </div>
                </div>

                <div class="section">
                    <div class="section-header">Admin Login</div>
                    <div class="section-content">
                        <div class="form-group">
                            <label>Email:</label>
                            <input type="email" id="adminEmail" value="admin@kidu.com">
                        </div>
                        <div class="form-group">
                            <label>Password:</label>
                            <input type="password" id="adminPassword" value="password">
                        </div>
                        <button class="btn" onclick="adminLogin()">Admin Login</button>
                        <div id="adminLoginResponse" class="response"></div>
                    </div>
                </div>
            </div>

            <!-- Products Tab -->
            <div id="products" class="tab-content">
                <div class="section">
                    <div class="section-header">Get All Products</div>
                    <div class="section-content">
                        <button class="btn" onclick="getProducts()">Get Products</button>
                        <div id="productsResponse" class="response"></div>
                    </div>
                </div>

                <div class="section">
                    <div class="section-header">Get Featured Products</div>
                    <div class="section-content">
                        <button class="btn" onclick="getFeaturedProducts()">Get Featured Products</button>
                        <div id="featuredProductsResponse" class="response"></div>
                    </div>
                </div>

                <div class="section">
                    <div class="section-header">Get Single Product</div>
                    <div class="section-content">
                        <div class="form-group">
                            <label>Product ID:</label>
                            <input type="number" id="productId" value="1">
                        </div>
                        <button class="btn" onclick="getProduct()">Get Product</button>
                        <div id="singleProductResponse" class="response"></div>
                    </div>
                </div>

                <div class="section">
                    <div class="section-header">Create Product (Admin Only)</div>
                    <div class="section-content">
                        <div class="form-group">
                            <label>Name:</label>
                            <input type="text" id="createProductName" value="Test Product">
                        </div>
                        <div class="form-group">
                            <label>Description:</label>
                            <textarea id="createProductDesc">Test product description</textarea>
                        </div>
                        <div class="form-group">
                            <label>SKU:</label>
                            <input type="text" id="createProductSku" value="TEST-001">
                        </div>
                        <div class="form-group">
                            <label>Retail Price:</label>
                            <input type="number" step="0.01" id="createProductRetail" value="99.99">
                        </div>
                        <div class="form-group">
                            <label>Wholesale Price:</label>
                            <input type="number" step="0.01" id="createProductWholesale" value="80.00">
                        </div>
                        <div class="form-group">
                            <label>Stock:</label>
                            <input type="number" id="createProductStock" value="100">
                        </div>
                        <div class="form-group">
                            <label>Category ID:</label>
                            <input type="number" id="createProductCategory" value="1">
                        </div>
                        <button class="btn btn-success" onclick="createProduct()">Create Product</button>
                        <div id="createProductResponse" class="response"></div>
                    </div>
                </div>
            </div>

            <!-- Categories Tab -->
            <div id="categories" class="tab-content">
                <div class="section">
                    <div class="section-header">Get All Categories</div>
                    <div class="section-content">
                        <button class="btn" onclick="getCategories()">Get Categories</button>
                        <div id="categoriesResponse" class="response"></div>
                    </div>
                </div>

                <div class="section">
                    <div class="section-header">Get Single Category</div>
                    <div class="section-content">
                        <div class="form-group">
                            <label>Category ID:</label>
                            <input type="number" id="categoryId" value="1">
                        </div>
                        <button class="btn" onclick="getCategory()">Get Category</button>
                        <div id="singleCategoryResponse" class="response"></div>
                    </div>
                </div>
            </div>

            <!-- Cart Tab -->
            <div id="cart" class="tab-content">
                <div class="section">
                    <div class="section-header">Get Cart</div>
                    <div class="section-content">
                        <button class="btn" onclick="getCart()">Get Cart</button>
                        <div id="cartResponse" class="response"></div>
                    </div>
                </div>

                <div class="section">
                    <div class="section-header">Add to Cart</div>
                    <div class="section-content">
                        <div class="form-group">
                            <label>Product ID:</label>
                            <input type="number" id="addToCartProductId" value="1">
                        </div>
                        <div class="form-group">
                            <label>Quantity:</label>
                            <input type="number" id="addToCartQuantity" value="2">
                        </div>
                        <button class="btn btn-success" onclick="addToCart()">Add to Cart</button>
                        <div id="addToCartResponse" class="response"></div>
                    </div>
                </div>

                <div class="section">
                    <div class="section-header">Clear Cart</div>
                    <div class="section-content">
                        <button class="btn btn-danger" onclick="clearCart()">Clear Cart</button>
                        <div id="clearCartResponse" class="response"></div>
                    </div>
                </div>
            </div>

            <!-- Orders Tab -->
            <div id="orders" class="tab-content">
                <div class="section">
                    <div class="section-header">Get Orders</div>
                    <div class="section-content">
                        <button class="btn" onclick="getOrders()">Get Orders</button>
                        <div id="ordersResponse" class="response"></div>
                    </div>
                </div>

                <div class="section">
                    <div class="section-header">Create Order</div>
                    <div class="section-content">
                        <div class="form-group">
                            <label>Shipping Address (JSON):</label>
                            <textarea id="shippingAddress">{"name":"Test User","address":"123 Test St","city":"Test City","state":"TS","zip":"12345","country":"USA"}</textarea>
                        </div>
                        <div class="form-group">
                            <label>Billing Address (JSON):</label>
                            <textarea id="billingAddress">{"name":"Test User","address":"123 Test St","city":"Test City","state":"TS","zip":"12345","country":"USA"}</textarea>
                        </div>
                        <div class="form-group">
                            <label>Payment Method:</label>
                            <input type="text" id="paymentMethod" value="credit_card">
                        </div>
                        <div class="form-group">
                            <label>Shipping Method:</label>
                            <input type="text" id="shippingMethod" value="standard">
                        </div>
                        <button class="btn btn-success" onclick="createOrder()">Create Order</button>
                        <div id="createOrderResponse" class="response"></div>
                    </div>
                </div>
            </div>

            <!-- Users Tab -->
            <div id="users" class="tab-content">
                <div class="section">
                    <div class="section-header">Get Profile</div>
                    <div class="section-content">
                        <button class="btn" onclick="getProfile()">Get Profile</button>
                        <div id="profileResponse" class="response"></div>
                    </div>
                </div>

                <div class="section">
                    <div class="section-header">Update Profile</div>
                    <div class="section-content">
                        <div class="form-group">
                            <label>Name:</label>
                            <input type="text" id="updateProfileName" value="Updated Name">
                        </div>
                        <div class="form-group">
                            <label>Phone:</label>
                            <input type="text" id="updateProfilePhone" value="+1234567890">
                        </div>
                        <button class="btn btn-warning" onclick="updateProfile()">Update Profile</button>
                        <div id="updateProfileResponse" class="response"></div>
                    </div>
                </div>

                <div class="section">
                    <div class="section-header">Get All Users (Admin Only)</div>
                    <div class="section-content">
                        <button class="btn" onclick="getAllUsers()">Get All Users</button>
                        <div id="allUsersResponse" class="response"></div>
                    </div>
                </div>
            </div>

            <!-- Suppliers Tab -->
            <div id="suppliers" class="tab-content">
                <div class="section">
                    <div class="section-header">Get All Suppliers (Admin Only)</div>
                    <div class="section-content">
                        <button class="btn" onclick="getSuppliers()">Get Suppliers</button>
                        <div id="suppliersResponse" class="response"></div>
                    </div>
                </div>

                <div class="section">
                    <div class="section-header">Create Supplier (Admin Only)</div>
                    <div class="section-content">
                        <div class="form-group">
                            <label>Name:</label>
                            <input type="text" id="createSupplierName" value="New Supplier">
                        </div>
                        <div class="form-group">
                            <label>Email:</label>
                            <input type="email" id="createSupplierEmail" value="contact@newsupplier.com">
                        </div>
                        <div class="form-group">
                            <label>Phone:</label>
                            <input type="text" id="createSupplierPhone" value="+1234567890">
                        </div>
                        <div class="form-group">
                            <label>Address:</label>
                            <input type="text" id="createSupplierAddress" value="456 Supplier St">
                        </div>
                        <div class="form-group">
                            <label>City:</label>
                            <input type="text" id="createSupplierCity" value="Los Angeles">
                        </div>
                        <div class="form-group">
                            <label>Country:</label>
                            <input type="text" id="createSupplierCountry" value="USA">
                        </div>
                        <button class="btn btn-success" onclick="createSupplier()">Create Supplier</button>
                        <div id="createSupplierResponse" class="response"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <script>
        let token = localStorage.getItem('token') || '';
        let adminToken = localStorage.getItem('adminToken') || '';

        // Update auth status
        function updateAuthStatus() {
            const authStatus = document.getElementById('authStatus');
            const authText = document.getElementById('authText');
            const tokenDisplay = document.getElementById('tokenDisplay');

            if (token) {
                authStatus.className = 'status-indicator status-connected';
                authText.textContent = 'Authenticated';
                tokenDisplay.textContent = token.substring(0, 20) + '...';
            } else {
                authStatus.className = 'status-indicator status-disconnected';
                authText.textContent = 'Not authenticated';
                tokenDisplay.textContent = 'None';
            }
        }

        // Tab functionality
        function showTab(tabName) {
            // Hide all tab contents
            const tabContents = document.querySelectorAll('.tab-content');
            tabContents.forEach(content => content.classList.remove('active'));

            // Remove active class from all tabs
            const tabs = document.querySelectorAll('.tab');
            tabs.forEach(tab => tab.classList.remove('active'));

            // Show selected tab content
            document.getElementById(tabName).classList.add('active');

            // Add active class to selected tab
            event.target.classList.add('active');
        }

        // API call helper
        async function apiCall(url, options = {}) {
            const baseUrl = 'http://127.0.0.1:8000/api';
            
            const defaultOptions = {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                }
            };

            if (token && !url.includes('/register') && !url.includes('/login')) {
                defaultOptions.headers['Authorization'] = `Bearer ${token}`;
            }

            const finalOptions = { ...defaultOptions, ...options };
            
            try {
                const response = await fetch(`${baseUrl}${url}`, finalOptions);
                const data = await response.json();
                
                return {
                    status: response.status,
                    data: data,
                    success: response.ok
                };
            } catch (error) {
                return {
                    status: 0,
                    data: { error: error.message },
                    success: false
                };
            }
        }

        // Display response
        function displayResponse(elementId, result) {
            const element = document.getElementById(elementId);
            element.className = `response ${result.success ? 'success' : 'error'}`;
            element.textContent = JSON.stringify(result.data, null, 2);
        }

        // Authentication functions
        async function registerUser() {
            const data = {
                name: document.getElementById('regName').value,
                email: document.getElementById('regEmail').value,
                password: document.getElementById('regPassword').value,
                password_confirmation: document.getElementById('regPasswordConfirm').value,
                user_type: document.getElementById('regUserType').value
            };

            const result = await apiCall('/register', {
                method: 'POST',
                body: JSON.stringify(data)
            });

            if (result.success) {
                token = result.data.token;
                localStorage.setItem('token', token);
                updateAuthStatus();
            }

            displayResponse('registerResponse', result);
        }

        async function loginUser() {
            const data = {
                email: document.getElementById('loginEmail').value,
                password: document.getElementById('loginPassword').value
            };

            const result = await apiCall('/login', {
                method: 'POST',
                body: JSON.stringify(data)
            });

            if (result.success) {
                token = result.data.token;
                localStorage.setItem('token', token);
                updateAuthStatus();
            }

            displayResponse('loginResponse', result);
        }

        async function adminLogin() {
            const data = {
                email: document.getElementById('adminEmail').value,
                password: document.getElementById('adminPassword').value
            };

            const result = await apiCall('/login', {
                method: 'POST',
                body: JSON.stringify(data)
            });

            if (result.success) {
                adminToken = result.data.token;
                localStorage.setItem('adminToken', adminToken);
                updateAuthStatus();
            }

            displayResponse('adminLoginResponse', result);
        }

        // Product functions
        async function getProducts() {
            const result = await apiCall('/products');
            displayResponse('productsResponse', result);
        }

        async function getFeaturedProducts() {
            const result = await apiCall('/products/featured');
            displayResponse('featuredProductsResponse', result);
        }

        async function getProduct() {
            const productId = document.getElementById('productId').value;
            const result = await apiCall(`/products/${productId}`);
            displayResponse('singleProductResponse', result);
        }

        async function createProduct() {
            const data = {
                name: document.getElementById('createProductName').value,
                description: document.getElementById('createProductDesc').value,
                sku: document.getElementById('createProductSku').value,
                retail_price: parseFloat(document.getElementById('createProductRetail').value),
                wholesale_price: parseFloat(document.getElementById('createProductWholesale').value),
                stock: parseInt(document.getElementById('createProductStock').value),
                category_id: parseInt(document.getElementById('createProductCategory').value),
                status: 'active',
                is_featured: false
            };

            const result = await apiCall('/products', {
                method: 'POST',
                body: JSON.stringify(data)
            });

            displayResponse('createProductResponse', result);
        }

        // Category functions
        async function getCategories() {
            const result = await apiCall('/categories');
            displayResponse('categoriesResponse', result);
        }

        async function getCategory() {
            const categoryId = document.getElementById('categoryId').value;
            const result = await apiCall(`/categories/${categoryId}`);
            displayResponse('singleCategoryResponse', result);
        }

        // Cart functions
        async function getCart() {
            const result = await apiCall('/cart');
            displayResponse('cartResponse', result);
        }

        async function addToCart() {
            const data = {
                product_id: parseInt(document.getElementById('addToCartProductId').value),
                quantity: parseInt(document.getElementById('addToCartQuantity').value)
            };

            const result = await apiCall('/cart/add', {
                method: 'POST',
                body: JSON.stringify(data)
            });

            displayResponse('addToCartResponse', result);
        }

        async function clearCart() {
            const result = await apiCall('/cart/clear', {
                method: 'DELETE'
            });

            displayResponse('clearCartResponse', result);
        }

        // Order functions
        async function getOrders() {
            const result = await apiCall('/orders');
            displayResponse('ordersResponse', result);
        }

        async function createOrder() {
            const data = {
                shipping_address: JSON.parse(document.getElementById('shippingAddress').value),
                billing_address: JSON.parse(document.getElementById('billingAddress').value),
                payment_method: document.getElementById('paymentMethod').value,
                shipping_method: document.getElementById('shippingMethod').value
            };

            const result = await apiCall('/orders', {
                method: 'POST',
                body: JSON.stringify(data)
            });

            displayResponse('createOrderResponse', result);
        }

        // User functions
        async function getProfile() {
            const result = await apiCall('/profile');
            displayResponse('profileResponse', result);
        }

        async function updateProfile() {
            const data = {
                name: document.getElementById('updateProfileName').value,
                phone: document.getElementById('updateProfilePhone').value
            };

            const result = await apiCall('/profile', {
                method: 'PUT',
                body: JSON.stringify(data)
            });

            displayResponse('updateProfileResponse', result);
        }

        async function getAllUsers() {
            const result = await apiCall('/users');
            displayResponse('allUsersResponse', result);
        }

        // Supplier functions
        async function getSuppliers() {
            const result = await apiCall('/suppliers');
            displayResponse('suppliersResponse', result);
        }

        async function createSupplier() {
            const data = {
                name: document.getElementById('createSupplierName').value,
                email: document.getElementById('createSupplierEmail').value,
                phone: document.getElementById('createSupplierPhone').value,
                address: document.getElementById('createSupplierAddress').value,
                city: document.getElementById('createSupplierCity').value,
                country: document.getElementById('createSupplierCountry').value,
                contact_person: 'Test Contact',
                is_active: true
            };

            const result = await apiCall('/suppliers', {
                method: 'POST',
                body: JSON.stringify(data)
            });

            displayResponse('createSupplierResponse', result);
        }

        // Quick test functions
        async function testGetProducts() {
            await getProducts();
            showTab('products');
        }

        async function testGetCategories() {
            await getCategories();
            showTab('categories');
        }

        async function testRegister() {
            await registerUser();
            showTab('auth');
        }

        async function testLogin() {
            await loginUser();
            showTab('auth');
        }

        async function testGetCart() {
            await getCart();
            showTab('cart');
        }

        async function testGetOrders() {
            await getOrders();
            showTab('orders');
        }

        // Initialize
        updateAuthStatus();
    </script>
</body>
</html> 