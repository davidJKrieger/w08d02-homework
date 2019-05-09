import React, { Component } from 'react';

class LoginForm extends Component {
    constructor() {
        super();

        this.state = {
            username: '',
            password: '',
        }
    }
    handleSubmit = (e) => {
        e.preventDefault();

        this.props.login(this.state.username);
    }
    handleChange = (e) => {
        this.setState({ [e.currentTarget.name]: e.currentTarget.value });
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                username: <input type='text' name="username" placeholder="username" value={this.state.username} onChange={this.handleChange} />
                password: <input type='password' name="password" placeholder="password" value={this.state.password} onChange={this.handleChange} />
                <input type='submit' value="Submit" />
            </form>
        )
    }
}

export default LoginForm;