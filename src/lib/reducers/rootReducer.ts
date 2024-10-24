import { combineReducers } from "redux";
import authReducer from "./authReducer";
import snackbarReducer from "./snackBarReducer";

export const rootReducer = combineReducers({
    auth: authReducer,
    snackbar: snackbarReducer,
});