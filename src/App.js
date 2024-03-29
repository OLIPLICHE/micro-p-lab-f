import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

// Import Components Navbar, Footer, ThemeSettings
import { Sidebar, Navbar } from './components';
// import pages
import {
  Ecommerce, Calendar, Orders, Employees, Line, Stacked, Pyramid, Customers,
  Kanban, Area, Bar, Pie, Financial, ColorPicker, ColorMapping, Editor,
} from './pages';

import { useStateContext } from './contexts/ContextProvider';

import './App.css';

const App = () => {
  const { activeMenu } = useStateContext();

  return (
    <div>
      <BrowserRouter>
        <div className="flex relative
        dark:bg-main-dark-bg"
        >
          <div className="fixed right-4 bottom-4" style={{ zIndex: '1000' }}>
            {/* syncfusion components */}
            <TooltipComponent
              content="Settings"
              position="BottomRight"
            >
              <button
                aria-label="Settings Button"
                type="button"
                className="text-3xl p-3
              hover:drop-shadow-xl
              hover:bg-light-gray text-white"
                style={{
                  background: 'blue',
                  borderRadius: '50%',
                }}
              >
                <FiSettings />
              </button>
            </TooltipComponent>
          </div>
          {/* sidebar */}
          {activeMenu ? (
            <div className="w-72 fixed sidebar
          dark:bg-gray-900 bg-white"
            >
              <Sidebar />
            </div>
          ) : (
            <div className="w-0 dark:bg-gray-900">
              <Sidebar />
            </div>
          )}
          {/* Navigation bar */}
          <div className={`dark:bg-main-bg bg-main-bg
          min-h-screen w-full ${activeMenu
            ? 'md:ml-72' : 'flex-2'}`}
          >
            <div className="fixed md:static
           bg-main-bg dark:bg-main-dark-bg
           navbar w-full"
            >
              <Navbar />
            </div>
            {/* Routing */}
            <div>
              <Routes>
                {/* home or Dashboard */}
                <Route path="/" element={<Ecommerce />} />
                <Route path="/ecommerce" element={<Ecommerce />} />
                {/* Pages */}
                <Route path="/orders" element={<Orders />} />
                <Route path="/employees" element={<Employees />} />
                <Route path="/customers" element={<Customers />} />
                {/* Apps */}
                <Route path="/kanban" element={<Kanban />} />
                <Route path="/editor" element={<Editor />} />
                <Route path="/calendar" element={<Calendar />} />
                <Route path="/color-picker" element={<ColorPicker />} />
                {/* Chart */}
                <Route path="/line" element={<Line />} />
                <Route path="/area" element={<Area />} />
                <Route path="/bar" element={<Bar />} />
                <Route path="/pie" element={<Pie />} />
                <Route path="financial" element={<Financial />} />
                <Route path="/color-mapping" element={<ColorMapping />} />
                <Route path="/pyramid" element={<Pyramid />} />
                <Route path="/stacked" element={<Stacked />} />
              </Routes>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
