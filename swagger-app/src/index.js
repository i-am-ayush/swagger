import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));


// or "const mapboxgl = require('mapbox-gl');"
 
// import mapboxgl from 'mapbox-gl/dist/mapbox-gl';
// import 'mapbox-gl/dist/mapbox-gl.css';

// mapboxgl.accessToken = 'pk.eyJ1IjoiZGF2aWRndWFuIiwiYSI6ImNpcG50N2s4NDAwNGRmbG5jeXZtMHkxMW4ifQ.ubiXybBxhpidF83H-Zvz7Q';
// const map = new mapboxgl.Map({
//     container: 'root',
//     style: 'mapbox://styles/mapbox/streets-v10',
//     center: [121.42, 31.23],
//     zoom: 11,
//     attributionControl: false
// });

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
