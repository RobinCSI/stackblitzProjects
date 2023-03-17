import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App3 from './App3';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App3 />
  </StrictMode>
);
