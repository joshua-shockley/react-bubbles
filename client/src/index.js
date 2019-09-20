import React, { useState } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import {ColorProvider} from './ColorContext.js';

import {withRouter} from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';

// const AppWithRouter = withRouter(() => <App/>);

const rootElement = document.getElementById("root");
ReactDOM.render(
    // <ColorProvider>
        <Router>
            <App />
        </Router>
    //  </ColorProvider>
, rootElement);
