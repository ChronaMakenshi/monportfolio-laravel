<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />

    <!-- Fetch project name dynamically -->
    <title inertia>{{ config('app.name', 'Laravel') }}</title>

    <!-- Scripts -->
    @viteReactRefresh
    @vite(['resources/css/app.css', 'resources/js/app.jsx']) @inertiaHead
</head>

<body class="font-body  antialiased">
@inertia
</body>
</html>
