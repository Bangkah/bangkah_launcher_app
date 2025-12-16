<?php

namespace App\Http\Controllers;

use Inertia\Inertia;

class DocsController extends Controller
{
    public function show($slug)
    {
        $pages = [
            'about', 'features', 'requirements', 'installation', 'quick-start',
            'usage', 'examples', 'templates', 'docker', 'database',
            'authentication', 'frontend', 'deployment', 'troubleshooting', 'faq',
            'development', 'advanced-usage', 'contributing', 'changelog', 'api-documentation'
        ];

        if (!in_array($slug, $pages)) {
            abort(404);
        }

        // Convert slug to PascalCase for component name
        $component = 'Docs/' . str_replace(['-', ' '], '', ucwords($slug, '-'));

        return Inertia::render($component);
    }
}
