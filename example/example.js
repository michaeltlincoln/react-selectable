import React from 'react';
import App from './App';
import { createRoot } from 'react-dom/client';
import data from './sample-data';

const containerNode = document.getElementById('app');
const root = createRoot(containerNode);
root.render(<App items={data} />);

