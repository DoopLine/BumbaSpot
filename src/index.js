import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

import { UserProvider } from './context/userContext';
import { SessionProvider } from './context/sessionContext';

ReactDOM.render(
	<UserProvider>
		<SessionProvider>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</SessionProvider>
	</UserProvider>,
	document.getElementById('root')
);
