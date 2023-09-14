import { SetStateAction, useState } from 'react'
import './login.css'
import Button from '@mui/material/Button';
import { Avatar, Link, TextField } from '@mui/material';
import logo from './assets/logo.jpg';
import axios from 'axios';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [usernameError, setUsernameError] = useState('');

    const handleUsernameChange = (event: { target: { value: SetStateAction<string>; }; }) => {
        setUsername(event.target.value);
        setUsernameError('');
    };

    const handlePasswordChange = (event: { target: { value: SetStateAction<string>; }; }) => {
        setPassword(event.target.value);
        setPasswordError('');
    };

    const onClickSignUp = (url: string) => {
        window.location.href = url;
    }

    const onClickLogin = (url: string) => {
        console.log("logging in...");
        // Here you can handle the login logic, like sending the username and password to the server

        //validation
        let isUsernameValid = true;
        let isPasswordValid = true;

        if (username.trim() === '') {
            setUsernameError('Please fill up username');
            isUsernameValid = false;
        } else {
            setUsernameError('');
        }

        if (password.trim() === '') {
            setPasswordError('Please fill up password');
            isPasswordValid = false;
        } else {
            setPasswordError('');
        }

        if (isPasswordValid && isUsernameValid) {
            axios.post('https://purrfectpawsapi2.azurewebsites.net/api/UserLogin/Login', {
                email: username,
                password: password
            }).then((response) => {
                console.log(response,"reponse")
                const token = response.data;
                sessionStorage.setItem('token', token);
                window.location.href = url;
            }).catch((error: Error) => {
                console.log(error, "error")
            })
        }
    }

    return (
        <div className="login-container">
            <Avatar src={logo} sx={{ width: 250, height: 200 }} />
            <form>
                <div>
                    <TextField
                        id="username"
                        label="Username"
                        variant="outlined"
                        onChange={handleUsernameChange}
                        value={username}
                        required
                        error={usernameError !== ''}
                        helperText={usernameError}
                    />
                </div>
                <br />
                <div>
                    <TextField
                        id="password"
                        label="Password"
                        type="password"
                        value={password}
                        onChange={handlePasswordChange}
                        required
                        error={passwordError !== ''}
                        helperText={passwordError}
                    />
                </div>
                <br />
                <Button variant="contained" onClick={() => onClickLogin('/home')}>Login</Button>
                <br />
                <Link href="#" onClick={() => onClickSignUp('/signup')}>{"Don't have an account? Sign Up"}</Link>
            </form>
        </div>
    );
};

export default Login
