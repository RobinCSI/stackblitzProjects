import React, { StrictMode } from 'react';
import {BrowserRouter} from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import {RecoilRoot} from 'recoil'


import App from './App';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <BrowserRouter>
      <RecoilRoot>
       <App />
      </RecoilRoot>
    </BrowserRouter>
  </StrictMode>
);
