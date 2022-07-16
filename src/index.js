import React from 'react';
import ReactDOM from 'react-dom';
import { SpeechProvider } from '@speechly/react-client';

import { Provider } from './context/context';
import App from './App';
import './index.css';

ReactDOM.render(
    <SpeechProvider
        appId='00973128-953a-4d68-97eb-f701d3c3cff9'
        language='en-US'
    >
        <Provider>
            <App />
        </Provider>
    </SpeechProvider>,
    document.getElementById('root')
);
