import React from 'react';
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux';
import './index.css'; 
import App from './App';
import store from './store'
import registerServiceWorker from './registerServiceWorker';
import DevTools from './containers/DevTools';


ReactDOM.render(
    <Provider store={store}>
        <div>
            {/*<DevTools/> 方式Ⅰ 放开注释*/}
            <App />
        </div>
    </Provider>,
document.getElementById('root'));
registerServiceWorker();