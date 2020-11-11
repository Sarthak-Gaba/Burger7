import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    tokenId: null,
    userId: null,
    error: null,
    loading: false,
    authRedirectPath: '/'
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.AUTH_START:
            return updateObject(state, { loading: true, error: null });
        case actionTypes.AUTH_SUCCESS:
            return updateObject(state, { tokenId: action.tokenId, userId: action.userId, error: null, loading: false });
        case actionTypes.AUTH_FAIL:
            return updateObject(state, { error: action.error, loading: false });
        case actionTypes.AUTH_LOGOUT:
            return updateObject(state, { tokenId: null, userId: null });
        case actionTypes.SET_AUTH_REDIRECT_PATH:
            return updateObject(state, { authRedirectPath: action.path })
        default:
            return state;
    }
}

export default reducer;