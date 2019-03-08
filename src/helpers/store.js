import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { createLogger } from "redux-logger";
import rootReducer from "../reducer";

//###########################################################################
// logger middleware that show all the changes in the local store in console
//###########################################################################
const loggerMiddleware = createLogger();

//###########################################################################
// the store combined with middleWares.
//###########################################################################
export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, loggerMiddleware));
