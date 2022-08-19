import React from 'react';
import { Redirect, Route } from 'react-router-dom'
import { useSelector } from 'react-redux'

    
function PrivateRoute({ component: Component, ...rest }) {

    const { isAuthenticated } = useSelector((state => state.auth))

    return (
        <Route
            {...rest}
            render={(props) => isAuthenticated === false
                ? <Component {...props} />
                : <Redirect to={{ pathname: '/dashboard' }} />}
        />
    )
}
export default PrivateRoute