import React from 'react';
// To switch from different pages and application
import { Link } from 'react-router-dom';
// import icons
import { GiWolfHowl } from 'react-icons/gi';
// import { MdOutlineCancel } from 'react-icons/md';
// Popups syncfusion
// import { TooltipComponent } from '@syncfusion/ej2-react-popups';
// import { links } from '../data/core';
const activeMenu = true;
const Sidebar = () => (
  <div className="ml-3 h-screen md:overflow-hidden overflow-auto
    md:hover:overflow-auto pb-10"
  >
    {activeMenu && (
    <>
      <div className="flex justify-between items-center">
        <Link
          to="/"
          onClick={() => {}}
          className="items-center"
        >
          <GiWolfHowl />
          Sideba
        </Link>
      </div>
    </>
    )}
  </div>
);

export default Sidebar;
