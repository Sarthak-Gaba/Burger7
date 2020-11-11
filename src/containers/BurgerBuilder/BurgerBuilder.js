import React, { Component } from 'react';
import { connect } from 'react-redux';

import Aux from '../../hoc/Auxiliary/Auxiliary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import axios from '../../axios-order';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import * as actions from '../../store/actions/index';
import burger from '../../components/Burger/Burger';

class BurgerBuilder extends Component {
    state = {
        purchasing: false
    }

    componentDidMount() {
        this.props.SetIngredient();
    }

    isPurchasable = (ingredients) => {
        const sum = Object.keys(ingredients).map(getIn => {
            return ingredients[getIn];
        }).reduce((sum, el) => {
            return sum + el;
        }, 0)
        return sum > 0;
    }

    updatePurchasing = () => {
        if(this.props.isAuth) {
            this.setState({ purchasing: true });
        }
        else {
            this.props.AuthRedirectPath("/checkout");
            this.props.history.push("/auth");
        }
    }

    cancelPurchasing = () => {
        this.setState({ purchasing: false });
    }

    continuePurchasing = () => {
        this.props.history.push("/checkout");
    }

    render() {
        const disabledInfo = {
            ...this.props.ingredients
        };

        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0;
        }
        let burger = this.props.error ? <p>Something went wrong</p> : <Spinner />;
        let orderSummary = null;
        if (this.props.ingredients) {
            burger = (
                <Aux>
                    <Burger ingredients={this.props.ingredients} />
                    <BuildControls
                        added={(ingredientType) => this.props.AddIngredient(ingredientType)}
                        removed={(ingredientType) => this.props.RemoveIngredient(ingredientType)}
                        purchasable={this.isPurchasable(this.props.ingredients)}
                        disabled={disabledInfo}
                        price={this.props.totalPrice}
                        ordered={this.updatePurchasing}
                        isAuth = {this.props.isAuth}
                    />
                </Aux>
            );
            orderSummary = <OrderSummary
                price={this.props.totalPrice}
                purchaseCancelled={this.cancelPurchasing}
                purchaseContinued={this.continuePurchasing}
                ingredients={this.props.ingredients} />;
        }
        return (
            <Aux>
                <Modal
                    clickedBD={this.cancelPurchasing}
                    show={this.state.purchasing}>
                    {orderSummary}
                </Modal>
                {burger}
            </Aux>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        ingredients: state.burgerBuilder.ingredients,
        totalPrice: state.burgerBuilder.totalPrice,
        error: state.order.loading,
        isAuth: state.auth.tokenId !== null
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        AddIngredient: (ingredientType) => dispatch(actions.addIngredient(ingredientType)),
        RemoveIngredient: (ingredientType) => dispatch(actions.removeIngredient(ingredientType)),
        SetIngredient: () => dispatch(actions.loadIngredients()),
        AuthRedirectPath: (path) => dispatch(actions.setAuthRedirectPath(path))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(BurgerBuilder, axios));