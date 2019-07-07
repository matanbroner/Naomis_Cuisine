
// User Related Action Types

export const LOGIN_WATCHER = 'login_watcher'
export const LOGIN_FAILED = 'login_failed'

export const REGISTER_WATCHER = 'register_watcher'
export const REGISTER_FAILED = 'register_failed'

export const UPDATE_PROFILE = 'update_profile'
export const REMOVE_PROFILE = 'remove_profile'

// Shopping Related Action Types

export const CONTROL_CART = 'control_cart'
export const ADD_TO_CART = 'add_to_cart'
export const REMOVE_FROM_CART = 'remove_from_cart'
export const EMPTY_CART = 'empty_cart'
export const SET_ITEM_QUANTITY = 'set_item_quantity'
export const NEW_ORDER_WATCHER = 'order-watcher'
export const NEW_ORDER_FAILED = 'order_failed'

// Item Related Action Types

export const SET_ITEMS_BANK = 'set_items_bank'
export const APPEND_ITEMS_BANK = 'append_items_bank'
export const FETCH_ITEMS_WATCHER = 'fetch_items_watcher'
export const CREATE_ITEM_WATCHER = 'create_items_watcher'

// Page Related Action Types

export const RETRIEVE_CONTAINER_TEXT = 'retrieve_container_text'
export const RETRIEVE_COMPONENT_TEXT = 'retrieve_component_text'

// Application (Global) Related Action Types

export const LOADING_ON = 'loading_on'
export const LOADING_OFF = 'loading_off'
export const CHANGE_LANGUAGE = 'change_language'
export const PUSH_NOTIFICATION = 'push_notification'
export const CLEAR_NOTIFICATIONS = 'clear_notifications'
export const IS_PAGE_TOP = 'is_page_top'
export const NOT_PAGE_TOP = 'not_page_top'