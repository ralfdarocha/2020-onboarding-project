import React from 'react';
import { ClassFilter, ManaFilter, QualityFilter, RaceFilter, SetFilter } from './../filter-bar';
import logo from './../../images/logo.png';


const Sidebar: React.FC<AppProps> = ({
    classes,
    qualities,
    races,
    sets,
}: AppProps) => {
    return (
        <div className="sidebar">
            <div className="sidebar-logo">
                <img src={logo} alt="Hearthstone logo" />
            </div>
            <ClassFilter classes={classes} />
            <ManaFilter />
            <SetFilter sets={sets} />
            <RaceFilter races={races} />
            <QualityFilter qualities={qualities} />
        </div>
    );
}

export default Sidebar;
