import {
    GET_USER,
    ADD_USER,
    DELETE_USER,
    EDIT_USER,
    USERS_LOADING,
    CLEAR_USERS
} from './types';
import axios from 'axios';
import { tokenConfig } from './authActions'
import { returnErrors } from './errorActions'

export const getUser = slug => (dispatch, getState) => {
    dispatch(setUsersLoading());
    console.log("slug: ",slug);
    axios
        .get(`https://localhost:4001/api/users/${slug}`, tokenConfig(getState))
        .then(res =>
            dispatch({
                type: GET_USER,
                payload: res.data
            }))
            .catch(err => 
                dispatch(returnErrors(err.response.data, err.response.status))
            );
};

export const addUser = (user) => (dispatch, getState) => {
    axios
        .post('https://localhost:4001/api/auth', user, tokenConfig(getState))
        .then(res =>
            dispatch({
                type: ADD_USER,
                payload: res.data
            })
        ).catch(err => 
            dispatch(returnErrors(err.response.data, err.response.status))
        );
};

export const deleteUser = slug => (dispatch, getState) => {
    axios
        .delete(`https://localhost:4001/api/users/${slug}`, tokenConfig(getState))
        .then(res =>
            dispatch({
                type: DELETE_USER,
                payload: slug
            })
        ).catch(err => 
            dispatch(returnErrors(err.response.data, err.response.status))
    );
};

export const editUser = (userInfo) => (dispatch, getState) => {
    console.log("userInfo: ",userInfo)
    axios
        .put(`https://localhost:4001/api/users`, userInfo, tokenConfig(getState))
        .then(res =>
            dispatch({
                type: EDIT_USER,
                payload: res.data
            })
        ).catch(err => 
            dispatch(returnErrors(err.response.data, err.response.status))
        );
};

export const clearUsers = () => (dispatch) => {
    dispatch({ type: CLEAR_USERS })
};

export const setUsersLoading = () => {
    return{
        type: USERS_LOADING
    }
};