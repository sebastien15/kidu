<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Kidu E-commerce API Documentation</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            line-height: 1.6;
            color: #333;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            min-height: 100vh;
        }

        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 20px;
        }

        .header {
            background: rgba(255, 255, 255, 0.95);
            backdrop-filter: blur(10px);
            border-radius: 20px;
            padding: 40px;
            margin-bottom: 30px;
            text-align: center;
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
        }

        .header h1 {
            font-size: 2.5rem;
            color: #2c3e50;
            margin-bottom: 10px;
            background: linear-gradient(45deg, #667eea, #764ba2);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }

        .header p {
            font-size: 1.1rem;
            color: #666;
            margin-bottom: 20px;
        }

        .stats {
            display: flex;
            justify-content: center;
            gap: 30px;
            flex-wrap: wrap;
        }

        .stat {
            text-align: center;
        }

        .stat-number {
            font-size: 2rem;
            font-weight: bold;
            color: #667eea;
        }

        .stat-label {
            font-size: 0.9rem;
            color: #666;
            text-transform: uppercase;
            letter-spacing: 1px;
        }

        .quick-links {
            background: rgba(255, 255, 255, 0.95);
            backdrop-filter: blur(10px);
            border-radius: 15px;
            padding: 20px;
            margin-bottom: 30px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        }

        .quick-links h3 {
            margin-bottom: 15px;
            color: #2c3e50;
        }

        .links {
            display: flex;
            gap: 15px;
            flex-wrap: wrap;
        }

        .link-btn {
            display: inline-block;
            padding: 10px 20px;
            background: linear-gradient(45deg, #667eea, #764ba2);
            color: white;
            text-decoration: none;
            border-radius: 25px;
            font-weight: 500;
            transition: transform 0.2s, box-shadow 0.2s;
        }

        .link-btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 10px 20px rgba(102, 126, 234, 0.3);
        }

        .endpoints-section {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
            gap: 20px;
        }

        .endpoint-group {
            background: rgba(255, 255, 255, 0.95);
            backdrop-filter: blur(10px);
            border-radius: 15px;
            padding: 25px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        }

        .endpoint-group h3 {
            color: #2c3e50;
            margin-bottom: 20px;
            font-size: 1.3rem;
            text-transform: capitalize;
            border-bottom: 2px solid #667eea;
            padding-bottom: 10px;
        }

        .endpoint {
            display: flex;
            align-items: flex-start;
            margin-bottom: 15px;
            padding: 12px;
            background: #f8f9fa;
            border-radius: 8px;
            border-left: 4px solid #667eea;
        }

        .endpoint:last-child {
            margin-bottom: 0;
        }

        .method {
            font-weight: bold;
            font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
            font-size: 0.85rem;
            padding: 4px 8px;
            border-radius: 4px;
            margin-right: 12px;
            min-width: 60px;
            text-align: center;
        }

        .method.get { background: #28a745; color: white; }
        .method.post { background: #007bff; color: white; }
        .method.put { background: #ffc107; color: #333; }
        .method.delete { background: #dc3545; color: white; }

        .endpoint-info {
            flex: 1;
        }

        .endpoint-path {
            font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
            font-weight: 600;
            color: #2c3e50;
            margin-bottom: 4px;
        }

        .endpoint-description {
            color: #666;
            font-size: 0.9rem;
        }

        .auth-info {
            background: rgba(255, 255, 255, 0.95);
            backdrop-filter: blur(10px);
            border-radius: 15px;
            padding: 25px;
            margin-top: 30px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        }

        .auth-info h3 {
            color: #2c3e50;
            margin-bottom: 15px;
        }

        .auth-example {
            background: #2c3e50;
            color: #fff;
            padding: 15px;
            border-radius: 8px;
            font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
            font-size: 0.9rem;
            margin: 10px 0;
        }

        .notes {
            background: rgba(255, 255, 255, 0.95);
            backdrop-filter: blur(10px);
            border-radius: 15px;
            padding: 25px;
            margin-top: 30px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        }

        .notes h3 {
            color: #2c3e50;
            margin-bottom: 15px;
        }

        .notes ul {
            list-style: none;
        }

        .notes li {
            padding: 8px 0;
            border-bottom: 1px solid #eee;
            position: relative;
            padding-left: 20px;
        }

        .notes li:before {
            content: "✓";
            color: #28a745;
            font-weight: bold;
            position: absolute;
            left: 0;
        }

        .notes li:last-child {
            border-bottom: none;
        }

        @media (max-width: 768px) {
            .header h1 {
                font-size: 2rem;
            }

            .stats {
                gap: 20px;
            }

            .endpoints-section {
                grid-template-columns: 1fr;
            }

            .links {
                flex-direction: column;
            }

            .endpoint {
                flex-direction: column;
                align-items: flex-start;
            }

            .method {
                margin-bottom: 8px;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <!-- Header -->
        <div class="header">
            <h1>🚀 Kidu E-commerce API</h1>
            <p>Comprehensive REST API for electronics, cars, and car spare parts e-commerce platform</p>
            <div class="stats">
                <div class="stat">
                    <div class="stat-number">{{ $totalEndpoints }}</div>
                    <div class="stat-label">Endpoints</div>
                </div>
                <div class="stat">
                    <div class="stat-number">7</div>
                    <div class="stat-label">Categories</div>
                </div>
                <div class="stat">
                    <div class="stat-number">100%</div>
                    <div class="stat-label">RESTful</div>
                </div>
            </div>
        </div>

        <!-- Quick Links -->
        <div class="quick-links">
            <h3>🔗 Quick Links</h3>
            <div class="links">
                <a href="{{ $testInterface }}" class="link-btn">🧪 API Tester</a>
                <a href="{{ $baseUrl }}" class="link-btn">📡 API Base URL</a>
                <a href="/test-api/json" class="link-btn">📄 JSON Format</a>
            </div>
        </div>

        <!-- API Endpoints -->
        <div class="endpoints-section">
            @foreach($apiRoutes as $category => $endpoints)
            <div class="endpoint-group">
                <h3>{{ ucfirst($category) }}</h3>
                @foreach($endpoints as $route => $description)
                    @php
                        $parts = explode(' ', $route);
                        $method = strtolower($parts[0]);
                        $path = $parts[1];
                    @endphp
                    <div class="endpoint">
                        <span class="method {{ $method }}">{{ strtoupper($method) }}</span>
                        <div class="endpoint-info">
                            <div class="endpoint-path">{{ $path }}</div>
                            <div class="endpoint-description">{{ $description }}</div>
                        </div>
                    </div>
                @endforeach
            </div>
            @endforeach
        </div>

        <!-- Authentication Info -->
        <div class="auth-info">
            <h3>🔐 Authentication</h3>
            <p>Most endpoints require Bearer token authentication. Get your token by registering or logging in:</p>
            <div class="auth-example">
                POST {{ $baseUrl }}/login
                Content-Type: application/json

                {
                    "email": "user@example.com",
                    "password": "password"
                }
            </div>
            <p>Then include the token in subsequent requests:</p>
            <div class="auth-example">
                Authorization: Bearer {your_token_here}
            </div>
        </div>

        <!-- Notes -->
        <div class="notes">
            <h3>📝 Important Notes</h3>
            <ul>
                <li>All API endpoints are prefixed with <code>/api</code></li>
                <li>Authentication required endpoints need Bearer token in Authorization header</li>
                <li>Admin only endpoints require admin role</li>
                <li>Use the <a href="{{ $testInterface }}">API testing interface</a> for easy testing without Postman</li>
                <li>Base URL: <code>{{ $baseUrl }}</code></li>
                <li>All responses are in JSON format</li>
                <li>HTTP status codes follow REST conventions</li>
            </ul>
        </div>
    </div>
</body>
</html> 