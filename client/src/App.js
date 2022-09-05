import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AiOutlineSetting } from 'react-icons/ai';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { Navbar, Footer, Sidebar, ThemeSettings } from './components';
import { Dashboard, Login } from './pages';
import './App.css';
import { useStateContext } from './contexts/ContextProvider';

const App = () => {
  const { setCurrentColor, setCurrentMode, currentMode, activeMenu, currentColor, themeSettings, setThemeSettings, user } = useStateContext();

  useEffect(() => {
    const currentThemeColor = localStorage.getItem('colorMode');
    const currentThemeMode = localStorage.getItem('themeMode');
    if (currentThemeColor && currentThemeMode) {
      setCurrentColor(currentThemeColor);
      setCurrentMode(currentThemeMode);
    }
  }, []);

  return (
    <>
      {
        user === null ?

          <div className={currentMode === 'Dark' ? 'dark' : ''}>
            <div className="flex relative dark:bg-main-dark-bg">
              <div className="fixed right-4 bottom-4" style={{ zIndex: '1000' }}>
                <TooltipComponent
                  content="Settings"
                  position="Top"
                >
                  <button
                    type="button"
                    onClick={() => setThemeSettings(true)}
                    style={{ background: currentColor, borderRadius: '50%' }}
                    className="text-3xl text-white p-3 hover:drop-shadow-xl hover:bg-light-gray"
                  >
                    <AiOutlineSetting />
                  </button>

                </TooltipComponent>
              </div>
              <div
                className={
                  activeMenu
                    ? 'dark:bg-main-dark-bg  bg-main-bg main-dash-area min-h-screen w-full  '
                    : 'bg-main-bg dark:bg-main-dark-bg main-dash-area  w-full min-h-screen flex-2 '
                }
              >
                {themeSettings && (<ThemeSettings />)}
                <Login />
              </div>
            </div>
          </div>
          :
          <div className={currentMode === 'Dark' ? 'dark' : ''}>
            <BrowserRouter>
              <div className="flex relative dark:bg-main-dark-bg">
                <div className="fixed right-4 bottom-4" style={{ zIndex: '1000' }}>
                  <TooltipComponent
                    content="Settings"
                    position="Top"
                  >
                    <button
                      type="button"
                      onClick={() => setThemeSettings(true)}
                      style={{ background: currentColor, borderRadius: '50%' }}
                      className="text-3xl text-white p-3 hover:drop-shadow-xl hover:bg-light-gray"
                    >
                      <AiOutlineSetting />
                    </button>

                  </TooltipComponent>
                </div>
                {activeMenu ? (
                  <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white ">
                    <Sidebar />
                  </div>
                ) : (
                  <div className="w-0 sidebarWzero dark:bg-secondary-dark-bg">
                    <Sidebar />
                  </div>
                )}
                <div
                  className={
                    activeMenu
                      ? 'dark:bg-main-dark-bg  bg-main-bg main-dash-area min-h-screen md:ml-72 w-full  '
                      : 'bg-main-bg dark:bg-main-dark-bg main-dash-area  w-full min-h-screen flex-2 '
                  }
                >
                  <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full ">
                    <Navbar />
                  </div>
                  <div>
                    {themeSettings && (<ThemeSettings />)}

                    <Routes>
                      {/* dashboard  */}
                      <Route path="/" element={(<Dashboard />)} />
                      <Route path="/dashboard" element={(<Dashboard />)} />
                    </Routes>
                  </div>
                  <Footer />
                </div>
              </div>
            </BrowserRouter>
          </div>
      }
    </>
  );
};

export default App;
