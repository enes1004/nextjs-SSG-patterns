const USE_APP_ROUTER_API = false;
export const LARAVEL_API = USE_APP_ROUTER_API ? 'http://localhost:3000' :process.env.LARAVEL_API ?? 'http://localhost:8000';