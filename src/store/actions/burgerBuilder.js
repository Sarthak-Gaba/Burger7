import * as actionTypes from './actionTypes';
import axios from '../../axios-order';

export const addIngredient = (ingredientType) => {
    return {
        type: actionTypes.ADD_INGREDIENT,
        ingredientType: ingredientType
    }
}

export const removeIngredient = (ingredientType) => {
    return {
        type: actionTypes.REMOVE_INGREDIENT,
        ingredientType: ingredientType
    }
}

export const setIngredients = (ingredients) => {
    return {
        type: actionTypes.SET_INGREDIENTS,
        ingredients: ingredients
    }
} 

export const loadIngredientsFailed = () => {
    return {
        type: actionTypes.LOAD_INGREDIENTS_FAILED
    }
}

export const loadIngredients = () => {
    return dispatch => {
        axios.get("/ingredient.json").then(response => {
            // this.props.SetIngredients(response.data);
            dispatch(setIngredients(response.data));
        }).catch(error => {
            dispatch(loadIngredientsFailed());
        });
    }
}