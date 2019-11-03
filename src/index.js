import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './containers/App';

import { SessionProvider } from './context/sessionContext';

ReactDOM.render(
	<SessionProvider>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</SessionProvider>,
	document.getElementById('root')
);
