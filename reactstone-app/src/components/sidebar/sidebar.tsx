import React from 'react';
import { ClassFilter, ManaFilter, QualityFilter, RacesFilter, SetFilter } from './../filter-bar';
import logo from './../../images/logo.png';

function Sidebar() {
  return (
    <div className="sidebar">
      {/* <div className="sidebar-content"> */}
        <div className="sidebar-logo">
          <img src={logo} alt="Hearthstone logo" />
        </div>
        <ClassFilter />
        <ManaFilter />
        <SetFilter />
        <RacesFilter />
        <QualityFilter />
      {/* </div> */}
    </div>
  );
}

export default Sidebar;
