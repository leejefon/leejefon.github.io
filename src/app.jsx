/*
 * app
 *
 * @author: Jeff Lee
 * @createdAt: 2017/06/09
 */

import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './pages/App';

const root = createRoot(document.getElementById('app'));
root.render(<App />);
