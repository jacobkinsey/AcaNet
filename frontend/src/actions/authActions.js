import axios from 'axios';
import { returnErrors } from './errorActions';
import {
    USER_LOADED,
    USER_LOADING,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT_SUCCESS,
    REGISTER_SUCCESS,
    REGISTER_FAIL
} from "./types";

// Check token & load user
export const loadUser = () => (dispatch, getState) => {
  // User loading
  dispatch ({ type: USER_LOADING });

    axios.get('http://localhost:4001/auth', tokenConfig(getState))
    .then(res => dispatch({
        type: USER_LOADED,
        payload: res.data
    }))
    .catch(err => {
        dispatch(returnErrors(err.response.data, err.response.status));
        dispatch({
            type: AUTH_ERROR
        });
    });
};

// Linedin oath

export const linkedinLogin = ({ code, state }) => dispatch => {
    //Headers
    console.log("this is a test of linkedin")
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    // Request body
    const body = JSON.stringify({ code, state });

    axios.post('http://localhost:4001/auth/linkedin', body, config)
        .then(res => dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data
        }))
        .catch(err => {
            dispatch(returnErrors(err.response.data, err.response.status, 'LOGIN_FAIL'));
            dispatch({
                type: LOGIN_FAIL
            });
        });
};

// Microsoft oath

export const microsoftLogin = ({ code, state }) => dispatch => {
    //Headers
    console.log("logintest")
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    console.log("this is a test");
    // Request body
    const body = JSON.stringify({ code, state });

    axios.post('http://localhost:4001/auth/microsoft', body, config)
        .then(res => dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data
        }))
        .catch(err => {
            dispatch(returnErrors(err.response.data, err.response.status, 'LOGIN_FAIL'));
            dispatch({
                type: LOGIN_FAIL
            });
        });
};

// Register User
export const register = ({ first_name, last_name, email, password, password2 }) => dispatch => {
    //Headers
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    // Request body
    const body = JSON.stringify({ first_name, last_name, email, password, password2 });

    axios.post('auth/register', body, config)
        .then(res => dispatch({
            type: REGISTER_SUCCESS,
            payload: res.data
        }))
        .catch(err => {
            dispatch(returnErrors(err.response.data, err.response.status, 'REGISTER_FAIL'));
            dispatch({
                type: REGISTER_FAIL
            });
        });
};

// Login User
export const login = () => dispatch => {
    //Headers
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    // Request body

    axios.post('http://localhost:4001/auth', config)
        .then(res => dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data
        }))
        .catch(err => {
            dispatch(returnErrors(err.response.data, err.response.status, 'LOGIN_FAIL'));
            dispatch({
                type: LOGIN_FAIL
            });
        });
};

//Logout User
export const logout = (props) => (dispatch) => {

    dispatch({ type: LOGOUT_SUCCESS });
};

// Setup config/headers and token
export const tokenConfig = (getState, param) => {
    // Get token from localstorage
  const token = getState().auth.token;

  // Add to headers
    const config = {
        headers: {
            "Content-type": "application/json"
        },
      params: {

        }
  }

  // If token, add to headers
  if(token) {
      config.headers['x-auth-token'] = token;
    }

  // if params, add param
    if (param) {
        config.params = param;
    }

  return config;
}