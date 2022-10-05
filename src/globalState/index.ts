import  { createContext } from 'react';


interface IContextProps {
  state: boolean;
  dispatch: any;
}

export const initialState = false;
export const ThemeContext = createContext({} as IContextProps)

export const themeReducer = (state: any, action: any) => {
  switch (action.type) {
    case "LIGHTMODE":
      localStorage.setItem('mode', 'LIGHTMODE')
      return  false ;
    case "DARKMODE":
      localStorage.setItem('mode', 'DARKMODE') 
      return true ;
    default:
      return state;
  }
};

