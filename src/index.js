import React from 'react';
import ReactDOM from 'react-dom';
import {MainHeading} from './components/index.js';
import '../public/styles/index.scss';

const Main = () => {
    return (
        <div className="container">
            <MainHeading />
        </div>
    )
}

ReactDOM.render(<Main /> , document.getElementById('app'));