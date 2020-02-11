import React from 'react'
class register extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: 'ayush',
            password: 'ayu'
        }
    }
    submitRegisterDetails = () => {
        let userName = document.getElementById('username').value
        let Password = document.getElementById('password').value
        const { username, password } = this.state
        username === userName && password === Password ? 
        alert('login success') : alert('login failure')
        
    }

    render() {
        return (
            <div>
                <form onSubmit={this.submitRegisterDetails}>
                    <br /><span>username : </span><input type='text' id='username' />
                    <br /><span>password : </span><input type='password' id='password' />
                    <br /><input type='submit' />
                </form>
            </div>
        )
    }
}