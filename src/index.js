// IMPORT THE PROVIDER COMPONENT FROM REACT-REDUX AND THE STORE
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import store from "./store";

// WRAPPING THE APP COMPONENT IN THE PROVIDER COMPONENT GIVES THE ENTIRE APPLICATION ACCESS TO WHATEVER IS IN THE STORE, BECAUSE WE PASS IN THE STORE AS A PROP TO THE PROVIDER, AND WRAP OUR PROVIDER AROUND OUR APP
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
