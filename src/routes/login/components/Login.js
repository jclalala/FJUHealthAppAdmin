import React from 'react';
import {connect} from 'react-redux';
import APPCONFIG from 'constants/Config';
import TextField from 'material-ui/TextField';
import QueueAnim from 'rc-queue-anim';
import {hashHistory} from 'react-router';

import {
    login
} from '../../../actions/User';

class Login extends React.Component {
    constructor() {
        super();
        this.state = {
            brand: APPCONFIG.brand,
            username: "",
            password: "",
            error: null
        };
    }

    render() {
        return (
            <div className="body-inner">
                <div className="card bg-white">
                    <div className="card-content">

                        <section className="logo text-center">
                            <h1><a href="#/">{this.state.brand}</a></h1>
                        </section>

                        <form className="form-horizontal">
                            <fieldset>
                                <div className="form-group">
                                    <TextField
                                        onChange={(event, email) => this.setState({email})}
                                        floatingLabelText="Email"
                                        fullWidth
                                        errorText={this.state.error ? " " : null}
                                    />
                                </div>
                                <div className="form-group">
                                    <TextField
                                        onChange={(event, password) => this.setState({password})}
                                        floatingLabelText="Password"
                                        type="password"
                                        fullWidth
                                        errorText={this.state.error ? this.state.error.message : null}
                                    />
                                </div>
                            </fieldset>
                        </form>
                    </div>
                    <div className="card-action no-border text-right">
                        <a href="#/" className="color-primary" onClick={() => {
                            this.props.login({email: this.state.email, password: this.state.password}).then(() => {
                                hashHistory.push("/app/dashboard")
                            }).catch((error) => {
                                this.setState({error})
                            });
                        }}>Login</a>
                    </div>
                </div>
            </div>
        );
    }
}

const Page = (props) => (
    <div className="page-login">
        <div className="main-body">
            <QueueAnim type="bottom" className="ui-animate">
                <div key="1">
                    <Login login={props.login}/>
                </div>
            </QueueAnim>
        </div>
    </div>
);

const mapDispatchToProps = (dispatch) => {
    return {
        login: ({email, password}) => {
            return dispatch(login({email, password}));
        }
    }
}

module.exports = connect(
    null, mapDispatchToProps
)(Page);
