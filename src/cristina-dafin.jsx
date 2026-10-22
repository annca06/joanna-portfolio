import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import './styles/tokens.css';
import './styles/base.css';

import CristinaDafin from './pages/CristinaDafin.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CristinaDafin />
  </StrictMode>
);
