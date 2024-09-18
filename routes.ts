/**
 * Public routes that don't require authentication
 * @type {string[]}
 */
export const publicRoutes = [
    "/",
];

/**
 * Array of routes used for authentication.
 * These routes don't require authentication while redirecting to settings.
 * @type {string[]}
 */
export const authRoutes = [
    "/auth/login",
    "/auth/register",
];

/**
 * The prefix for API authentication routes.
 * Routes that start with this prefix are used for API authentication.
 * @type {string}
 */
export const apiAuthPrefix = "/api/auth";

/**
 * Default redirect path after logging in.
 * @type {string}
 */
export const DEFAULT_LOGIN_REDIRECT = "/settings";
