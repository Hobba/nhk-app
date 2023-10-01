import React from 'react';
import CustomizedTimeline from "../../components/Timeline/Timeline";
import AltRouteIcon from '@mui/icons-material/AltRoute';
import SeriesIcon from "../../components/Icons/Logo_Serie.png";
import MovieIcon from "../../components/Icons/Logo_Film.png"
import OneShotIcon from '../../components/Icons/Logo_OneShot.png';
import {createTheme, Icon, ThemeProvider} from "@mui/material";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";

const Extras = () => {

    const theme = createTheme({
        palette: {
            primary: {
                main: '#50139d',
            },
            secondary: {
                main: '#e1ce1b'
            },
            warning: {
                main: '#ed1d24'
            },
            info: {
                main: '#ffffff'
            },
            success: {
                main: '#3399ff'
            },
            text: {
                primary: '#ffffff',
            }
        },
    });

    return (
        <ThemeProvider theme={theme}>
            <div className="page">
                <h2 className="headline2">Marvel Cinematic Universe Timeline</h2>
                <Box sx={{
                    alignItems: "center",
                    justifyContent: "center",
                    zIndex: 1,
                    width: '95%',
                    paddingBottom: '10px'
                }}>
                    <Paper elevation={5} sx={{justifyContent: "center", opacity: 0.7, backgroundColor: 'black'}}>
                        <div className="legend">
                            <Icon>
                                <img src={MovieIcon} height={25} width={25} alt={MovieIcon}/>
                            </Icon> <span className="movie-text">Film</span>
                            <Icon>
                                <img src={SeriesIcon} height={25} width={25} alt={SeriesIcon}/>
                            </Icon> <span className="series-text">Serie</span>
                            <Icon>
                                <img src={OneShotIcon} height={25} width={25} alt={OneShotIcon}/>
                            </Icon> <span className="oneshot-text">One-Shot</span>
                            <AltRouteIcon color='info'></AltRouteIcon> <span
                            className="alt-timeline-text">Alternative Zeitlinie</span>
                        </div>
                    </Paper>
                </Box>
                <CustomizedTimeline/>
            </div>
        </ThemeProvider>
    );
};

export default Extras;