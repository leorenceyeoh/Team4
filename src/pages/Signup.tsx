import { Avatar, Box, Button, Card, Grid, Link, TextField } from "@mui/material";
import Container from "@mui/material/Container";
import logo from '../assets/logo.jpg';
import { useState } from "react";
import { signUp } from "../service/api";
import { validateEmailPattern, validatePasswordPattern } from "../common/commonFunctions";
import SignUpSuccess from "../dialog/signUpSuccess";

export default function Signup() {

    const [showSuccessDialog, setShowSuccessDialog] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        streetAddr1: '',
        streetAddr2: '',
        poscode: '',
        state: '',
        city: ''
    })

    const [formErrors, setFormErrors] = useState({
        nameError: '',
        emailError: '',
        passwordError: '',
        streetAddr1Error: '',
        streetAddr2Error: '',
        poscodeError: '',
        stateError: '',
        cityError: ''
    })

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    }

    const handleSubmit = () => {
        event?.preventDefault()
        const errors = {
            nameError: '',
            emailError: '',
            passwordError: '',
            streetAddr1Error: '',
            streetAddr2Error: '',
            poscodeError: '',
            stateError: '',
            cityError: ''
        };
        if (formData.name.trim() === '') {
            errors.nameError = 'Name cannot be empty.'
        } else {
            errors.nameError = ''
        }

        if (formData.email.trim() === '') {
            errors.emailError = 'Email cannot be empty.'
        } else if (!validateEmailPattern(formData.email)) {
            errors.emailError = 'Invalid email format.'
        } else {
            errors.emailError = ''
        }

        if (formData.password.trim() === '') {
            errors.passwordError = 'Password cannot be empty.'
        } else if (!validatePasswordPattern(formData.password)) {
            errors.passwordError = 'Password should contain 8 characters long.'
        } else {
            errors.passwordError = ''
        }

        if (formData.streetAddr1.trim() === '') {
            errors.streetAddr1Error = 'Street address cannot be empty.'
        } else {
            errors.streetAddr1Error = ''
        }

        if (formData.streetAddr2.trim() === '') {
            errors.streetAddr2Error = 'Street address cannot be empty.'
        } else {
            errors.streetAddr2Error = ''
        }

        if (formData.poscode.trim() === '') {
            errors.poscodeError = 'Poscode cannot be empty.'
        } else {
            errors.poscodeError = ''
        }

        if (formData.city.trim() === '') {
            errors.cityError = 'City cannot be empty.'
        } else {
            errors.cityError = ''
        }

        if (formData.state.trim() === '') {
            errors.stateError = 'State cannot be empty.'
        } else {
            errors.stateError = ''
        }

        const noErrors =
            errors.nameError !== '' || errors.emailError !== '' || errors.stateError !== '' || errors.cityError !== '' || errors.passwordError !== ''
            || errors.streetAddr1Error !== '' || errors.streetAddr2Error !== '' || errors.poscodeError !== ''

        if (!noErrors) {
            console.log(formData, "form")
            signUp(formData)
                .then((response) => {
                    console.log(response, "reponse")
                    setShowSuccessDialog(true);
                }).catch((error: Error) => {
                    setFormErrors(errors);
                    console.log(error, "error")
                })
        } else {
            console.log("eror", errors)
            setFormErrors(errors);
        }
    };

    const onClickSignIn = (url: string) => {
        window.location.href = url;
    }
    console.log(showSuccessDialog, "dialog")
    return (
        <>  {showSuccessDialog && <SignUpSuccess />}
            <Container sx={{ maxWidth: 500 }}>
                <Card sx={{ maxWidth: 600 }}>
                    <Avatar src={logo} sx={{ width: 175, height: 155, ml: '220px', mt: '2px' }} />
                    <Box sx={{ display: 'inline-block' }}>
                        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mx: '8px', mb: "8px" }}>
                            <Grid container spacing={1}>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        autoComplete="given-name"
                                        name="name"
                                        required
                                        fullWidth
                                        id="name"
                                        label="Name"
                                        autoFocus
                                        size="small"
                                        onChange={handleChange}
                                        value={formData.name}
                                        error={Boolean(formErrors.nameError)}
                                        helperText={formErrors.nameError} />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        fullWidth
                                        id="email"
                                        label="Email Address"
                                        name="email"
                                        autoComplete="email"
                                        size="small"
                                        onChange={handleChange}
                                        value={formData.email}
                                        error={Boolean(formErrors.emailError)}
                                        helperText={formErrors.emailError} />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        name="password"
                                        label="Password"
                                        type="password"
                                        id="password"
                                        autoComplete="new-password"
                                        size="small"
                                        onChange={handleChange}
                                        value={formData.password}
                                        error={Boolean(formErrors.passwordError)}
                                        helperText={formErrors.passwordError} />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        autoComplete="street-addr1"
                                        name="streetAddr1"
                                        required
                                        fullWidth
                                        id="streetAddr1"
                                        label="Street Address 1"
                                        autoFocus
                                        size="small"
                                        onChange={handleChange}
                                        value={formData.streetAddr1}
                                        error={Boolean(formErrors.streetAddr1Error)}
                                        helperText={formErrors.streetAddr1Error} />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        autoComplete="street-addr2"
                                        name="streetAddr2"
                                        required
                                        fullWidth
                                        id="streetAddr2"
                                        label="Street Address 2"
                                        autoFocus
                                        size="small"
                                        onChange={handleChange}
                                        value={formData.streetAddr2}
                                        error={Boolean(formErrors.streetAddr2Error)}
                                        helperText={formErrors.streetAddr2Error} />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        autoComplete="poscode"
                                        name="poscode"
                                        required
                                        fullWidth
                                        id="poscode"
                                        label="Poscode"
                                        autoFocus
                                        size="small"
                                        onChange={handleChange}
                                        value={formData.poscode}
                                        error={Boolean(formErrors.poscodeError)}
                                        helperText={formErrors.poscodeError} />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        autoComplete="state"
                                        name="state"
                                        required
                                        fullWidth
                                        id="state"
                                        label="State"
                                        autoFocus
                                        size="small"
                                        onChange={handleChange}
                                        value={formData.state}
                                        error={Boolean(formErrors.stateError)}
                                        helperText={formErrors.stateError} />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        autoComplete="city"
                                        name="city"
                                        required
                                        fullWidth
                                        id="city"
                                        label="City"
                                        autoFocus
                                        size="small"
                                        onChange={handleChange}
                                        value={formData.city}
                                        error={Boolean(formErrors.cityError)}
                                        helperText={formErrors.cityError} />
                                </Grid>
                            </Grid>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 1, mb: 2 }}
                                size="small"
                                onClick={handleSubmit}
                            >
                                Sign Up
                            </Button>
                            <Grid item>
                                <Link href="#" variant="body2" onClick={() => onClickSignIn('/')}>
                                    Already have an account? Sign in
                                </Link>
                            </Grid>
                        </Box>
                    </Box>
                </Card>
            </Container>
        </>
    );

}