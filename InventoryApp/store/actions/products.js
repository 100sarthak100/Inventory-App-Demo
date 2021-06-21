import { FETCH_PRODUCTS } from '../../constants/actionTypes';
import * as API from '../../API';

// action creators
export const getProducts = () => async (dispatch) => {
    try {
        console.log("ac");
        const { data } = await API.fetchProducts();
        const action = {
            type: FETCH_PRODUCTS,
            payload: data
        }
        dispatch(action);
    } catch (error) {
        console.log(error)
    }
};