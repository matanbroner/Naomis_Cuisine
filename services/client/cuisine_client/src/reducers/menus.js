import {
    SET_MENUS_BANK,
    APPEND_MENUS_BANK,
    APPEND_SELECTED_ITEMS,
    APPEND_DAY_ITEMS,
    REORDER_DAY_ITEMS,
    REMOVE_DAY_ITEM,
    CLEAR_SELECTED_ITEMS,
    CLEAR_NEW_MENU,
    SET_MENU_SCHEDULE_DATE
} from '../constants/ActionTypes'

const menusInitialState = {
    bank: [],
    new: {
        selected_items: [],
        days: {
            m: [],
            t: [],
            w: [],
            th: [],
            f: [],
            sat: [],
            sun: []
        }
    },
    schedule: {
        menuId: null,
        date: null
    }
};

export default function menusReducer(state = menusInitialState, action) {
    switch (action.type) {

        case SET_MENUS_BANK: {
            return {
                ...state,
                bank: action.payload
            }
        }
        case APPEND_MENUS_BANK: {
            return {
                ...state,
                bank: [
                    ...state.bank,
                    action.payload
                ]
            }
        }
        case APPEND_SELECTED_ITEMS: {
            return {
                ...state,
                new: {
                    ...state.new,
                    selected_items: [
                        ...state.new.selected_items,
                        action.payload
                    ]
                }
            }
        }
        case APPEND_DAY_ITEMS: {
            return {
                ...state,
                new: {
                    ...state.new,
                    days: {
                        ...state.new.days,
                        [action.payload.day]: [
                            ...state.new.days[action.payload.day],
                            action.payload.items
                        ]
                    }
                }
            }
        }
        case REORDER_DAY_ITEMS: {
            let { source, dest, day} = action.payload
            let items = state.new.days[day]
            let temp = items[dest]
            items[dest] = items[source]
            items[source] = temp
            return {
                ...state,
                new: {
                    ...state.new,
                    days: {
                        ...state.new.days,
                        [day]: [...items]
                    }
                }
            }
        }
        case REMOVE_DAY_ITEM: {
            let { day, item } = action.payload
            let items = (state.new.days[day]).filter(i => i.id !== item.id)
            return {
                ...state,
                new: {
                    ...state.new,
                    days: {
                        ...state.new.days,
                        [day]: items
                    }
                }
            }
        }
        case CLEAR_SELECTED_ITEMS: {
            return {
                ...state,
                new: {
                    ...state.new,
                    selected_items: []
                }
            }
        }
        case CLEAR_NEW_MENU: {
            return {
                ...state,
                new: {
                    ...state.new,
                    days: {
                        m: [],
                        t: [],
                        w: [],
                        th: [],
                        f: [],
                        sat: [],
                        sun: []
                    }
                }
            }
        }
        case SET_MENU_SCHEDULE_DATE: {
            return {
                ...state,
                schedule: {
                    ...state.schedule,
                    date: action.payload.date
                }
            }
        }

        default:
            return state
    }
}