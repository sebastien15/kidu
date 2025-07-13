import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import { resolve } from 'path';

export default defineConfig({
    plugins: [
        laravel({
            input: [
                'resources/css/app.css',
                'resources/js/app.jsx'
            ],
            refresh: true,
        }),
    ],
    esbuild: {
        jsx: 'automatic',
    },
    resolve: {
        alias: {
            '@': resolve(__dirname, 'resources/js'),
            '@assets': resolve(__dirname, 'resources/js/assets'),
            '@components': resolve(__dirname, 'resources/js/components'),
            '@pages': resolve(__dirname, 'resources/js/pages'),
            '@styles': resolve(__dirname, 'resources/js/styles'),
        },
    },
    server: {
        host: 'localhost',
        port: 5173,
        hmr: {
            host: 'localhost',
        },
    },
});
