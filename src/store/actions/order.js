import * as actionTypes from './actionTypes';
import axios from '../../axios-order';

export const purchaseBurgerSuccess = (id, orderData) => {
    return {
        type: actionTypes.PURCHASE_BURGER_SUCCESS,
        orderId: id,
        orderData: orderData
    };
}

export const purchaseBurgerFail = (error) => {
    return {
        type: actionTypes.PURCHASE_BURGER_FAIL,
        error: error
    };
}

export const purchaseBurgerStart = () => {
    return {
        type: actionTypes.PURCHASE_BURGER_START
    }
}

export const purchaseBurger = (orderData,history,token) => {
    return (dispatch) => {
        dispatch(purchaseBurgerStart());
        axios.post("/orders.json?auth=" + token, orderData).then(response => {
            dispatch(purchaseBurgerSuccess(response.data.name,orderData))
            history.push('/');
        }).catch(error => {
            purchaseBurgerFail(error);
        })
    };
}

export const fetchOrdersSuccess = (orders) => {
    return {
        type: actionTypes.FETCH_ORDERS_SUCCESS,
        orders: orders
    }
}

export const fetchOrdersFail = (error) => {
    return {
        type: actionTypes.FETCH_ORDERS_FAIL,
        error: error
    }
}

export const fetchOrdersStart = () => {
    return {
        type: actionTypes.FETCH_ORDERS_START
    }
}

export const  fetchOrders = (token, userId) => {
    return dispatch => {
        dispatch(fetchOrdersStart());
        console.log(userId);
        const queryParams = '?auth=' + token + '&orderBy="userId"&equalTo="' + userId + '"';
        axios.get('/orders.json' + queryParams).then(res => {
            let orders = [];
            for(let key in res.data) {
                orders.push({
                    ...res.data[key],
                    id: key
                });
            }
            dispatch(fetchOrdersSuccess(orders));
        }).catch(error => {
            dispatch(fetchOrdersFail(error));
        });
    }
}