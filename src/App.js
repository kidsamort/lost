import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/AppRouter';
import { AuthFormContext } from './context';
import './index.module.scss';

const App = () => {
  const [authForm, setAuthForm] = useState(false);
  return (
    <BrowserRouter>
      <AuthFormContext.Provider value={{ authForm, setAuthForm }}>
        <AppRouter />
      </AuthFormContext.Provider>
    </BrowserRouter>
  );
};

export default App;
