import { Avatar, Box, Button, Card, Grid, Link, TextField } from "@mui/material";
import Container from "@mui/material/Container";
import logo from '../assets/logo.jpg';

export default function Signup() {

    const handleSubmit = () => {
        //event.preventDefault();
        // const data = new FormData(event.currentTarget);
        // console.log({
        //   email: data.get('email'),
        //   password: data.get('password'),
        // });
    };

    const onClickSignIn = (url: string) => {
        console.log("url")
        window.location.href = url;
    }

    return (
        <Container maxWidth="sm">
            <Card sx={{ maxWidth: 500 }}>
                <Avatar src={logo} sx={{ width: 250, height: 200, mx: '120px' }} />
                <Box sx={{ display: 'inline-block' }}>
                    <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3, mx: '15px', mb: "10px" }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    autoComplete="given-name"
                                    name="firstName"
                                    required
                                    fullWidth
                                    id="firstName"
                                    label="First Name"
                                    autoFocus
                                    size="small"
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    fullWidth
                                    id="lastName"
                                    label="Last Name"
                                    name="lastName"
                                    autoComplete="family-name"
                                    size="small"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                    size="small"
                                />
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
                                />
                            </Grid>
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
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
    );

}