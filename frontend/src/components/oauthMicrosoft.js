import React, { Component } from 'react';

import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { microsoftLogin } from '../actions/authActions';
import { withRouter } from "react-router-dom";

class OauthMicrosoft extends Component {
    state = {
        msg: null
    };

    static propTypes = {
        isAuthenticated: PropTypes.bool,
        linkedinLogin: PropTypes.func.isRequired
    }

    componentDidMount() {

        const code = (window.location.href.match(/code=([^&]*)/i) || [])[1];
        const state = (window.location.href.match(/state=([^&]*)/i) || [])[1];
        console.log("code: %s /n state: %s", code, state);
        console.log(code !== undefined);
        if (code !== undefined) { this.props.microsoftLogin({ code, state }); }
        this.props.history.push("/dashboard");
    }

    render() {
        return (
            <div className="microsoft-page">Microsoft Page</div>
        );
    }

}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
});

export default withRouter(connect(mapStateToProps, { microsoftLogin })(OauthMicrosoft));