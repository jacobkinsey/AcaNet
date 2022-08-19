import React from 'react';
import "./InitialScreen.css";
import { useDispatch } from 'react-redux'
import { login } from '../../actions/authActions';
import Web3 from 'web3';
import { useState } from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

export const Login = () => {

    const dispatch = useDispatch();

    const handleOnClick = () => {
        dispatch(login());
    }

    const [isConnected, setIsConnected] = useState(false);
    const [account, setAccount] = useState();

    const detectCurrentProvider = () => {
        let provider;
        if (window.ethereum) {
            provider = window.ethereum;
        } else if (window.web3) {
            provider = window.web3.currentProvider;
        } else {
            console.log("Non-ethereum browser detected. You should install Metamask");
        }
        return provider
    }

    const onConnectMetamask = async() => {
        try {
            const currentProvider = detectCurrentProvider();
            if(currentProvider) {
                await currentProvider.request({method: 'eth_requestAccounts'});
                const web3 = new Web3(currentProvider);
                const userAccount = await web3.eth.getAccounts();
                const _account = userAccount[0];
                setAccount(_account);
                let ethBalance = await web3.eth.getBalance(account);
                setIsConnected(true);
            }
        } catch(err) {
            console.log(err);
        }
    }

    const onDisconnect = () => {
        setIsConnected(false);
    }

    return (
        <React.Fragment>
            <div className="background-image">
                <div className="login-container">
                    <div className="login-innerbox">
                        <div className="welcome-container">
                            <div className="welcome-header">Welcome to AcaNet!</div>
                            <div className="welcome-subheader">Click below to login.</div>
                        </div>
                        <div style={{marginBottom: '10px'}}>
                            {!isConnected && (
                                <button
                                id="connect_button"
                                className="sso-button"
                                onClick={onConnectMetamask}
                                >
                                    Connect Wallet
                                </button>
                            )}
                            {isConnected && (
                                <div style={{color: 'white'}}>{account}</div>
                            )}
                        </div>

                        <Form>
                            <FormGroup>
                                <Label for="schoolSelect" style={{color: 'white'}}>Select your school</Label>
                                <Input type="select" name="select" id="schoolSelect">
                                    <option>University of Illinois</option>
                                    <option>University of Toranto</option>
                                </Input>
                            </FormGroup>
                        </Form>
                        
                        <button
                            onClick={handleOnClick}
                            className="sso-button">
                            Login
                        </button>
                        
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Login;