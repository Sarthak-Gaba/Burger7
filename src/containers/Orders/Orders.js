import React, { Component } from 'react';
import { connect } from 'react-redux';

import Order from "../../components/Order/Order";
import axios from '../../axios-order';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import * as actions from '../../store/actions/index';
import Spinner from '../../components/UI/Spinner/Spinner';

class Orders extends Component {
    componentDidMount() {
        if(!this.props.token) {
            this.props.onFetchOrders(localStorage.getItem('token'));
        }
        else {
            this.props.onFetchOrders(this.props.token, this.props.userId);
        }
    }

    render() {
        let orders = <Spinner />;
        if (!this.props.loading) {
            orders = this.props.orders.map(ig => {
                return <Order
                    key={ig.id}
                    ingredient={ig.ingredient}
                    price={ig.price} />
            })
        }

        return (
            <div>
                {orders}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        orders: state.order.orders,
        loading: state.order.loading,
        token: state.auth.tokenId,
        userId: state.auth.userId
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onFetchOrders: (token, userId) => dispatch(actions.fetchOrders(token,userId))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(Orders, axios));