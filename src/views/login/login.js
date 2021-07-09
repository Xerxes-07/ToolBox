// file：src/components/UserLogin.js
import React from 'react';

export default class Login extends React.Component {
    construct(props) {
        // super(props),
        this.state = {
            username: '',
            password: ''
        };
    }
    render() {
        return (
                <h3>用户登录</h3>
        )
    }
}