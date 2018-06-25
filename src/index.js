import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import SayHi from './SayHi';
import Form from './Form';
import FormRef from './FormRef';
import CssStyleTest from './CssStyleTest';
import BootstrapBtn from './BootstrapBtn';
import PropType from './PropType';
import ErrorBoundary from './ErrorBoundary';
import ErrorCounter from './ErrorCounter';

import AlarmClockControl from './AlarmClockControl';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';

const Repos = () => (
    <div>
        <h2>Repos</h2>
    </div>
)

const About = () => (
    <div>
        <h2>About</h2>
    </div>
)

const ErrorBoundaryApp = () => (
    <div>
        <ErrorBoundary>
            <ErrorCounter />
        </ErrorBoundary>
        <ErrorBoundary>
            <ErrorCounter action={"errorHandleClick"} />
        </ErrorBoundary>
    </div>
)

ReactDOM.render(
    <Router>
        <div>
            <ul>
                <li><Link to="/">App</Link></li>
                <li><Link to="/repos">Repos</Link></li>
                <li><Link to="/about">About</Link></li>
                <li>
                    <Link to={{
                        pathname: '/sayhi',
                        state: { id: '1', message: 'hello, component' }
                    }}>SayHi</Link>
                </li>
                <li><Link to="/form">Form</Link></li>
                <li><Link to="/formref">FormRef</Link></li>
                <li><Link to="/cssstyletest">CssStyleTest</Link></li>
                <li><Link to="/bootstrapbtn">BootstrapBtn</Link></li>
                <li><Link to="/proptype">PropType</Link></li>
                <li><Link to="/errorboundaryapp">ErrorBoundaryApp</Link></li>

            </ul>
            <hr />
            <Route exact path="/" component={App} />
            <Route path="/repos" component={Repos} />
            <Route path="/about" component={About} />
            <Route path="/sayhi" render={props => <SayHi name="joe" {...props} />} />
            <Route path="/form" component={Form} />
            <Route path="/formref" component={FormRef} />
            <Route path="/cssstyletest" component={CssStyleTest} />
            <Route path="/bootstrapbtn" component={BootstrapBtn} />
            <Route path="/proptype" render={props => <PropType name={"john"} age={23} gender="male" />} />
            <Route path="/errorboundaryapp" component={ErrorBoundaryApp} />

        </div>
    </Router>,
    document.getElementById('root'));
registerServiceWorker();
