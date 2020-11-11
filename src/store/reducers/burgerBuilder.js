import * as ActionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    ingredients: null,
    totalPrice: 40,
    error: false,
    building: false
};

const INGREDIENT_PRICE = {
    cheese: 40,
    meat: 50,
    salad: 30,
    bacon: 60
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.ADD_INGREDIENT:
            const updatedIngredient = { [action.ingredientType]: state.ingredients[action.ingredientType] + 1 };
            const updatedIngredients = updateObject(state.ingredients, updatedIngredient);
            const newPrice = state.totalPrice + INGREDIENT_PRICE[action.ingredientType];
            const updatedState = {
                totalPrice: newPrice,
                ingredients: updatedIngredients,
                building: true
            }
            return updateObject(state, updatedState);
        case ActionTypes.REMOVE_INGREDIENT:
            const updatedIngredient2 = { [action.ingredientType]: state.ingredients[action.ingredientType] - 1 };
            const updatedIngredients2 = updateObject(state.ingredients, updatedIngredient2);
            const newPrice2 = state.totalPrice - INGREDIENT_PRICE[action.ingredientType];
            const updatedState2 = {
                totalPrice: newPrice2,
                ingredients: updatedIngredients2,
                building: true
            }
            return updateObject(state, updatedState2);
        case ActionTypes.SET_INGREDIENTS:
            return updateObject(state, {
                ingredients: action.ingredients,
                totalPrice: 40,
                error: false,
                building: false
            })
        case ActionTypes.LOAD_INGREDIENTS_FAILED:
            return updateObject(state, { error: true })
        default:
            return state;
    }
}

export default reducer;