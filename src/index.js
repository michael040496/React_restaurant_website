import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Restaurant from './Restaurant';
import 'semantic-ui-css/semantic.min.css';
import * as serviceWorker from './serviceWorker';
import MetisMenu from 'react-metismenu';
import { BrowserRouter } from 'react-router-dom';
import {
  Route,
  Link
} from 'react-router-dom'



const content=[
    {
        icon: 'icon-class-name',
        label: 'Menu',
        to: '/',
        content: [
            {
                icon: 'icon-class-name',
                label: 'Restaurants',
                content: [
                    {
                icon: 'icon-class-name',
                label: 'Restaurant',
                to: '/Restaurant',
                    },
                {
                icon: 'icon-class-name',
                label: 'App',
                to: '/App',
                    },
                ],
            },
        ],
    },
];

//<div> <Restaurant /> </div>
//ReactDOM.render(<Restaurant />, document.getElementById('root'));
ReactDOM.render(
    <BrowserRouter>
        <MetisMenu content={content} activeLinkFromLocation />
        <Route exact path="/" component={Restaurant} />
        <Route path="/Restaurant" component={Restaurant}/>
        <Route path="/App" component={App}/>
        
    </BrowserRouter>
  ,document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

