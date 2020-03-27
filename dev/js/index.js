/*
* //Redux is an open-source JavaScript library for managing application state. for in a simple word a redux contains all the states or data of the component in a single object. It doesn't increase the size the file but helps in management of the components.
* // Webpack is a popular module bundling system built on top of Node. js. It can handle not only combination and minification of JavaScript and CSS files, but also other assets such as image files (spriting) through the use of plugins.
* //Module bundling is simply the process of stitching together a group of modules (and their dependencies) into a single file (or group of files) in the correct order.
* //The <Provider /> makes the Redux store available to any nested components that have been wrapped in the connect() function. Since any React component in a React Redux app can be connected, most applications will render a <Provider> at the top level, with the entire app's component tree inside of it.
* Provider makes store alvailable to all container
* */

import 'babel-polyfill';
import React from 'react';
import ReactDOM from "react-dom";
import {createStore} from "redux";
import allReducers from "./reducers/index";
import {Provider} from "react-redux";
import App from "./components/app";

const store = createStore(allReducers);
ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);
