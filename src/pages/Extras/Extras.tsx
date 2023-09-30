import React from 'react';
import CustomizedTimeline from "../../components/Timeline/Timeline";
import AltRouteIcon from '@mui/icons-material/AltRoute';
import SeriesIcon from "../../components/Icons/Logo_Serie.png";
import MovieIcon from "../../components/Icons/Logo_Film.png"
import OneShotIcon from '../../components/Icons/Logo_OneShot.png';
import {Icon} from "@mui/material";

const Extras = () => {
    return (
        <div className="page">
            <h2 className="headline2">Marvel Cinematic Universe Timeline</h2>
            <div className="legend">
                <Icon>
                    <img src={MovieIcon} height={25} width={25} alt={MovieIcon}/>
                </Icon> <span className="extra-icon">Film</span>
                <Icon>
                    <img src={SeriesIcon} height={25} width={25} alt={SeriesIcon}/>
                </Icon> <span className="extra-icon">Serie</span>
                <Icon>
                    <img src={OneShotIcon} height={25} width={25} alt={OneShotIcon}/>
                </Icon> <span className="extra-icon">One-Shot</span>
                <AltRouteIcon></AltRouteIcon> <span className="extra-icon">Alternative Timeline</span>
            </div>

            <CustomizedTimeline/>
        </div>
    );
};

export default Extras;