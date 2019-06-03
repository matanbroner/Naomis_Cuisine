
export const HOSTNAME = 'http://localhost'

// Pages

export const HOME_PAGE = '/'
export const ABOUT_PAGE = '/about'
export const MENUS_PAGE = '/menus'

// Users Service
export const USER_SERVICE_BASE = HOSTNAME + "/users"
export const USER_SERVICE_LOGIN = USER_SERVICE_BASE + "/api/login"
export const USER_SERVICE_REGISTER = USER_SERVICE_BASE + "/api/register"
export const USER_SERVICE_FORGOT_PASS = USER_SERVICE_BASE + '/api/forgot_password'

// Orders Service
export const ORDER_SERVICE_BASE = HOSTNAME + '/orders'
export const ORDER_SERVICE_CREATE_ORDER = ORDER_SERVICE_BASE + '/new'