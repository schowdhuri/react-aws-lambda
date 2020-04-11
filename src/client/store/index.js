import { createStore, applyMiddleware, compose } from "redux";

const composeEnhancers =
  typeof window !== "undefined" &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ &&
  process.env.NODE_ENV !== "production"
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : compose;

export default function configureStore(reducer, middleware) {
  const store = createStore(
    reducer,
    {},
    composeEnhancers(applyMiddleware(...middleware))
  );
  return store;
}
