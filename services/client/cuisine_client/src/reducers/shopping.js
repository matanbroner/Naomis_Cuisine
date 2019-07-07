import {
    CONTROL_CART,
    ADD_TO_CART,
    REMOVE_FROM_CART,
    SET_ITEM_QUANTITY,
    EMPTY_CART,
    NEW_ORDER_FAILED,
} from '../constants/ActionTypes'

const shoppingInitialState = {
    cart: {
        items: [{
            _id: '123456abcd',
            name: 'Malabi',
            coverPhoto: 'https://i.ytimg.com/vi/duq71o9h03c/maxresdefault.jpg',
            quantity: 3,
            price: 5.95
        },
        {
            _id: '123456abcde',
            name: 'Goulash',
            coverPhoto: 'https://www.recipetineats.com/wp-content/uploads/2018/01/Slow-Cooker-Beef-Pot-Roast-4-1.jpg',
            quantity: 4,
            price: 16.85
        },
        {
            _id: '123456abcdef',
            name: 'Burrito',
            coverPhoto: 'https://www.budgetbytes.com/wp-content/uploads/2018/07/Make-Ahead-Bean-and-Cheese-Burritos-front.jpg',
            quantity: 3,
            price: 5.95
        },
        {
            _id: '123456abcdefgh',
            name: 'Goulash',
            coverPhoto: 'https://www.recipetineats.com/wp-content/uploads/2018/01/Slow-Cooker-Beef-Pot-Roast-4-1.jpg',
            quantity: 4,
            price: 16.85
        }],
        isOpen: false,
        showTab: true
    },
    errors: {}
};

export default function shoppingReducer(state = shoppingInitialState, action) {
    var index
    switch (action.type) {
        case CONTROL_CART:
            return {
                ...state,
                cart: {
                    ...state.cart,
                    isOpen: !state.cart.isOpen
                }
            }
            case ADD_TO_CART:
                index =  state.cart.items.findIndex(item => item._id === action.payload._id)
                if (index === -1){
                    return {
                        ...state,
                        cart: {
                            ...state.cart,
                            items: [
                                ...state.cart.items,
                                action.payload
                            ]
                        }
                    }
                }
                else {
                    let items = [...state.cart.items]
                    items[index].quantity++
                    return {
                        ...state,
                        cart: {
                            ...state.cart,
                            items: [
                                ...items
                            ]
                        }
                    }
                }
                case REMOVE_FROM_CART:
                    return {
                        ...state,
                        cart: {
                            ...state.cart,
                            items: state.cart.items.filter(item => item._id !== action.payload)
                        }
                    }
                    case SET_ITEM_QUANTITY:
                        index = state.cart.items.findIndex(item => item._id === action.payload._id)
                        var items = [...state.cart.items]
                        if(action.payload.quantity >= 1)
                            items[index].quantity = action.payload.quantity
                        return {
                            ...state,
                            cart: {
                                ...state.cart,
                                items: items
                            }
                        }

                        case EMPTY_CART:
                            return {
                                ...state,
                                cart: {
                                    ...state.cart,
                                    items: []
                                }
                            }
                            case NEW_ORDER_FAILED:
                                return {
                                    ...state,
                                    errors: action.payload
                                }
                                default:
                                    return state;

    }
}