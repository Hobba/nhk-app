import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import MovieIcon from '../Icons/Logo_Film.png';
import SeriesIcon from '../Icons/Logo_Serie.png'
import OneShotIcon from '../Icons/Logo_OneShot_schwarz.png'
import Typography from '@mui/material/Typography';
import {Box, createTheme, Icon, Paper, ThemeProvider} from '@mui/material';
import {timelineOppositeContentClasses} from "@mui/lab";

export default function CustomizedTimeline() {

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
            text : {
                primary: '#ffffff',
            }
        },
    });

    return (
        <ThemeProvider theme={theme}>

            <Box sx={{display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 1}}>
                <Paper elevation={5} sx={{justifyContent: "center", opacity: 0.7, backgroundColor: 'black', overflow: 'auto', height: '55vh'}}>
                    <Timeline
                        sx={{
                            [`& .${timelineOppositeContentClasses.root}`]: {
                                flex: 0.2,
                            },
                        }}>
                        <TimelineItem>
                            <TimelineOppositeContent sx={{opacity: 1.0, m: 'auto 0', fontWeight: 'bold'}} align="right" variant="h6" color="text.primary">
                                1942 - 1945
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <TimelineDot color="warning">
                                    <Icon>
                                        <img src={MovieIcon} height={25} width={25} alt="MovieIcon"/>
                                    </Icon>
                                </TimelineDot>
                                <TimelineConnector sx={{ bgcolor: 'secondary.main' }}/>
                            </TimelineSeparator>
                            <TimelineContent sx={{py: '12px', px: 2, fontWeight: 'bold'}}>
                                <Typography variant="h6" component="span" color="white">
                                    Captain America: The First Avenger
                                </Typography>
                                <Typography color="secondary.main" fontWeight="bold">NHK Folge 25 & 32</Typography>
                            </TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineOppositeContent sx={{m: 'auto 0', fontWeight: 'bold'}} align="right" variant="h6" color="text.primary">
                                1944
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <TimelineConnector sx={{ bgcolor: 'secondary.main' }}/>
                                <TimelineDot color="secondary">
                                    <Icon>
                                        <img src={OneShotIcon} height={25} width={25} alt="OneShotIcon"/>
                                    </Icon>
                                </TimelineDot>
                                <TimelineConnector sx={{ bgcolor: 'secondary.main' }}/>
                            </TimelineSeparator>
                            <TimelineContent sx={{py: '12px', px: 2, fontWeight: 'bold'}}>
                                <Typography variant="h6" component="span">
                                    Agent Carter („One-Shot“)
                                </Typography>
                                <Typography color="secondary.main" fontWeight="bold">NHK Folge 32</Typography>
                            </TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineOppositeContent sx={{m: 'auto 0', fontWeight: 'bold'}} align="right" variant="h6" color="text.primary">
                                1946
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <TimelineConnector sx={{ bgcolor: 'secondary.main' }}/>
                                <TimelineDot color="primary">
                                    <Icon>
                                        <img src={SeriesIcon} height={25} width={25} alt="SeriesIcon"/>
                                    </Icon>
                                </TimelineDot>
                                <TimelineConnector sx={{ bgcolor: 'secondary.main' }}/>
                            </TimelineSeparator>
                            <TimelineContent sx={{py: '12px', px: 2, fontWeight: 'bold'}}>
                                <Typography variant="h6" component="span">
                                    Marvel’s Agent Carter (Staffel 1)
                                </Typography>
                                <Typography color="secondary.main" fontWeight="bold">NHK Folge 32</Typography>
                            </TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineOppositeContent sx={{m: 'auto 0', fontWeight: 'bold'}} align="right" variant="h6" color="text.primary">
                                1947
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <TimelineConnector sx={{ bgcolor: 'secondary.main' }}/>
                                <TimelineDot color="primary">
                                    <Icon>
                                        <img src={SeriesIcon} height={25} width={25} alt="SeriesIcon"/>
                                    </Icon>
                                </TimelineDot>
                                <TimelineConnector sx={{ bgcolor: 'secondary.main' }}/>
                            </TimelineSeparator>
                            <TimelineContent sx={{py: '12px', px: 2}}>
                                <Typography variant="h6" component="span">
                                    Marvel’s Agent Carter (Staffel 2)
                                </Typography>
                                <Typography color="secondary.main" fontWeight="bold">NHK Folge 32</Typography>
                            </TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineOppositeContent sx={{m: 'auto 0', fontWeight: 'bold'}} align="right" variant="h6" color="text.primary">
                                1995
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <TimelineConnector sx={{ bgcolor: 'secondary.main' }}/>
                                <TimelineDot color="warning">
                                    <Icon>
                                        <img src={MovieIcon} height={25} width={25} alt="MovieIcon"/>
                                    </Icon>
                                </TimelineDot>
                                <TimelineConnector sx={{ bgcolor: 'secondary.main' }}/>
                            </TimelineSeparator>
                            <TimelineContent sx={{py: '12px', px: 2}}>
                                <Typography variant="h6" component="span">
                                    Captain Marvel
                                </Typography>
                                <Typography color="secondary.main" fontWeight="bold">NHK Folge 28 & 32</Typography>
                            </TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineOppositeContent sx={{m: 'auto 0', fontWeight: 'bold'}} align="right" variant="h6" color="text.primary">
                                2010
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <TimelineConnector sx={{ bgcolor: 'secondary.main' }}/>
                                <TimelineDot color="warning">
                                    <Icon>
                                        <img src={MovieIcon} height={25} width={25} alt="MovieIcon"/>
                                    </Icon>
                                </TimelineDot>
                                <TimelineConnector sx={{ bgcolor: 'secondary.main' }}/>
                            </TimelineSeparator>
                            <TimelineContent sx={{py: '12px', px: 2}}>
                                <Typography variant="h6" component="span">
                                    Iron Man
                                </Typography>
                                <Typography color="secondary.main" fontWeight="bold">NHK Folge 32</Typography>
                            </TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineOppositeContent sx={{m: 'auto 0', fontWeight: 'bold'}} align="right" variant="h6" color="text.primary">
                                2011
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <TimelineConnector sx={{ bgcolor: 'secondary.main' }}/>
                                <TimelineDot color="warning">
                                    <Icon>
                                        <img src={MovieIcon} height={25} width={25} alt="MovieIcon"/>
                                    </Icon>
                                </TimelineDot>
                                <TimelineConnector sx={{ bgcolor: 'secondary.main' }}/>
                            </TimelineSeparator>
                            <TimelineContent sx={{py: '12px', px: 2}}>
                                <Typography variant="h6" component="span">
                                    Der unglaubliche Hulk
                                </Typography>
                                <Typography color="secondary.main" fontWeight="bold">NHK Folge 32</Typography>
                            </TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineOppositeContent sx={{m: 'auto 0', fontWeight: 'bold'}} align="right" variant="h6" color="text.primary">
                                2011
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <TimelineConnector sx={{ bgcolor: 'secondary.main' }}/>
                                <TimelineDot color="warning">
                                    <Icon>
                                        <img src={MovieIcon} height={25} width={25} alt="MovieIcon"/>
                                    </Icon>
                                </TimelineDot>
                                <TimelineConnector sx={{ bgcolor: 'secondary.main' }}/>
                            </TimelineSeparator>
                            <TimelineContent sx={{py: '12px', px: 2}}>
                                <Typography variant="h6" component="span">
                                    Iron Man 2
                                </Typography>
                                <Typography color="secondary.main" fontWeight="bold">NHK Folge 32</Typography>
                            </TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineOppositeContent sx={{m: 'auto 0', fontWeight: 'bold'}} align="right" variant="h6" color="text.primary">
                                2010
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <TimelineConnector sx={{ bgcolor: 'secondary.main' }}/>
                                <TimelineDot color="secondary">
                                    <Icon>
                                        <img src={OneShotIcon} height={25} width={25} alt="OneShotIcon"/>
                                    </Icon>
                                </TimelineDot>
                                <TimelineConnector sx={{ bgcolor: 'secondary.main' }}/>
                            </TimelineSeparator>
                            <TimelineContent sx={{py: '12px', px: 2}}>
                                <Typography variant="h6" component="span">
                                    The Consultant
                                </Typography>
                                <Typography color="secondary.main" fontWeight="bold">NHK Folge 32</Typography>
                            </TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineOppositeContent sx={{m: 'auto 0', fontWeight: 'bold'}} align="right" variant="h6" color="text.primary">
                                2011
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <TimelineConnector sx={{ bgcolor: 'secondary.main' }}/>
                                <TimelineDot color="secondary">
                                    <Icon>
                                        <img src={OneShotIcon} height={25} width={25} alt="OneShotIcon"/>
                                    </Icon>
                                </TimelineDot>
                                <TimelineConnector sx={{ bgcolor: 'secondary.main' }}/>
                            </TimelineSeparator>
                            <TimelineContent sx={{py: '12px', px: 2}}>
                                <Typography variant="h6" component="span">
                                    A Funny Thing Happened on the Way to Thor’s Hammer
                                </Typography>
                                <Typography color="secondary.main" fontWeight="bold">NHK Folge 32</Typography>
                            </TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineOppositeContent sx={{m: 'auto 0', fontWeight: 'bold'}} align="right" variant="h6" color="text.primary">
                                2011
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <TimelineConnector sx={{ bgcolor: 'secondary.main' }}/>
                                <TimelineDot color="warning">
                                    <Icon>
                                        <img src={MovieIcon} height={25} width={25} alt="MovieIcon"/>
                                    </Icon>
                                </TimelineDot>
                                <TimelineConnector sx={{ bgcolor: 'secondary.main' }}/>
                            </TimelineSeparator>
                            <TimelineContent sx={{py: '12px', px: 2}}>
                                <Typography variant="h6" component="span">
                                    Thor
                                </Typography>
                                <Typography color="secondary.main" fontWeight="bold">NHK Folge 32</Typography>
                            </TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineOppositeContent sx={{m: 'auto 0', fontWeight: 'bold'}} align="right" variant="h6" color="text.primary">
                                2012
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <TimelineConnector sx={{ bgcolor: 'secondary.main' }}/>
                                <TimelineDot color="warning">
                                    <Icon>
                                        <img src={MovieIcon} height={25} width={25} alt="MovieIcon"/>
                                    </Icon>
                                </TimelineDot>
                                <TimelineConnector/>
                            </TimelineSeparator>
                            <TimelineContent sx={{py: '12px', px: 2}}>
                                <Typography variant="h6" component="span">
                                    Marvel's The Avengers
                                </Typography>
                                <Typography color="secondary.main" fontWeight="bold">NHK Folge 32</Typography>
                            </TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineOppositeContent sx={{m: 'auto 0', fontWeight: 'bold'}} align="right" variant="h6" color="text.primary">
                                2012
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <TimelineConnector/>
                                <TimelineDot color="primary" variant="outlined">
                                    <Icon>
                                        <img src={SeriesIcon} height={25} width={25} alt="SeriesIcon"/>
                                    </Icon>
                                </TimelineDot>
                                <TimelineConnector/>
                            </TimelineSeparator>
                            <TimelineContent sx={{py: '12px', px: 2}}>
                                <Typography variant="h6" component="span">
                                    Loki
                                </Typography>
                                <Typography color="secondary.main" fontWeight="bold"></Typography>
                            </TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineOppositeContent sx={{m: 'auto 0', fontWeight: 'bold'}} align="right" variant="h6" color="text.primary">
                                2012
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <TimelineConnector/>
                                <TimelineDot color="secondary">
                                    <Icon>
                                        <img src={OneShotIcon} height={25} width={25} alt="OneShotIcon"/>
                                    </Icon>
                                </TimelineDot>
                                <TimelineConnector sx={{ bgcolor: 'secondary.main' }}/>
                            </TimelineSeparator>
                            <TimelineContent sx={{py: '12px', px: 2}}>
                                <Typography variant="h6" component="span">
                                    Item 47
                                </Typography>
                                <Typography color="secondary.main" fontWeight="bold">NHK Folge 32</Typography>
                            </TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineOppositeContent sx={{m: 'auto 0', fontWeight: 'bold'}} align="right" variant="h6" color="text.primary">
                                2012
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <TimelineConnector sx={{ bgcolor: 'secondary.main' }}/>
                                <TimelineDot color="warning">
                                    <Icon>
                                        <img src={MovieIcon} height={25} width={25} alt="MovieIcon"/>
                                    </Icon>
                                </TimelineDot>
                                <TimelineConnector sx={{ bgcolor: 'secondary.main' }}/>
                            </TimelineSeparator>
                            <TimelineContent sx={{py: '12px', px: 2}}>
                                <Typography variant="h6" component="span">
                                    Iron Man 3
                                </Typography>
                                <Typography color="secondary.main" fontWeight="bold">NHK Folge 41</Typography>
                            </TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineOppositeContent sx={{m: 'auto 0', fontWeight: 'bold'}} align="right" variant="h6" color="text.primary">
                                2013
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <TimelineConnector sx={{ bgcolor: 'secondary.main' }}/>
                                <TimelineDot color="secondary">
                                    <Icon>
                                        <img src={OneShotIcon} height={25} width={25} alt="OneShotIcon"/>
                                    </Icon>
                                </TimelineDot>
                                <TimelineConnector sx={{ bgcolor: 'secondary.main' }}/>
                            </TimelineSeparator>
                            <TimelineContent sx={{py: '12px', px: 2}}>
                                <Typography variant="h6" component="span">
                                    All Hail the King
                                </Typography>
                                <Typography color="secondary.main" fontWeight="bold">NHK Folge 41</Typography>
                            </TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineOppositeContent sx={{m: 'auto 0', fontWeight: 'bold'}} align="right" variant="h6" color="text.primary">
                                2014
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <TimelineConnector sx={{ bgcolor: 'secondary.main' }}/>
                                <TimelineDot color="primary">
                                    <Icon>
                                        <img src={SeriesIcon} height={25} width={25} alt="SeriesIcon"/>
                                    </Icon>
                                </TimelineDot>
                                <TimelineConnector sx={{ bgcolor: 'secondary.main' }}/>
                            </TimelineSeparator>
                            <TimelineContent sx={{py: '12px', px: 2}}>
                                <Typography variant="h6" component="span">
                                    Marvel’s Agents of S.H.I.E.L.D. (Staffel 1, Folgen 1-7)
                                </Typography>
                                <Typography color="secondary.main" fontWeight="bold">NHK Folge 41</Typography>
                            </TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineOppositeContent sx={{m: 'auto 0', fontWeight: 'bold'}} align="right" variant="h6" color="text.primary">
                                2014
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <TimelineConnector sx={{ bgcolor: 'secondary.main' }}/>
                                <TimelineDot color="warning">
                                    <Icon>
                                        <img src={MovieIcon} height={25} width={25} alt="MovieIcon"/>
                                    </Icon>
                                </TimelineDot>
                                <TimelineConnector sx={{ bgcolor: 'secondary.main' }}/>
                            </TimelineSeparator>
                            <TimelineContent sx={{py: '12px', px: 2}}>
                                <Typography variant="h6" component="span">
                                    Thor – The Dark Kingdom
                                </Typography>
                                <Typography color="secondary.main" fontWeight="bold">NHK Folge 41</Typography>
                            </TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineOppositeContent sx={{m: 'auto 0', fontWeight: 'bold'}} align="right" variant="h6" color="text.primary">
                                2014
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <TimelineConnector sx={{ bgcolor: 'secondary.main' }}/>
                                <TimelineDot color="primary">
                                    <Icon>
                                        <img src={SeriesIcon} height={25} width={25} alt="SeriesIcon"/>
                                    </Icon>
                                </TimelineDot>
                                <TimelineConnector sx={{ bgcolor: 'secondary.main' }}/>
                            </TimelineSeparator>
                            <TimelineContent sx={{py: '12px', px: 2}}>
                                <Typography variant="h6" component="span">
                                    Marvel’s Agents of S.H.I.E.L.D. (Staffel 1, Folgen 8-15)
                                </Typography>
                                <Typography color="secondary.main" fontWeight="bold">NHK Folge 41</Typography>
                            </TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineOppositeContent sx={{m: 'auto 0', fontWeight: 'bold'}} align="right" variant="h6" color="text.primary">
                                2014
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <TimelineConnector sx={{ bgcolor: 'secondary.main' }}/>
                                <TimelineDot color="warning">
                                    <Icon>
                                        <img src={MovieIcon} height={25} width={25} alt="MovieIcon"/>
                                    </Icon>
                                </TimelineDot>
                                <TimelineConnector sx={{ bgcolor: 'secondary.main' }}/>
                            </TimelineSeparator>
                            <TimelineContent sx={{py: '12px', px: 2}}>
                                <Typography variant="h6" component="span">
                                    The Return of the First Avenger
                                </Typography>
                                <Typography color="secondary.main" fontWeight="bold">NHK Folge 41</Typography>
                            </TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineOppositeContent sx={{m: 'auto 0', fontWeight: 'bold'}} align="right" variant="h6" color="text.primary">
                                2014
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <TimelineConnector sx={{ bgcolor: 'secondary.main' }}/>
                                <TimelineDot color="primary">
                                    <Icon>
                                        <img src={SeriesIcon} height={25} width={25} alt="SeriesIcon"/>
                                    </Icon>
                                </TimelineDot>
                                <TimelineConnector sx={{ bgcolor: 'secondary.main' }}/>
                            </TimelineSeparator>
                            <TimelineContent sx={{py: '12px', px: 2}}>
                                <Typography variant="h6" component="span">
                                    Marvel’s Agents of S.H.I.E.L.D. (Staffel 1, Folgen 16-22)
                                </Typography>
                                <Typography color="secondary.main" fontWeight="bold">NHK Folge 41</Typography>
                            </TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineOppositeContent sx={{m: 'auto 0', fontWeight: 'bold'}} align="right" variant="h6" color="text.primary">
                                2014
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <TimelineConnector sx={{ bgcolor: 'secondary.main' }}/>
                                <TimelineDot color="warning">
                                    <Icon>
                                        <img src={MovieIcon} height={25} width={25} alt="MovieIcon"/>
                                    </Icon>
                                </TimelineDot>
                                <TimelineConnector sx={{ bgcolor: 'secondary.main' }}/>
                            </TimelineSeparator>
                            <TimelineContent sx={{py: '12px', px: 2}}>
                                <Typography variant="h6" component="span">
                                    Guardians of the Galaxy
                                </Typography>
                                <Typography color="secondary.main" fontWeight="bold">NHK Folge 41</Typography>
                            </TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineOppositeContent sx={{m: 'auto 0', fontWeight: 'bold'}} align="right" variant="h6" color="text.primary">
                                2014
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <TimelineConnector sx={{ bgcolor: 'secondary.main' }}/>
                                <TimelineDot color="primary">
                                    <Icon>
                                        <img src={SeriesIcon} height={25} width={25} alt="SeriesIcon"/>
                                    </Icon>
                                </TimelineDot>
                                <TimelineConnector sx={{ bgcolor: 'secondary.main' }}/>
                            </TimelineSeparator>
                            <TimelineContent sx={{py: '12px', px: 2}}>
                                <Typography variant="h6" component="span">
                                    Marvel’s Agents of S.H.I.E.L.D. (Staffel 2, Folgen 1-19)
                                </Typography>
                                <Typography color="secondary.main" fontWeight="bold">NHK Folge 41</Typography>
                            </TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineOppositeContent sx={{m: 'auto 0', fontWeight: 'bold'}} align="right" variant="h6" color="text.primary">
                                2014
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <TimelineConnector sx={{ bgcolor: 'secondary.main' }}/>
                                <TimelineDot color="warning">
                                    <Icon>
                                        <img src={MovieIcon} height={25} width={25} alt="MovieIcon"/>
                                    </Icon>
                                </TimelineDot>
                                <TimelineConnector sx={{ bgcolor: 'secondary.main' }}/>
                            </TimelineSeparator>
                            <TimelineContent sx={{py: '12px', px: 2}}>
                                <Typography variant="h6" component="span">
                                    Guardians of the Galaxy Vol. 2
                                </Typography>
                                <Typography color="secondary.main" fontWeight="bold">NHK Folge 41</Typography>
                            </TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineOppositeContent sx={{m: 'auto 0', fontWeight: 'bold'}} align="right" variant="h6" color="text.primary">
                                2015
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <TimelineConnector sx={{ bgcolor: 'secondary.main' }}/>
                                <TimelineDot color="primary">
                                    <Icon>
                                        <img src={SeriesIcon} height={25} width={25} alt="SeriesIcon"/>
                                    </Icon>
                                </TimelineDot>
                                <TimelineConnector sx={{ bgcolor: 'secondary.main' }}/>
                            </TimelineSeparator>
                            <TimelineContent sx={{py: '12px', px: 2}}>
                                <Typography variant="h6" component="span">
                                    Marvel’s Daredevil (Staffel 1)
                                </Typography>
                                <Typography color="secondary.main" fontWeight="bold">NHK Folge 41</Typography>
                            </TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineOppositeContent sx={{m: 'auto 0', fontWeight: 'bold'}} align="right" variant="h6" color="text.primary">
                                2015
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <TimelineConnector sx={{ bgcolor: 'secondary.main' }}/>
                                <TimelineDot color="warning">
                                    <Icon>
                                        <img src={MovieIcon} height={25} width={25} alt="MovieIcon"/>
                                    </Icon>
                                </TimelineDot>
                                <TimelineConnector sx={{ bgcolor: 'secondary.main' }}/>
                            </TimelineSeparator>
                            <TimelineContent sx={{py: '12px', px: 2}}>
                                <Typography variant="h6" component="span">
                                    Avengers: Age of Ultron
                                </Typography>
                                <Typography color="secondary.main" fontWeight="bold">NHK Folge 41</Typography>
                            </TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineOppositeContent sx={{m: 'auto 0', fontWeight: 'bold'}} align="right" variant="h6" color="text.primary">
                                2015
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <TimelineConnector sx={{ bgcolor: 'secondary.main' }}/>
                                <TimelineDot color="primary">
                                    <Icon>
                                        <img src={SeriesIcon} height={25} width={25} alt="SeriesIcon"/>
                                    </Icon>
                                </TimelineDot>
                                <TimelineConnector sx={{ bgcolor: 'secondary.main' }}/>
                            </TimelineSeparator>
                            <TimelineContent sx={{py: '12px', px: 2}}>
                                <Typography variant="h6" component="span">
                                    Marvel’s Agents of S.H.I.E.L.D. (Staffel 2, Folgen 20-22)
                                </Typography>
                                <Typography color="secondary.main" fontWeight="bold">NHK Folge 51</Typography>
                            </TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineOppositeContent sx={{m: 'auto 0', fontWeight: 'bold'}} align="right" variant="h6" color="text.primary">
                                2015
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <TimelineConnector sx={{ bgcolor: 'secondary.main' }}/>
                                <TimelineDot color="warning">
                                    <Icon>
                                        <img src={MovieIcon} height={25} width={25} alt="MovieIcon"/>
                                    </Icon>
                                </TimelineDot>
                                <TimelineConnector sx={{ bgcolor: 'secondary.main' }}/>
                            </TimelineSeparator>
                            <TimelineContent sx={{py: '12px', px: 2}}>
                                <Typography variant="h6" component="span">
                                    Ant-Man
                                </Typography>
                                <Typography color="secondary.main" fontWeight="bold">NHK Folge 51</Typography>
                            </TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineOppositeContent sx={{m: 'auto 0', fontWeight: 'bold'}} align="right" variant="h6" color="text.primary">
                                2015
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <TimelineConnector sx={{ bgcolor: 'secondary.main' }}/>
                                <TimelineDot color="primary">
                                    <Icon>
                                        <img src={SeriesIcon} height={25} width={25} alt="SeriesIcon"/>
                                    </Icon>
                                </TimelineDot>
                                <TimelineConnector sx={{ bgcolor: 'secondary.main' }}/>
                            </TimelineSeparator>
                            <TimelineContent sx={{py: '12px', px: 2}}>
                                <Typography variant="h6" component="span">
                                    Marvel’s Jessica Jones (Staffel 1)
                                </Typography>
                                <Typography color="secondary.main" fontWeight="bold">NHK Folge 51</Typography>
                            </TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineOppositeContent sx={{m: 'auto 0', fontWeight: 'bold'}} align="right" variant="h6" color="text.primary">
                                2015
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <TimelineConnector sx={{ bgcolor: 'secondary.main' }}/>
                                <TimelineDot color="primary">
                                    <Icon>
                                        <img src={SeriesIcon} height={25} width={25} alt="SeriesIcon"/>
                                    </Icon>
                                </TimelineDot>
                                <TimelineConnector sx={{ bgcolor: 'secondary.main' }}/>
                            </TimelineSeparator>
                            <TimelineContent sx={{py: '12px', px: 2}}>
                                <Typography variant="h6" component="span">
                                    Marvel’s Agents of S.H.I.E.L.D. (Staffel 3, Folgen 1-10)
                                </Typography>
                                <Typography color="secondary.main" fontWeight="bold">NHK Folge 51</Typography>
                            </TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineOppositeContent sx={{m: 'auto 0', fontWeight: 'bold'}} align="right" variant="h6" color="text.primary">
                                2015
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <TimelineConnector sx={{ bgcolor: 'secondary.main' }}/>
                                <TimelineDot color="primary">
                                    <Icon>
                                        <img src={SeriesIcon} height={25} width={25} alt="SeriesIcon"/>
                                    </Icon>
                                </TimelineDot>
                                <TimelineConnector sx={{ bgcolor: 'secondary.main' }}/>
                            </TimelineSeparator>
                            <TimelineContent sx={{py: '12px', px: 2}}>
                                <Typography variant="h6" component="span">
                                    Marvel’s Daredevil (Staffel 2)
                                </Typography>
                                <Typography color="secondary.main" fontWeight="bold">NHK Folge 51</Typography>
                            </TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineOppositeContent sx={{m: 'auto 0', fontWeight: 'bold'}} align="right" variant="h6" color="text.primary">
                                2015
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <TimelineConnector sx={{ bgcolor: 'secondary.main' }}/>
                                <TimelineDot color="primary">
                                    <Icon>
                                        <img src={SeriesIcon} height={25} width={25} alt="SeriesIcon"/>
                                    </Icon>
                                </TimelineDot>
                                <TimelineConnector sx={{ bgcolor: 'secondary.main' }}/>
                            </TimelineSeparator>
                            <TimelineContent sx={{py: '12px', px: 2}}>
                                <Typography variant="h6" component="span">
                                    Marvel’s Luke Cage (Staffel 1)
                                </Typography>
                                <Typography color="secondary.main" fontWeight="bold">NHK Folge 51</Typography>
                            </TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineOppositeContent sx={{m: 'auto 0', fontWeight: 'bold'}} align="right" variant="h6" color="text.primary">
                                2016
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <TimelineConnector sx={{ bgcolor: 'secondary.main' }}/>
                                <TimelineDot color="primary">
                                    <Icon>
                                        <img src={SeriesIcon} height={25} width={25} alt="SeriesIcon"/>
                                    </Icon>
                                </TimelineDot>
                                <TimelineConnector sx={{ bgcolor: 'secondary.main' }}/>
                            </TimelineSeparator>
                            <TimelineContent sx={{py: '12px', px: 2}}>
                                <Typography variant="h6" component="span">
                                    Marvel’s Agents of S.H.I.E.L.D. (Staffel 3, Folgen 11-19)
                                </Typography>
                                <Typography color="secondary.main" fontWeight="bold">NHK Folge 51</Typography>
                            </TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineOppositeContent sx={{m: 'auto 0', fontWeight: 'bold'}} align="right" variant="h6" color="text.primary">
                                2016
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <TimelineConnector sx={{ bgcolor: 'secondary.main' }}/>
                                <TimelineDot color="primary">
                                    <Icon>
                                        <img src={SeriesIcon} height={25} width={25} alt="SeriesIcon"/>
                                    </Icon>
                                </TimelineDot>
                                <TimelineConnector sx={{ bgcolor: 'secondary.main' }}/>
                            </TimelineSeparator>
                            <TimelineContent sx={{py: '12px', px: 2}}>
                                <Typography variant="h6" component="span">
                                    Marvel’s Iron Fist (Staffel 1)
                                </Typography>
                                <Typography color="secondary.main" fontWeight="bold">NHK Folge 51</Typography>
                            </TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineOppositeContent sx={{m: 'auto 0', fontWeight: 'bold'}} align="right" variant="h6" color="text.primary">
                                2016
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <TimelineConnector sx={{ bgcolor: 'secondary.main' }}/>
                                <TimelineDot color="warning">
                                    <Icon>
                                        <img src={MovieIcon} height={25} width={25} alt="MovieIcon"/>
                                    </Icon>
                                </TimelineDot>
                                <TimelineConnector sx={{ bgcolor: 'secondary.main' }}/>
                            </TimelineSeparator>
                            <TimelineContent sx={{py: '12px', px: 2}}>
                                <Typography variant="h6" component="span">
                                    The First Avenger: Civil War
                                </Typography>
                                <Typography color="secondary.main" fontWeight="bold">NHK Folge 51</Typography>
                            </TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineOppositeContent sx={{m: 'auto 0', fontWeight: 'bold'}} align="right" variant="h6" color="text.primary">
                                2016
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <TimelineConnector sx={{ bgcolor: 'secondary.main' }}/>
                                <TimelineDot color="primary">
                                    <Icon>
                                        <img src={SeriesIcon} height={25} width={25} alt="SeriesIcon"/>
                                    </Icon>
                                </TimelineDot>
                                <TimelineConnector sx={{ bgcolor: 'secondary.main' }}/>
                            </TimelineSeparator>
                            <TimelineContent sx={{py: '12px', px: 2}}>
                                <Typography variant="h6" component="span">
                                    Marvel’s Agents of S.H.I.E.L.D. (Staffel 3, Folgen 20-22)
                                </Typography>
                                <Typography color="secondary.main" fontWeight="bold">NHK Folge 51</Typography>
                            </TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineOppositeContent sx={{m: 'auto 0', fontWeight: 'bold'}} align="right" variant="h6" color="text.primary">
                                2016
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <TimelineConnector sx={{ bgcolor: 'secondary.main' }}/>
                                <TimelineDot color="primary">
                                    <Icon>
                                        <img src={SeriesIcon} height={25} width={25} alt="SeriesIcon"/>
                                    </Icon>
                                </TimelineDot>
                                <TimelineConnector sx={{ bgcolor: 'secondary.main' }}/>
                            </TimelineSeparator>
                            <TimelineContent sx={{py: '12px', px: 2}}>
                                <Typography variant="h6" component="span">
                                    Marvel’s The Defenders
                                </Typography>
                                <Typography color="secondary.main" fontWeight="bold">NHK Folge 51</Typography>
                            </TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineOppositeContent sx={{m: 'auto 0', fontWeight: 'bold'}} align="right" variant="h6" color="text.primary">
                                2016
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <TimelineConnector sx={{ bgcolor: 'secondary.main' }}/>
                                <TimelineDot color="primary">
                                    <Icon>
                                        <img src={SeriesIcon} height={25} width={25} alt="SeriesIcon"/>
                                    </Icon>
                                </TimelineDot>
                                <TimelineConnector sx={{ bgcolor: 'secondary.main' }}/>
                            </TimelineSeparator>
                            <TimelineContent sx={{py: '12px', px: 2}}>
                                <Typography variant="h6" component="span">
                                    Marvel’s Agents of S.H.I.E.L.D. (Staffel 4, Folgen 1-8)
                                </Typography>
                                <Typography color="secondary.main" fontWeight="bold">NHK Folge 51</Typography>
                            </TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineOppositeContent sx={{m: 'auto 0', fontWeight: 'bold'}} align="right" variant="h6" color="text.primary">
                                2016
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <TimelineConnector sx={{ bgcolor: 'secondary.main' }}/>
                                <TimelineDot color="warning">
                                    <Icon>
                                        <img src={MovieIcon} height={25} width={25} alt="MovieIcon"/>
                                    </Icon>
                                </TimelineDot>
                                <TimelineConnector sx={{ bgcolor: 'secondary.main' }}/>
                            </TimelineSeparator>
                            <TimelineContent sx={{py: '12px', px: 2}}>
                                <Typography variant="h6" component="span">
                                    Black Widow
                                </Typography>
                                <Typography color="secondary.main" fontWeight="bold">NHK Folge 59</Typography>
                            </TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineOppositeContent sx={{m: 'auto 0', fontWeight: 'bold'}} align="right" variant="h6" color="text.primary">
                                2016
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <TimelineConnector sx={{ bgcolor: 'secondary.main' }}/>
                                <TimelineDot color="warning">
                                    <Icon>
                                        <img src={MovieIcon} height={25} width={25} alt="MovieIcon"/>
                                    </Icon>
                                </TimelineDot>
                                <TimelineConnector sx={{ bgcolor: 'secondary.main' }}/>
                            </TimelineSeparator>
                            <TimelineContent sx={{py: '12px', px: 2}}>
                                <Typography variant="h6" component="span">
                                    Black Panther
                                </Typography>
                                <Typography color="secondary.main" fontWeight="bold">NHK Folge 59</Typography>
                            </TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineOppositeContent sx={{m: 'auto 0', fontWeight: 'bold'}} align="right" variant="h6" color="text.primary">
                                2016
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <TimelineConnector sx={{ bgcolor: 'secondary.main' }}/>
                                <TimelineDot color="warning">
                                    <Icon>
                                        <img src={MovieIcon} height={25} width={25} alt="MovieIcon"/>
                                    </Icon>
                                </TimelineDot>
                                <TimelineConnector sx={{ bgcolor: 'secondary.main' }}/>
                            </TimelineSeparator>
                            <TimelineContent sx={{py: '12px', px: 2}}>
                                <Typography variant="h6" component="span">
                                    Spider-Man: Homecoming
                                </Typography>
                                <Typography color="secondary.main" fontWeight="bold">NHK Folge 59</Typography>
                            </TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineOppositeContent sx={{m: 'auto 0', fontWeight: 'bold'}} align="right" variant="h6" color="text.primary">
                                2016
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <TimelineConnector sx={{ bgcolor: 'secondary.main' }}/>
                                <TimelineDot color="primary">
                                    <Icon>
                                        <img src={SeriesIcon} height={25} width={25} alt="SeriesIcon"/>
                                    </Icon>
                                </TimelineDot>
                                <TimelineConnector sx={{ bgcolor: 'secondary.main' }}/>
                            </TimelineSeparator>
                            <TimelineContent sx={{py: '12px', px: 2}}>
                                <Typography variant="h6" component="span">
                                    Marvel’s Agents of S.H.I.E.L.D.: Slingshot (Staffel 1, Folgen 1-6)
                                </Typography>
                                <Typography color="secondary.main" fontWeight="bold">NHK Folge 59</Typography>
                            </TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineOppositeContent sx={{m: 'auto 0', fontWeight: 'bold'}} align="right" variant="h6" color="text.primary">
                                2016
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <TimelineConnector sx={{ bgcolor: 'secondary.main' }}/>
                                <TimelineDot color="primary">
                                    <Icon>
                                        <img src={SeriesIcon} height={25} width={25} alt="SeriesIcon"/>
                                    </Icon>
                                </TimelineDot>
                                <TimelineConnector sx={{ bgcolor: 'secondary.main' }}/>
                            </TimelineSeparator>
                            <TimelineContent sx={{py: '12px', px: 2}}>
                                <Typography variant="h6" component="span">
                                    Marvel’s Agents of S.H.I.E.L.D. (Staffel 4, Folgen 9-22)
                                </Typography>
                                <Typography color="secondary.main" fontWeight="bold">NHK Folge 59</Typography>
                            </TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineOppositeContent sx={{m: 'auto 0', fontWeight: 'bold'}} align="right" variant="h6" color="text.primary">
                                2016
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <TimelineConnector sx={{ bgcolor: 'secondary.main' }}/>
                                <TimelineDot color="primary">
                                    <Icon>
                                        <img src={SeriesIcon} height={25} width={25} alt="SeriesIcon"/>
                                    </Icon>
                                </TimelineDot>
                                <TimelineConnector sx={{ bgcolor: 'secondary.main' }}/>
                            </TimelineSeparator>
                            <TimelineContent sx={{py: '12px', px: 2}}>
                                <Typography variant="h6" component="span">
                                    Marvel’s Inhumans
                                </Typography>
                                <Typography color="secondary.main" fontWeight="bold">NHK Folge 59</Typography>
                            </TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineOppositeContent sx={{m: 'auto 0', fontWeight: 'bold'}} align="right" variant="h6" color="text.primary">
                                2016
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <TimelineConnector sx={{ bgcolor: 'secondary.main' }}/>
                                <TimelineDot color="primary">
                                    <Icon>
                                        <img src={SeriesIcon} height={25} width={25} alt="SeriesIcon"/>
                                    </Icon>
                                </TimelineDot>
                                <TimelineConnector sx={{ bgcolor: 'secondary.main' }}/>
                            </TimelineSeparator>
                            <TimelineContent sx={{py: '12px', px: 2}}>
                                <Typography variant="h6" component="span">
                                    Marvel’s The Punisher (Staffel 1)
                                </Typography>
                                <Typography color="secondary.main" fontWeight="bold">NHK Folge 60</Typography>
                            </TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineOppositeContent sx={{m: 'auto 0', fontWeight: 'bold'}} align="right" variant="h6" color="text.primary">
                                2016 - 2017
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <TimelineConnector sx={{ bgcolor: 'secondary.main' }}/>
                                <TimelineDot color="warning">
                                    <Icon>
                                        <img src={MovieIcon} height={25} width={25} alt="MovieIcon"/>
                                    </Icon>
                                </TimelineDot>
                                <TimelineConnector sx={{ bgcolor: 'secondary.main' }}/>
                            </TimelineSeparator>
                            <TimelineContent sx={{py: '12px', px: 2}}>
                                <Typography variant="h6" component="span">
                                    Doctor Strange
                                </Typography>
                                <Typography color="secondary.main" fontWeight="bold">NHK Folge 60</Typography>
                            </TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineOppositeContent sx={{m: 'auto 0', fontWeight: 'bold'}} align="right" variant="h6" color="text.primary">
                                2017
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <TimelineConnector sx={{ bgcolor: 'secondary.main' }}/>
                                <TimelineDot color="primary">
                                    <Icon>
                                        <img src={SeriesIcon} height={25} width={25} alt="SeriesIcon"/>
                                    </Icon>
                                </TimelineDot>
                                <TimelineConnector sx={{ bgcolor: 'secondary.main' }}/>
                            </TimelineSeparator>
                            <TimelineContent sx={{py: '12px', px: 2}}>
                                <Typography variant="h6" component="span">
                                    Marvel’s Agents of S.H.I.E.L.D. (Staffel 5, Folgen 1-10)
                                </Typography>
                                <Typography color="secondary.main" fontWeight="bold">NHK Folge 60</Typography>
                            </TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineOppositeContent sx={{m: 'auto 0', fontWeight: 'bold'}} align="right" variant="h6" color="text.primary">
                                2017
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <TimelineConnector sx={{ bgcolor: 'secondary.main' }}/>
                                <TimelineDot color="primary">
                                    <Icon>
                                        <img src={SeriesIcon} height={25} width={25} alt="SeriesIcon"/>
                                    </Icon>
                                </TimelineDot>
                                <TimelineConnector sx={{ bgcolor: 'secondary.main' }}/>
                            </TimelineSeparator>
                            <TimelineContent sx={{py: '12px', px: 2}}>
                                <Typography variant="h6" component="span">
                                    Marvel’s Runaways (Staffel 1)
                                </Typography>
                                <Typography color="secondary.main" fontWeight="bold">NHK Folge 60</Typography>
                            </TimelineContent>
                        </TimelineItem>
                    </Timeline>
                 </Paper>
            </Box>
        </ThemeProvider>
    );
}