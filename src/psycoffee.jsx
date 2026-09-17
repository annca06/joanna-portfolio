import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import './styles/tokens.css';
import './styles/base.css';

import PsyCoffee from './pages/PsyCoffee.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PsyCoffee />
  </StrictMode>
);
