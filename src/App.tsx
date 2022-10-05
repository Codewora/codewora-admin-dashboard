import { useState, useEffect, useReducer } from 'react';
import './App.css';
import Dashboard from './views';
import { mode } from './theme';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { ThemeContext, themeReducer, initialState } from './globalState';

const App = () => {

  const [themeMode, setThemeMode] = useState('');
  const themeVariables = createTheme(themeMode === 'LIGHTMODE' ? mode.light : mode.dark);
  const [state, dispatch] = useReducer(themeReducer, initialState)

  useEffect(() => {
    const themeMode = localStorage.getItem('mode');
    setThemeMode(themeMode === 'LIGHTMODE' ? 'LIGHTMODE': 'DARKMODE');
    dispatch({type : themeMode === 'LIGHTMODE' ? 'LIGHTMODE': 'DARKMODE'})
  }, [state]);
  
  return (
    <ThemeContext.Provider value={{state, dispatch}}>
    <ThemeProvider theme={themeVariables}>
      <Dashboard />
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}

export default App;
