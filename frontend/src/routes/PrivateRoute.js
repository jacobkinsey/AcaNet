import React from 'react';
import { Redirect, Route } from 'react-router-dom'
import { useSelector } from 'react-redux'

    
function PrivateRoute({ component: Component, ...rest }) {

    const { isAuthenticated, isLoading } = useSelector((state => state.auth))

    if (isLoading) {
        return null;
    }

    return (
        <Route
            {...rest}
            render={(props) => isAuthenticated === true
                ? <Component {...props} />
                : <Redirect to={{ pathname: '/' }} />}
        />
    )
}
export default PrivateRoute