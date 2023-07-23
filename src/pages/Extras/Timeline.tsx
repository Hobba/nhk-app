import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import HotelIcon from '@mui/icons-material/Hotel';
import RepeatIcon from '@mui/icons-material/Repeat';
import Typography from '@mui/material/Typography';
import {Box, Paper} from '@mui/material';

export default function CustomizedTimeline() {
    return (
        <Box sx={{justifyContent: "center", flexWrap: "nowrap"}}>
            <Paper elevation={5} sx={{opacity: 0.8}}>
                <Timeline position="right">
                    <TimelineItem>
                        <TimelineOppositeContent sx={{m: 'auto 0'}} align="right" variant="h6" color="text.primary">
                            1942 - 1945
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineConnector/>
                            <TimelineDot color="primary">
                                <LaptopMacIcon/>
                            </TimelineDot>
                            <TimelineConnector/>
                        </TimelineSeparator>
                        <TimelineContent sx={{py: '12px', px: 2}}>
                            <Typography variant="h6" component="span">
                                Captain America: The First Avenger
                            </Typography>
                            <Typography>NHK Folge 25 & 32</Typography>
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineOppositeContent sx={{m: 'auto 0'}} align="right" variant="h6" color="text.primary">
                            1944
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineConnector/>
                            <TimelineDot color="primary">
                                <LaptopMacIcon/>
                            </TimelineDot>
                            <TimelineConnector/>
                        </TimelineSeparator>
                        <TimelineContent sx={{py: '12px', px: 2}}>
                            <Typography variant="h6" component="span">
                                Agent Carter („One-Shot“)
                            </Typography>
                            <Typography>NHK Folge 32</Typography>
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineOppositeContent sx={{m: 'auto 0'}} align="right" variant="h6" color="text.primary">
                            1946
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineConnector/>
                            <TimelineDot color="primary">
                                <LaptopMacIcon/>
                            </TimelineDot>
                            <TimelineConnector/>
                        </TimelineSeparator>
                        <TimelineContent sx={{py: '12px', px: 2}}>
                            <Typography variant="h6" component="span">
                                Marvel’s Agent Carter (Staffel 1)
                            </Typography>
                            <Typography>NHK Folge 32</Typography>
                        </TimelineContent>
                    </TimelineItem>
                </Timeline>
            </Paper>
        </Box>
    );
}