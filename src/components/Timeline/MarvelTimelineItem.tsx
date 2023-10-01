import React from "react";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineContent from "@mui/lab/TimelineContent";
import Typography from "@mui/material/Typography";
import {Icon} from "@mui/material";
import {MediaType} from "./MediaType";
import SeriesIcon from "../Icons/Logo_Serie.png";
import MovieIcon from "../Icons/Logo_Film.png";
import OneShotIconSchwarz from '../Icons/Logo_OneShot_schwarz.png';
import OneShotIcon from '../Icons/Logo_OneShot.png';
import AltRouteIcon from '@mui/icons-material/AltRoute';

interface MarvelTimelineItemProps {
    year: string;
    title: string;
    episode: string;
    mediaType: MediaType;
    isAlternateTimeline: Boolean;
}
function MarvelTimelineItem(props: MarvelTimelineItemProps) {
    const { year } = props;
    const { title } = props;
    const { episode } = props;
    const { mediaType } = props;
    const { isAlternateTimeline } = props;

    let icon: string;
    let color: any;

    switch (mediaType) {
        case MediaType.Movie:
            icon = MovieIcon;
            color = "warning";
            break;
        case MediaType.Series:
            icon = SeriesIcon;
            color = "primary";
            break;
        case MediaType.OneShot:
            icon = OneShotIconSchwarz;

            if (episode == "") {
                icon = OneShotIcon
            }

            color = "secondary";
            break;
    }

    let nhkEpisodeText = "";
    let variant : any = "outlined"
    if (episode != "") {
        nhkEpisodeText = `NHK Folge ${episode}`
        variant = "filled"
    }
    let alternativeTimelineText;
    if (isAlternateTimeline){
        alternativeTimelineText = <AltRouteIcon fontSize="small"></AltRouteIcon>
    }

    return (
        <TimelineItem>
            <TimelineOppositeContent sx={{m: 'auto 0', fontWeight: 'bold'}} align="right" variant="h6" color="text.primary">
                {year} {alternativeTimelineText}
            </TimelineOppositeContent>
            <TimelineSeparator>
                <TimelineConnector sx={{ bgcolor: 'secondary.main' }}/>
                <TimelineDot color={color} variant={variant}>
                    <Icon>
                        <img src={icon} height={25} width={25} alt={icon}/>
                    </Icon>
                </TimelineDot>
                <TimelineConnector sx={{ bgcolor: 'secondary.main' }}/>
            </TimelineSeparator>
            <TimelineContent sx={{py: '12px', px: 2}}>
                <Typography variant="h6" component="span">
                    {title}
                </Typography>
                <Typography color="secondary.main" fontWeight="bold">{nhkEpisodeText}</Typography>
            </TimelineContent>
        </TimelineItem>
    );
}

export default MarvelTimelineItem;