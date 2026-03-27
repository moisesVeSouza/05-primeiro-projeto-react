import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyle from './styles/global';
import AppRoutes from './routes';

const App: React.FC = () => (
    <>
        <GlobalStyle />
        <BrowserRouter>
            <AppRoutes />
        </BrowserRouter>
    </>
);

export default App;
