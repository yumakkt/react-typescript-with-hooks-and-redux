import thunk from "redux-thunk";
import logger from "redux-logger";
import { createStore, applyMiddleware, combineReducers } from "redux";
import {
  routerMiddleware,
  connectRouter,
  RouterState
} from "connected-react-router";
import { createBrowserHistory } from "history";
import { formReducer, FormState } from "./form/reducers";
import { userReducer, UserState } from "./user/reducers";

export const history = createBrowserHistory();

export interface RootState {
  form: FormState;
  user: UserState;
  router: RouterState;
}

export const store = createStore(
  combineReducers<RootState>({
    form: formReducer,
    user: userReducer,
    router: connectRouter(history)
  }),
  applyMiddleware(thunk, logger, routerMiddleware(history))
);
