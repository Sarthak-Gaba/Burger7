import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import Input from '../../components/UI/Input/Input';
import Button from '../../components/UI/Button/Button';
import Spinner from '../../components/UI/Spinner/Spinner';
import classes from './Auth.module.css'
import * as actions from '../../store/actions/index';

class Auth extends Component {
    componentDidMount() {
        console.log(this.props.authRedirectPath);
        if (!this.props.building && this.props.authRedirectPath !== '/') {
            this.props.onAuthRedirectPath();
        }
    }

    state = {
        authForm: {
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'E-mail address'
                },
                value: '',
                validation: {
                    required: true,
                    isEmail: true
                },
                isValid: false,
                touched: false
            },
            password: {
                elementType: 'input',
                elementConfig: {
                    type: 'password',
                    placeholder: 'Password'
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 6
                },
                isValid: false,
                touched: false
            },
        },
        isSignUp: true
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
        const updatedForm = { ...this.state.authForm };
        const updatedElement = {
            ...updatedForm[inputType],
            value: event.target.value,
            isValid: this.checkValidity(updatedForm[inputType]),
            touched: true
        }
        updatedForm[inputType] = updatedElement;
        this.setState({ authForm: updatedForm })
    }

    submitHandler = (event) => {
        event.preventDefault();
        this.props.onAuth(this.state.authForm.email.value, this.state.authForm.password.value, this.state.isSignUp);
    }

    authModeHandler = () => {
        this.setState(prevState => {
            return { isSignUp: !prevState.isSignUp }
        })
    }

    render() {
        const formArray = [];
        for (let key in this.state.authForm) {
            formArray.push({
                id: key,
                config: this.state.authForm[key]
            })
        }
        let form = (
            formArray.map(formEl => {
                return <Input
                    key={formEl.id}
                    elementType={formEl.config.elementType}
                    elementConfig={formEl.config.elementConfig}
                    value={formEl.config.value}
                    invalid={!formEl.config.isValid}
                    shouldValidate={formEl.config.validation}
                    touched={formEl.config.touched}
                    typed={(event) => this.inputChangedHandler(event, formEl.id)} />
            })
        );

        let errorMessage = this.props.error;

        let authData = <Spinner />
        if (!this.props.loading) {
            authData = (
                <div>
                    {errorMessage}
                    <form onSubmit={this.submitHandler}>
                        {form}
                        <Button btnType="Success" >Submit</Button>
                    </form>
                    <Button clicked={this.authModeHandler} btnType="Danger">
                        Switch to {this.state.isSignUp ? 'Login' : 'SignUp'}
                    </Button>
                </div>
            )
        }

        let authRedirect = null;
        if (this.props.isAuth) {
            authRedirect = <Redirect to={this.props.authRedirectPath} />
        }

        return (
            <div className={classes.Auth}>
                {authRedirect}
                {authData}
            </div>
        )
    };
}

const mapStateToPros = state => {
    return {
        loading: state.auth.loading,
        error: state.auth.error,
        isAuth: state.auth.tokenId !== null,
        authRedirectPath: state.auth.authRedirectPath,
        building: state.burgerBuilder.building
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onAuth: (email, password, isSignUp) => dispatch(actions.auth(email, password, isSignUp)),
        onAuthRedirectPath: () => dispatch(actions.setAuthRedirectPath('/'))
    }
}

export default connect(mapStateToPros, mapDispatchToProps)(Auth);