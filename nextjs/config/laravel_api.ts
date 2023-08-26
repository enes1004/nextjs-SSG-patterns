const USE_APP_ROUTER_API = true;
export const LARAVEL_API = USE_APP_ROUTER_API ? 'http://localhost:3000' :process.env.LARAVEL_API ?? 'http://localhost:8000';