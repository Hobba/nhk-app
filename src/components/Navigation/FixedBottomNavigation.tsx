import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import Paper from '@mui/material/Paper';
import Home from "../../pages/Home/Home";
import Episodes from "../../pages/Episodes/Episodes";
import AboutUs from "../../pages/AboutUs/AboutUs";
import Extras from "../../pages/Extras/Extras";
import {AutoGraph, Diversity1, Podcasts} from "@mui/icons-material";
import {createTheme, ThemeProvider} from "@mui/material";

export default function FixedBottomNavigation() {
    const [value, setValue] = React.useState(0);
    const ref = React.useRef<HTMLDivElement>(null);

    const theme = createTheme({
        palette: {
            primary: {
                main: '#ffffff',
            },
            secondary: {
                main: '#00ffff'
            }
        },
        components: {
            MuiBottomNavigationAction: {
                styleOverrides: {
                    root: {
                        color: '#ffffff',
                        '&.Mui-selected': {
                            color: '#e1ce1b',
                        },
                    },
                    label: {
                        fontFamily: 'monospace',
                        fontWeight: 600,
                        marginTop: '5px'
                    }
                },
            },
        },
    });

    const getPageComponent = (index: number) => {
        switch (index) {
            case 0:
                return <Home/>;
            case 1:
                return <AboutUs/>;
            case 2:
                return <Episodes/>;
            case 3:
                return <Extras/>;
            default:
                return null;
        }
    };

    React.useEffect(() => {
        (ref.current as HTMLDivElement).ownerDocument.body.scrollTop = 0;
    }, [value]);

    return (
        <Box sx={{pb: 7}} ref={ref}>
            <CssBaseline/>
            <ThemeProvider theme={theme}>
                <Paper
                    sx={{position: 'fixed', bottom: 0, left: 0, right: 0}}
                    elevation={3}>
                    <BottomNavigation
                        showLabels
                        value={value}
                        onChange={(event, newValue) => {
                            setValue(newValue);
                        }}
                        sx={{
                            backgroundColor: '#50139d',
                            height: 70,
                        }}>
                        <BottomNavigationAction label="Start" icon={<HomeIcon/>}/>
                        <BottomNavigationAction label="Über Uns" icon={<Diversity1/>}/>
                        <BottomNavigationAction label="Episoden" icon={<Podcasts/>}/>
                        <BottomNavigationAction label="Extras" icon={<AutoGraph/>}/>
                    </BottomNavigation>
                </Paper>
            </ThemeProvider>

            {getPageComponent(value)}
        </Box>
    );
}
