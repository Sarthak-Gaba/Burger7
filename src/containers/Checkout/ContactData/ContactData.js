import React, { Component } from 'react';
import { connect } from 'react-redux';

import Button from '../../../components/UI/Button/Button';
import classes from './ContactData.module.css';
import axios from '../../../axios-order';
import Spinner from '../../../components/UI/Spinner/Spinner';
import Input from '../../../components/UI/Input/Input';
import withErrorHandler from '../../../hoc/withErrorHandler/withErrorHandler';
import * as actions from '../../../store/actions/index';

class ContactData extends Component {
    state = {
        orderForm: {
            name: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your Name'
                },
                value: '',
                validation: {
                    required: true
                },
                isValid: false,
                touched: false
            },
            street: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Street'
                },
                value: '',
                validation: {
                    required: true
                },
                isValid: false,
                touched: false
            },
            zipCode: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'ZIP Code'
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 5,
                    maxLength: 5
                },
                isValid: false,
                touched: false
            },
            country: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Country'
                },
                value: '',
                validation: {
                    required: true
                },
                isValid: false,
                touched: false
            },
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Your E-mail'
                },
                value: '',
                validation: {
                    required: true
                },
                isValid: false,
                touched: false
            },
            deliveryMethod: {
                elementType: 'select',
                elementConfig: {
                    options: [
                        { value: 'fastest', displayValue: 'Fastest' },
                        { value: 'cheapest', displayValue: 'Cheapest' }
                    ]
                },
                validation: {},
                isValid: true,
                value: 'Fastest'
            }
        },
        isFormValid: false
    }

    orderHandler = (event) => {
        event.preventDefault();
        const formData = {}
        for (let inputType in this.state.orderForm) {
            formData[inputType] = this.state.orderForm[inputType].value;
        }
        const order = {
            ingredient: this.props.ingredients,
            price: this.props.price,
            orderData: formData,
            userId: this.props.userId
        }
        this.props.onOrderBurger(order, this.props.history, this.props.token);
    }

    checkValidity = (inputType) => {
        let isValid = true;
        let rules = inputType.validation;
        if (!rules)
            return true;
        if (rules.required) {
            isValid = isValid && (inputType.value !== '');
        }
        if (rules.minLength) {
            isValid = isValid && (inputType.value.length >= rules.minLength);
        }
        if (rules.maxLength) {
            isValid = isValid && (inputType.value.length <= rules.maxLength);
        }
        if (rules.isEmail) {
            const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
            isValid = pattern.test(inputType.value) && isValid
        }
        if (rules.isNumeric) {
            const pattern = /^\d+$/;
            isValid = pattern.test(inputType.value) && isValid
        }
        return isValid;
    }

    inputChangedHandler = (event, inputType) => {
        //Deep cloning: Changing state immutably 
        const updatedForm = {
            ...this.state.orderForm
        };
        const updatedEl = {
            ...updatedForm[inputType]
        };
        updatedEl["value"] = event.target.value;
        updatedEl.isValid = this.checkValidity(updatedEl);
        updatedEl.touched = true;
        updatedForm[inputType] = updatedEl;
        let isFormValid = true;
        for (let key in updatedForm) {
            isFormValid = isFormValid && updatedForm[key].isValid;
        }
        this.setState({ orderForm: updatedForm, isFormValid: isFormValid });
    }

    render() {
        const formArray = [];
        for (let key in this.state.orderForm) {
            formArray.push({
                id: key,
                config: this.state.orderForm[key]
            })
        }

        let form = (
            <div>
                <h4>Enter your Contact Details</h4>
                <form onSubmit={this.orderHandler}>
                    {formArray.map(formEl => {
                        return <Input
                            key={formEl.id}
                            elementType={formEl.config.elementType}
                            elementConfig={formEl.config.elementConfig}
                            value={formEl.config.value}
                            invalid={!formEl.config.isValid}
                            shouldValidate={formEl.config.validation}
                            touched={formEl.config.touched}
                            typed={(event) => this.inputChangedHandler(event, formEl.id)} />
                    })}
                    <Button btnType="Success" disabled={!this.state.isFormValid} >Order Now!</Button>
                </form>
            </div>
        );
        if(this.props.loading)
            form = <Spinner />;

        return (
            <div className={classes.ContactData}>
                {form}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        ingredients: state.burgerBuilder.ingredients,
        price: state.burgerBuilder.totalPrice,
        loading: state.order.loading,
        token: state.auth.tokenId,
        userId: state.auth.userId
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onOrderBurger: (orderData, history, token) => dispatch(actions.purchaseBurger(orderData, history, token))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(ContactData,axios));