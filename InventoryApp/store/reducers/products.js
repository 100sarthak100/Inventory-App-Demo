import { FETCH_PRODUCTS } from '../../constants/actionTypes';

const reducer = (products=[], action) => {
    switch(action.type) {
        case FETCH_PRODUCTS:
            return action.payload;
        default:
                return products;
    }
}

export default reducer;