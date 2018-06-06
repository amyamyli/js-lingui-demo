import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import I18nLoader from './I18nLoader'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<I18nLoader><App /></I18nLoader>, document.getElementById('root'));
registerServiceWorker();
