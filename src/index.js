import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import InputNumTable from './MultiplicationTable/InputNumTable';
import AppRandomTable from './MultiplicationTable/AppRandomTable';


import GreetingChange from './GreetingChange/GreetingChange';
import EventLog from './EventLog/EventLog';



const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    {/* <InputNumTable /> */}
    {/* <AppRandomTable /> */}
    {/* <GreetingChange /> */}
    

    <EventLog />
  </StrictMode>
);
