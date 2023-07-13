import React from "react";
import ReactDOM from "react-dom";

import App from './src/App.jsx';

if (document.getElementById('app')) {
    ReactDOM.render(<App/>, document.getElementById('app'));
}
