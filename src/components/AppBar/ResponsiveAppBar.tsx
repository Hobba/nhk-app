import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import NhkLogo from '../../logo.png'
import {createTheme, ThemeProvider} from "@mui/material";

function ResponsiveAppBar() {
    const theme = createTheme({
        palette: {
            primary: {
                main: '#50139d',
            },
            secondary: {
                main: '#00ffff'
            }
        },
        components: {
            MuiToolbar: {
                styleOverrides: {
                    root: {
                        color: '#ffffff',
                        justifyContent: 'center'
                    },
                },
            },
        },
    });

    return (
        <ThemeProvider theme={theme}>
            <AppBar position="sticky" color="primary">
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <img
                            src={NhkLogo}
                            alt="NHK Icon"
                            style={{
                                display: 'block',
                                height: '25px', // Adjust the height as needed
                                width: 'auto', // Adjust the width as needed
                                marginRight: '8px', // Add some spacing if needed
                            }}
                        />
                        <Typography
                            variant="h6"
                            noWrap
                            component="a"
                            href="/"
                            sx={{
                                mr: 2,
                                display: {xs: 'none', md: 'flex'},
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            NERDHALBKUGEL
                        </Typography>
                        <Typography
                            variant="h5"
                            noWrap
                            component="a"
                            href=""
                            sx={{
                                mr: 2,
                                display: {xs: 'flex', md: 'none'},
                                fontFamily: 'monospace',
                                fontWeight: 600,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            NERDHALBKUGEL
                        </Typography>
                    </Toolbar>
                </Container>
            </AppBar>
        </ThemeProvider>
    );
}

export default ResponsiveAppBar;
