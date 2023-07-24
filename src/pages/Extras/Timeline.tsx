import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import MovieIcon from '../../components/Icons/Logo_Film.png';
import SeriesIcon from '../../components/Icons/Logo_Serie.png'
import OneShotIcon from '../../components/Icons/Logo_OneShot.png'
import Typography from '@mui/material/Typography';
import {Box, Card, createTheme, Icon, Paper, ThemeProvider} from '@mui/material';
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
                <Paper elevation={5} sx={{justifyContent: "center", opacity: 0.7, backgroundColor: 'black'}}>
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
                                        <img src={MovieIcon} height={25} width={25}/>
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
                                        <img src={OneShotIcon} height={25} width={25}/>
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
                                        <img src={SeriesIcon} height={25} width={25}/>
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
                                        <img src={SeriesIcon} height={25} width={25}/>
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
                                        <img src={MovieIcon} height={25} width={25}/>
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
                                        <img src={MovieIcon} height={25} width={25}/>
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
                                        <img src={MovieIcon} height={25} width={25}/>
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
                                        <img src={MovieIcon} height={25} width={25}/>
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
                                        <img src={OneShotIcon} height={25} width={25}/>
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
                                        <img src={OneShotIcon} height={25} width={25}/>
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
                                        <img src={MovieIcon} height={25} width={25}/>
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
                                        <img src={MovieIcon} height={25} width={25}/>
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
                                        <img src={SeriesIcon} height={25} width={25}/>
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
                                        <img src={OneShotIcon} height={25} width={25}/>
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
                                        <img src={MovieIcon} height={25} width={25}/>
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
                                <TimelineConnector/>
                                <TimelineDot color="secondary">
                                    <Icon>
                                        <img src={OneShotIcon} height={25} width={25}/>
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
                    </Timeline>
                 </Paper>
            </Box>
        </ThemeProvider>
    );
}