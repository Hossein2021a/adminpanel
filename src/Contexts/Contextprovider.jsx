import { createContext, useContext, useState } from "react";

const stateContext = createContext();

const initialState = {
  chat: false,
  cart: false,
  userProfile: false,
  notification: false,
};

export const ContextProvider = ({ children }) => {
  const [activeMenu, setactiveMenu] = useState(true);
  const [isClicked, setisClicked] = useState(initialState);
  const [currentColor, setCurrentColor] = useState("#03C3D7");
  const [cuurentMode, setCurrentMode] = useState("Dark");
  const [themeSetting, setthemeSetting] = useState(false);
  const [scrrensize, setscrrensize] = useState(undefined);

  const handleClick = (clicked) => {
    setisClicked({ ...initialState, [clicked]: !isClicked[clicked] });
  };

  const handlecurrentmode = (e) => {
    setCurrentMode(e.target.value);
    localStorage.setItem("themeMode", e.target.value);
    setthemeSetting(false);
  };

  const setColor = (color) => {
    setCurrentColor(color);
    localStorage.setItem("themeColor", color);
    setthemeSetting(false);
  };

  return (
    <stateContext.Provider
      value={{
        activeMenu,
        setactiveMenu,
        isClicked,
        setisClicked,
        currentColor,
        setCurrentColor,
        cuurentMode,
        setCurrentMode,
        themeSetting,
        setthemeSetting,
        scrrensize,
        setscrrensize,
        handleClick
      }}>
      {children}
    </stateContext.Provider>
  );
};

export const useStateContext = () => useContext(stateContext)
