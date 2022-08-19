
import React, { useState } from 'react';
import './NavBarVertical.css';
import dashvec from './navImages/Dashboard-Vector.png';
import { NavLink, useLocation } from "react-router-dom";
import { Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { changeMargin } from '../../actions/stylingActions';


export const NavBarVertical = function () {

    const dispatch = useDispatch();
    let location = useLocation();
    const { isAuthenticated } = useSelector((state => state.auth))

    const [navWidth, setNavWidth] = useState('297px');
    const [navFlow, setNavFlow] = useState('visible');
    const [openStyle, setOpenStyle] = useState('none');


    const openNav = () => {

        setNavWidth("297px");
        setOpenStyle('none');
        setNavFlow("visible")

        const margins = "297px";

        console.log("margins: ", margins);

        dispatch(changeMargin(297));
    };

    const closeNav = () => {

        setNavWidth("0px");
        setOpenStyle('inline');
        setNavFlow("hidden")

        const margins = "28.688px";

        console.log("margins: ", margins);

        dispatch(changeMargin(28.688));
    };


    return (
        <Fragment>
            {isAuthenticated ?
                <Fragment>
                    <div className="side-nav" style={{ width: navWidth, overflowX: navFlow }}>
                        <a href="javascript:void(0)" className="closebtn" onClick={closeNav}>{`<`}</a>
                        <div className="nav-container">
                            <div className="site-logo">
                                <div className="logo-name"> AcaNet </div>
                            </div>
                            <div className="dividing-bar" />
                            <div className="nav-list">
                                <NavLink 
                                    to="/dashboard"
                                    className={`nav-element ${location.pathname === "/dashboard" ? "current" : ""}`}
                                >
                                    <div className="nav-contents">
                                        <img src={dashvec} alt="dashboard" className="nav-vector" style={{ height: "17", width: "20"}} />
                                        <div className="nav-link">
                                            Dashboard
                                        </div>
                                    </div>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                    <div className="openbtn" style={{ display: openStyle }} onClick={openNav}>{`>`}</div>
                </Fragment>
                :
                <Fragment />
            }
        </Fragment>
    );
}

export default NavBarVertical;