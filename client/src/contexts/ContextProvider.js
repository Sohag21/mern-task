import React, { createContext, useContext, useState, useReducer, useEffect } from 'react';
import Reducer from './Reducer';

const StateContext = createContext();

const initialState = {
  user: JSON.parse(localStorage.getItem("user")) || null,
  isFetching: false,
  err: false,
  chat: false,
  cart: false,
  userProfile: false,
  notification: false,
};
export const Context = createContext(initialState);

export const ContextProvider = ({ children }) => {
  const [screenSize, setScreenSize] = useState(undefined);
  const [currentColor, setCurrentColor] = useState('#03C9D7');
  const [currentMode, setCurrentMode] = useState('Light');
  const [themeSettings, setThemeSettings] = useState(false);
  const [activeMenu, setActiveMenu] = useState(true);
  const [isClicked, setIsClicked] = useState(initialState);
  const [contextCategory, setContextCategory] = useState({});
  const [state, dispatch] = useReducer(Reducer, initialState);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(state.user))
  }, [state.user]);

  const setMode = (e) => {
    setCurrentMode(e.target.value);
    localStorage.setItem('themeMode', e.target.value);
  };

  const setColor = (color) => {
    setCurrentColor(color);
    localStorage.setItem('colorMode', color);
  };

  const handleClick = (clicked) => setIsClicked({ ...initialState, [clicked]: true });

  return (
    <StateContext.Provider value={{ user: state.user, isFetching: state.isFetching, err: state.err, dispatch, currentColor, currentMode, activeMenu, screenSize, setScreenSize, handleClick, isClicked, initialState, contextCategory, setContextCategory, setIsClicked, setActiveMenu, setCurrentColor, setCurrentMode, setMode, setColor, themeSettings, setThemeSettings }}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
