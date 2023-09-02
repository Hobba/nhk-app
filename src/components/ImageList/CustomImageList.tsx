import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import CoverEpisode67 from '../Images/cover_episode67.jpeg';
import CoverEpisode68 from '../Images/cover_episode68.jpeg';
import CoverEpisode69 from '../Images/cover_episode69.jpeg';


function srcset(image: string, width: number, height: number) {
    return {
        src: `${image}?w=${width}&h=${height}&fit=crop&auto=format`,
        srcSet: `${image}?w=${width}&h=${height}&fit=crop&auto=format&dpr=2 2x`,
    };
}

export default function CustomImageList() {
    return (
        <ImageList
            cols={1}
            sx={{
                width: '75%',
                height: '60%',
                transform: 'translateZ(0)',
            }}
        >
            {itemData.map((item) => {

                return (
                    <ImageListItem key={item.img}>
                        <a href={item.spotifyLink} target="_blank" rel="noreferrer">
                        <img
                            {...srcset(item.img, 200, 150)}
                            alt={item.title}
                            loading="lazy"
                            className="MuiImageListItem-img"
                        />
                        </a>
                        <ImageListItemBar
                            sx={{
                                background:
                                    'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
                                    'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
                            }}
                            title={item.title}
                            position="top"
                            actionIcon={
                                <IconButton
                                    sx={{ color: 'white' }}
                                    aria-label={`${item.title}`}
                                >
                                </IconButton>
                            }
                            actionPosition="left"
                        />
                        <ImageListItemBar
                            subtitle={<span>{item.description}</span>}
                            position="below"
                        />
                    </ImageListItem>
                );
            })}
        </ImageList>
    );
}

const itemData = [
    {
        img: CoverEpisode69,
        title: 'Episode 69',
        description: 'UnerNerd! Sexuelle Darstellungen in Videospielen',
        spotifyLink: 'https://open.spotify.com/episode/2cBsLunh7Q11J4phUDjbOl?si=a12cb864baab4a24',
    },
    {
        img: CoverEpisode68,
        title: 'Episode 68',
        description: 'ChatGPT: Da hat die KI ein Nerdchen mitzureden',
        spotifyLink: 'https://open.spotify.com/episode/018SoxHqdbDPaTpwUUBPT1?si=6058a9a79251419b',
    },
    {
        img: CoverEpisode67,
        title: 'Episode 67',
        description: 'Randall Munroe: NASA-Nerd, Sachenerklärer und Comicautor',
        spotifyLink: 'https://open.spotify.com/episode/2sb6Z9w4R9gTkmwGeRMM5G?si=d2ecdfafac864f8e',
    },
];