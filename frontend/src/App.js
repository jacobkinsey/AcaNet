import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PrivateRoutes from './routes/PrivateRoutes';
import PublicRoutes from './routes/PublicRoutes';
import NavBarVertical from './components/NavBar/NavBarVertical';
import NavBarHorizontal from './components/NavBar/NavBarHorizontal';
import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/authActions';
import PrivateRoute from './routes/PrivateRoute'
import PublicRoute from './routes/PublicRoute'
import Routes from './routes/Routes'
import './App.css';

class App extends Component {
  componentDidMount(){
    store.dispatch(loadUser());
    }
    render() {
    return (
      <Provider store={store}>

      <React.Fragment>
         <Router>
            <div className="site">
                <NavBarVertical />

                <div className="rightColumn">
                    <NavBarHorizontal />
                    <Switch>
                        {PrivateRoutes.map(({ path, name, Component }, key) => (
                            <PrivateRoute
                                exact path={path}
                                name={name}
                                key={key}
                                component={Component}
                            />
                        ))}

                        {PublicRoutes.map(({ path, name, Component }, key) => (
                            <PublicRoute
                                exact path={path}
                                name={name}
                                key={key}
                                component={Component}
                            />
                        ))}

                        {Routes.map(({ path, name, Component }, key) => (
                            <Route
                                exact path={path}
                                name={name}
                                key={key}
                                component={Component}
                            />
                        ))}

                    </Switch>
                </div>
            </div>
          </Router>
      </React.Fragment>
      </Provider>


    );
  }
}

export default App;