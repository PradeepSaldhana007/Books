const initialState = {
    cartItems: []
}

// First argument -> current state
// second argument -> action -> action and payload
export default function appReducer(state = initialState, action) {
    let lCartItems = state.cartItems;
    if (action.type === 'ADD_TO_CART') {
        let idx = lCartItems.findIndex(function (cItem) {
            return action.book._id === cItem.id
        });

        if (idx >= 0) {
            lCartItems[idx]['qty'] = lCartItems[idx]['qty'] + 1;
            lCartItems[idx]['sub_total'] = lCartItems[idx]['qty'] * lCartItems[idx]['price'];
        } else {
            let cartItem = {
                id: action.book._id,
                title: action.book.title,
                qty: 1,
                price: action.book.price,
                sub_total: action.book.price
            }
            // push cartItem
            lCartItems.push(cartItem);
        }
    } else if (action.type === 'DELELTE_FROM_CART') {
        // lCartItems = lCartItems.filter((item) => item.id !== action.book.id);


        lCartItems = state.cartItems.filter((item) => item.id !== action.book.id);
    }

    return {
        ...state,
        cartItems: lCartItems
    }


}