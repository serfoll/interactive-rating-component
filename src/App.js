//libraries
import React from 'react';
import { createRoot } from 'react-dom/client';

//custom components
import GlobalStyle from './components/GlobalStyle';
import Layout from './components/Layout';

//DOM el
const container = document.getElementById('root');
const root = createRoot(container);

const App = () => {
  return (
    <React.Fragment>
      <GlobalStyle />
      <Layout />
    </React.Fragment>
  );
};

root.render(<App />);
