import { useState } from 'react'
import './login.css'
import Button from '@mui/material/Button';
import { Avatar, Link } from '@mui/material';
import logo from './assets/logo.jpg';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Here you can handle the login logic, like sending the username and password to the server
    };

    const onClickSignUp = (url:string) => {
        console.log("url")
        window.location.href = url;
    }

    const onClickLogIn = (url: string) => {
        console.log("logging in...");
        window.location.href = url;
    }

    return (
        <div className="login-container">
            <Avatar src={logo} sx={{ width: 250, height: 200 }}/>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="username">Username:</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={handleUsernameChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={handlePasswordChange}
                        required
                    />
                </div>
                <Button variant="contained" onClick={() => onClickLogIn('/home')}>Login</Button> 
                <br/>
                <Link href="#" onClick={() => onClickSignUp('/signup')}>{"Don't have an account? Sign Up"}</Link>
            </form>
        </div>
    );
};

export default Login
