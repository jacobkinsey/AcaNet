import React from 'react';
import { useSelector } from 'react-redux'
import NavBarVertical from '../components/NavBar/NavBarVertical';
import NavBarHorizontal from '../components/NavBar/NavBarHorizontal';

    
function Nav() {

    const { isAuthenticated } = useSelector((state => state.auth))

    return (
    <React.Fragment>
            {isAuthenticated ?
                <React.Fragment>
                    <NavBarHorizontal />
                    <NavBarVertical />
                </React.Fragment>
                : <React.Fragment />}
    </React.Fragment>
    )
}
export default Nav