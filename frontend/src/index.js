import React from 'react';
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import './index.css';
import App from './App';



import * as serviceWorker from './serviceWorker';


ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

// import React, { Component } from 'react';
// import { render } from 'react-dom';
// import Map from './map';
// import Map2 from "./map";
//
// const App = props => {
//     const {places} = props;
//
//     const {
//         loadingElement,
//         containerElement,
//         mapElement,
//     } = props;
//
//     return (
//         <Map
//             googleMapURL={
//                 'https://maps.googleapis.com/maps/api/js?key=' +
//                 "AIzaSyBlHhL9EqgJx0ZFIuzc5vn2yUAe96pZhs8" +
//                 '&libraries=places'
//             }
//             markers={places}
//             loadingElement={loadingElement || <div style={{height: `100%`}}/>}
//             containerElement={containerElement || <div style={{height: "80vh"}}/>}
//             mapElement={mapElement || <div style={{height: `100%`}}/>}
//         />
//     );
// };
//
//
// const places = [
//     {latitude: 25.8103146,longitude: -80.1751609},
//     {latitude: 27.9947147,longitude: -82.5943645},
//     {latitude: 28.4813018,longitude: -81.4387899}
// ]
//
// render(<App places={places} />, document.getElementById('root'));
