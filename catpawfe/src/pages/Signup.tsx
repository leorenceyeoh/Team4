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
        <Container sx={{ maxWidth: 500 }}>
            <Card sx={{ maxWidth: 600 }}>
                <Avatar src={logo} sx={{ width: 175, height: 155, ml: '220px', mt: '2px' }} />
                <Box sx={{ display: 'inline-block' }}>
                    <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mx: '8px', mb: "8px" }}>
                        <Grid container spacing={1}>
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
                                />
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
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                            <TextField
                                    autoComplete="pascode"
                                    name="pascode"
                                    required
                                    fullWidth
                                    id="pascode"
                                    label="Poscode"
                                    autoFocus
                                    size="small"
                                />
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
                                />
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
                                />
                            </Grid>
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 1, mb: 2 }}
                            size="small"
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