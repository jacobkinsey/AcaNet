
import React from 'react';
import './NavBarHorizontal.css';
import userCircle from './navImages/user-circle.png';
import { useHistory, Route, Link } from "react-router-dom";
import { Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { logout } from '../../actions/authActions';

export const NavBarHorizontal = function (props) {

    const dispatch = useDispatch();
    const { isAuthenticated } = useSelector((state => state.auth))
    const { margin } = useSelector((state => state.style))
    let history = useHistory();

    const Breadcrumbs = () => (
        <div className="breadcrumbs">
            <div className='container'>
                <Route path='/:path' component={BreadcrumbsItem} />
            </div>
        </div>
    )

    const BreadcrumbsItem = ({ match, ...rest }) => (
        <React.Fragment>
            <div className={match.isExact ? 'breadcrumb-active' : 'breadcrumb-inactive'}>
                <Link to={match.url || ''}>
                    / {match.params.path[0].toUpperCase() + match.params.path.substring(1)}
                </Link>
            </div>
            <Route path={`${match.url}/:path`} component={BreadcrumbsItem} />
        </React.Fragment>
    )

    const handleSignOut = () => {
        dispatch(logout());
        history.push("/");
        console.log("logout");
    }


    return (
        <Fragment>
            {isAuthenticated ?
                <div id="mynav" className="top-nav" style={{ width: `calc(100% - ${margin}px)` }}>

                    <div className="site-breadcrumbs">
                        <Breadcrumbs />
                    </div>
                    <div className="top-nav-contents">

                        <div className="top-nav-navigation">
                            <div className="sign-out">
                                <img src={userCircle} alt="sign-out" className="user-circle" />
                                <div className="sign-out-btn" onClick={handleSignOut}>Sign Out</div>
                            </div>

                        </div>
                    </div>
                </div>
                :
                <Fragment />
            }
        </Fragment>
    );
}

export default NavBarHorizontal;