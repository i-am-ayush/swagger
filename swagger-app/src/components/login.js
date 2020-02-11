import React from 'react'
import './Login.scss'
class login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: 'ayush',
            password: 'ayu'
        }
    }
    submitLoginDetails = () => {
        let userName = document.getElementById('username').value
        let Password = document.getElementById('password').value
        const { username, password } = this.state
        username === userName && password === Password ? 
        alert('login success') : alert('login failure')
        
    }
    render() {
        return (
            <div>
                <form onSubmit={this.submitLoginDetails}>
                    <br /><span className="username">username : </span><input type='text' id='username' />
                    <br /><span className="password">password : </span><input type='password' id='password' />
                    <br /><input type='submit' />
                </form>
                {/* <div className="login">
                    login
                </div>
                <div className="register">
                    register
                </div> */}
                <div className="register">
                    <div className="login">

                    </div>
                    <div className="login1">

                    </div>
                </div>
                <div classname="parent">
                    ok great!!
                    <br/>
                    <h1 className="child">whats next</h1>
                </div>
                <div className="long">

                </div>

            </div>
            
        )
    }
}
export default login