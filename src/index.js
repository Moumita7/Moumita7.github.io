// import { ChakraProvider } from '@chakra-ui/react';
import React from 'react';
import ReactDOM from 'react-dom/client';
// import { BrowserRouter } from 'react-router-dom';
import { BrowserRouter } from "react-router-dom";
import { ThemeContextProvider } from './context/ThemeContext';

import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <BrowserRouter>
  <ThemeContextProvider>
     <App />
     </ThemeContextProvider>
  </BrowserRouter>
</React.StrictMode>
);


