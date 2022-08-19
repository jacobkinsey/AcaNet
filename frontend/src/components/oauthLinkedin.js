import React, { Component } from 'react';

import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { linkedinLogin } from '../actions/authActions';
import { withRouter } from "react-router-dom";

class OauthLinkedin extends Component {
    state = {
        msg: null
    };

    static propTypes = {
        isAuthenticated: PropTypes.bool,
        linkedinLogin: PropTypes.func.isRequired
    }

    componentDidMount() {
        const code = (this.props.location.search.match(/code=([^&]*)/i) || [])[1];
        const state = (this.props.location.search.match(/state=([^&]*)/i) || [])[1];
        console.log("code: %s /n state: %s", code, state);
        console.log(code !== undefined);
        if (code !== undefined) { this.props.linkedinLogin({ code, state }); }
        this.props.history.push("/");
    }

    render() {
        return (
            <div></div>
        );
    }

}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
});

export default withRouter(connect(mapStateToProps, { linkedinLogin })(OauthLinkedin));