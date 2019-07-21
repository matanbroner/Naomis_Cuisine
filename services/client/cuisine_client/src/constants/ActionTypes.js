
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
export const NEW_ITEM_WATCHER = 'new_item_watcher'

// Menu Related Action Types

export const SET_MENUS_BANK = 'set_menus_bank'
export const APPEND_MENUS_BANK = 'append_menus_bank'
export const FETCH_MENUS_WATCHER = 'fetch_menus_watcher'
export const CREATE_MENUS_WATCHER = 'create_menus_watcher'
export const APPEND_SELECTED_ITEMS = 'append_selected_items'
export const APPEND_DAY_ITEMS = 'append_day_items'
export const REORDER_DAY_ITEMS = 'reorder_day_items'
export const REMOVE_DAY_ITEM = 'remove_day_items'
export const CLEAR_SELECTED_ITEMS = 'clear_selected_items'
export const CLEAR_NEW_MENU = 'clear_new_menu'
export const SET_MENU_SCHEDULE_DATE = 'set_menu_schedule_date'
export const MENU_SCHEDULE_WATCHER = 'menu_schedule_watcher'

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