import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import {Box, createTheme, Paper, ThemeProvider} from '@mui/material';
import {timelineOppositeContentClasses} from "@mui/lab";
import MarvelTimelineItem from "./MarvelTimelineItem";
import {MediaType} from "./MediaType";

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

            <Box sx={{display: "grid", alignItems: "center", justifyContent: "center", zIndex: 1, width: '95%', overflowY: 'auto', paddingBottom: '90px'}}>
                <Paper elevation={5} sx={{justifyContent: "center", opacity: 0.7, backgroundColor: 'black'}}>
                    <Timeline
                        sx={{
                            [`& .${timelineOppositeContentClasses.root}`]: {
                                flex: 0.2,
                            },
                        }}>
                        <MarvelTimelineItem title="Marvel’s Agents of S.H.I.E.L.D. (Staffel 7, Folge 1-12)" year="1930 - 1980" mediaType={MediaType.Series} episode="" isAlternateTimeline={true}></MarvelTimelineItem>
                        <MarvelTimelineItem title="Captain America: The First Avenger" year="1942 - 1945" mediaType={MediaType.Movie} episode="25 & 32" isAlternateTimeline={false}></MarvelTimelineItem>
                        <MarvelTimelineItem title="Marvel’s What If...? (Staffel 1, Folge 1)" year="1943 - 1945" mediaType={MediaType.Series} episode="" isAlternateTimeline={true}></MarvelTimelineItem>
                        <MarvelTimelineItem title="Agent Carter („One-Shot“)" year="1944" mediaType={MediaType.OneShot} episode="32" isAlternateTimeline={false}></MarvelTimelineItem>
                        <MarvelTimelineItem title="Marvel’s Agent Carter (Staffel 1)" year="1946" mediaType={MediaType.Series} episode="32" isAlternateTimeline={false}></MarvelTimelineItem>
                        <MarvelTimelineItem title="Marvel’s Agent Carter (Staffel 2)" year="1947" mediaType={MediaType.Series} episode="32" isAlternateTimeline={false}></MarvelTimelineItem>
                        <MarvelTimelineItem title="Captain Marvel" year="1995" mediaType={MediaType.Movie} episode="28 & 32" isAlternateTimeline={false}></MarvelTimelineItem>
                        <MarvelTimelineItem title="Iron Man" year="2010" mediaType={MediaType.Movie} episode="32" isAlternateTimeline={false}></MarvelTimelineItem>
                        <MarvelTimelineItem title="Marvel’s What If...? (Staffel 1, Folge 6)" year="2010" mediaType={MediaType.Series} episode="" isAlternateTimeline={true}></MarvelTimelineItem>
                        <MarvelTimelineItem title="Der unglaubliche Hulk" year="2011" mediaType={MediaType.Movie} episode="32" isAlternateTimeline={false}></MarvelTimelineItem>
                        <MarvelTimelineItem title="Iron Man 2" year="2011" mediaType={MediaType.Movie} episode="32" isAlternateTimeline={false}></MarvelTimelineItem>
                        <MarvelTimelineItem title="The Consultant" year="2010" mediaType={MediaType.OneShot} episode="32" isAlternateTimeline={false}></MarvelTimelineItem>
                        <MarvelTimelineItem title="Marvel’s What If...? (Staffel 1, Folge 7)" year="2011" mediaType={MediaType.Series} episode="" isAlternateTimeline={true}></MarvelTimelineItem>
                        <MarvelTimelineItem title="Marvel’s What If...? (Staffel 1, Folge 3)" year="2011" mediaType={MediaType.Series} episode="" isAlternateTimeline={true}></MarvelTimelineItem>
                        <MarvelTimelineItem title="A Funny Thing Happened on the Way to Thor’s Hammer" year="2011" mediaType={MediaType.OneShot} episode="32" isAlternateTimeline={false}></MarvelTimelineItem>
                        <MarvelTimelineItem title="Thor" year="2011" mediaType={MediaType.Movie} episode="32" isAlternateTimeline={false}></MarvelTimelineItem>
                        <MarvelTimelineItem title="Marvel's The Avengers" year="2012" mediaType={MediaType.Movie} episode="32" isAlternateTimeline={false}></MarvelTimelineItem>
                        <MarvelTimelineItem title="Loki" year="2012" mediaType={MediaType.Series} episode="" isAlternateTimeline={true}></MarvelTimelineItem>
                        <MarvelTimelineItem title="Item 47" year="2012" mediaType={MediaType.OneShot} episode="32" isAlternateTimeline={false}></MarvelTimelineItem>
                        <MarvelTimelineItem title="Iron Man 3" year="2012" mediaType={MediaType.Movie} episode="41" isAlternateTimeline={false}></MarvelTimelineItem>
                        <MarvelTimelineItem title="All Hail the King" year="2013" mediaType={MediaType.OneShot} episode="41" isAlternateTimeline={false}></MarvelTimelineItem>
                        <MarvelTimelineItem title="Marvel’s Agents of S.H.I.E.L.D. (Staffel 1, Folgen 1-7)" year="2014" mediaType={MediaType.Series} episode="41" isAlternateTimeline={false}></MarvelTimelineItem>
                        <MarvelTimelineItem title="Thor – The Dark Kingdom" year="2014" mediaType={MediaType.Movie} episode="41" isAlternateTimeline={false}></MarvelTimelineItem>
                        <MarvelTimelineItem title="Marvel’s Agents of S.H.I.E.L.D. (Staffel 1, Folgen 8-15)" year="2014" mediaType={MediaType.Series} episode="41" isAlternateTimeline={false}></MarvelTimelineItem>
                        <MarvelTimelineItem title="The Return of the First Avenger" year="2014" mediaType={MediaType.Movie} episode="41" isAlternateTimeline={false}></MarvelTimelineItem>
                        <MarvelTimelineItem title="Marvel’s Agents of S.H.I.E.L.D. (Staffel 1, Folgen 16-22)" year="2014" mediaType={MediaType.Series} episode="41" isAlternateTimeline={false}></MarvelTimelineItem>
                        <MarvelTimelineItem title="Marvel’s What If...? (Staffel 1, Folge 2)" year="2014" mediaType={MediaType.Series} episode="" isAlternateTimeline={true}></MarvelTimelineItem>
                        <MarvelTimelineItem title="Guardians of the Galaxy" year="2014" mediaType={MediaType.Movie} episode="41" isAlternateTimeline={false}></MarvelTimelineItem>
                        <MarvelTimelineItem title="Ich bin Groot" year="2014" mediaType={MediaType.Series} episode="" isAlternateTimeline={false}></MarvelTimelineItem>
                        <MarvelTimelineItem title="Marvel’s Agents of S.H.I.E.L.D. (Staffel 2, Folgen 1-19)" year="2014" mediaType={MediaType.Series} episode="41" isAlternateTimeline={false}></MarvelTimelineItem>
                        <MarvelTimelineItem title="Guardians of the Galaxy Vol. 2" year="2014" mediaType={MediaType.Movie} episode="41" isAlternateTimeline={false}></MarvelTimelineItem>
                        <MarvelTimelineItem title="Marvel’s Daredevil (Staffel 1)" year="2015" mediaType={MediaType.Series} episode="41" isAlternateTimeline={false}></MarvelTimelineItem>
                        <MarvelTimelineItem title="Avengers: Age of Ultron" year="2015" mediaType={MediaType.Movie} episode="41" isAlternateTimeline={false}></MarvelTimelineItem>
                        <MarvelTimelineItem title="Marvel’s What If...? (Staffel 1, Folge 8)" year="2015" mediaType={MediaType.Series} episode="" isAlternateTimeline={true}></MarvelTimelineItem>
                        <MarvelTimelineItem title="Marvel’s Agents of S.H.I.E.L.D. (Staffel 2, Folgen 20-22)" year="2015" mediaType={MediaType.Series} episode="51" isAlternateTimeline={false}></MarvelTimelineItem>
                        <MarvelTimelineItem title="Ant-Man" year="2015" mediaType={MediaType.Movie} episode="51" isAlternateTimeline={false}></MarvelTimelineItem>
                        <MarvelTimelineItem title="Marvel’s Jessica Jones (Staffel 1)" year="2015" mediaType={MediaType.Series} episode="51" isAlternateTimeline={false}></MarvelTimelineItem>
                        <MarvelTimelineItem title="Marvel’s Agents of S.H.I.E.L.D. (Staffel 3, Folgen 1-10)" year="2015" mediaType={MediaType.Series} episode="51" isAlternateTimeline={false}></MarvelTimelineItem>
                        <MarvelTimelineItem title="Marvel’s Daredevil (Staffel 2)" year="2015" mediaType={MediaType.Series} episode="51" isAlternateTimeline={false}></MarvelTimelineItem>
                        <MarvelTimelineItem title="Marvel’s Luke Cage (Staffel 1)" year="2015" mediaType={MediaType.Series} episode="51" isAlternateTimeline={false}></MarvelTimelineItem>
                        <MarvelTimelineItem title="Marvel’s Agents of S.H.I.E.L.D. (Staffel 3, Folgen 11-19)" year="2016" mediaType={MediaType.Series} episode="51" isAlternateTimeline={false}></MarvelTimelineItem>
                        <MarvelTimelineItem title="Marvel’s Iron Fist (Staffel 1)" year="2016" mediaType={MediaType.Series} episode="51" isAlternateTimeline={false}></MarvelTimelineItem>
                        <MarvelTimelineItem title="The First Avenger: Civil War" year="2016" mediaType={MediaType.Movie} episode="51" isAlternateTimeline={false}></MarvelTimelineItem>
                        <MarvelTimelineItem title="Team Thor (Teil 1 & 2)" year="2016" mediaType={MediaType.OneShot} episode="" isAlternateTimeline={false}></MarvelTimelineItem>
                        <MarvelTimelineItem title="Marvel’s Agents of S.H.I.E.L.D. (Staffel 3, Folgen 20-22)" year="2016" mediaType={MediaType.Series} episode="51" isAlternateTimeline={false}></MarvelTimelineItem>
                        <MarvelTimelineItem title="Marvel’s The Defenders" year="2016" mediaType={MediaType.Series} episode="51" isAlternateTimeline={false}></MarvelTimelineItem>
                        <MarvelTimelineItem title="Marvel’s Agents of S.H.I.E.L.D. (Staffel 4, Folgen 1-8)" year="2016" mediaType={MediaType.Series} episode="51" isAlternateTimeline={false}></MarvelTimelineItem>
                        <MarvelTimelineItem title="Black Widow" year="2016" mediaType={MediaType.Movie} episode="59" isAlternateTimeline={false}></MarvelTimelineItem>
                        <MarvelTimelineItem title="Black Panther" year="2016" mediaType={MediaType.Movie} episode="59" isAlternateTimeline={false}></MarvelTimelineItem>
                        <MarvelTimelineItem title="Spider-Man: Homecoming" year="2016" mediaType={MediaType.Movie} episode="59" isAlternateTimeline={false}></MarvelTimelineItem>
                        <MarvelTimelineItem title="Marvel’s Agents of S.H.I.E.L.D.: Slingshot (Staffel 1, Folgen 1-6)" year="2016" mediaType={MediaType.Series} episode="59" isAlternateTimeline={false}></MarvelTimelineItem>
                        <MarvelTimelineItem title="Marvel’s Agents of S.H.I.E.L.D. (Staffel 4, Folgen 9-22)" year="2016" mediaType={MediaType.Series} episode="59" isAlternateTimeline={false}></MarvelTimelineItem>
                        <MarvelTimelineItem title="Marvel’s Inhumans" year="2016" mediaType={MediaType.Series} episode="59" isAlternateTimeline={false}></MarvelTimelineItem>
                        <MarvelTimelineItem title="Marvel’s The Punisher (Staffel 1)" year="2016" mediaType={MediaType.Series} episode="60" isAlternateTimeline={false}></MarvelTimelineItem>
                        <MarvelTimelineItem title="Doctor Strange" year="2016 - 2017" mediaType={MediaType.Movie} episode="60" isAlternateTimeline={false}></MarvelTimelineItem>
                        <MarvelTimelineItem title="Marvel’s What If...? (Staffel 1, Folge 4)" year="2017" mediaType={MediaType.Series} episode="" isAlternateTimeline={true}></MarvelTimelineItem>
                        <MarvelTimelineItem title="Marvel’s Agents of S.H.I.E.L.D. (Staffel 5, Folgen 1-10)" year="2017" mediaType={MediaType.Series} episode="60" isAlternateTimeline={false}></MarvelTimelineItem>
                        <MarvelTimelineItem title="Marvel’s Runaways (Staffel 1)" year="2017" mediaType={MediaType.Series} episode="60" isAlternateTimeline={false}></MarvelTimelineItem>
                        <MarvelTimelineItem title="Marvel’s Jessica Jones (Staffel 2)" year="2017" mediaType={MediaType.Series} episode="" isAlternateTimeline={false}></MarvelTimelineItem>
                        <MarvelTimelineItem title="Marvel’s Agents of S.H.I.E.L.D. (Staffel 5, Folgen 11-18)" year="2017" mediaType={MediaType.Series} episode="" isAlternateTimeline={false}></MarvelTimelineItem>
                        <MarvelTimelineItem title="Cloak & Dagger (Staffel 1 & 2)" year="2017" mediaType={MediaType.Series} episode="" isAlternateTimeline={false}></MarvelTimelineItem>
                        <MarvelTimelineItem title="Thor: Tag der Entscheidung" year="2017" mediaType={MediaType.Movie} episode="" isAlternateTimeline={false}></MarvelTimelineItem>
                        <MarvelTimelineItem title="Team Darryl" year="2017" mediaType={MediaType.OneShot} episode="" isAlternateTimeline={false}></MarvelTimelineItem>
                        <MarvelTimelineItem title="Marvel’s Luke Cage (Staffel 2)" year="2017" mediaType={MediaType.Series} episode="" isAlternateTimeline={false}></MarvelTimelineItem>
                        <MarvelTimelineItem title="Marvel’s Iron Fist (Staffel 2)" year="2017" mediaType={MediaType.Series} episode="" isAlternateTimeline={false}></MarvelTimelineItem>
                        <MarvelTimelineItem title="Marvel’s Daredevil (Staffel 3)" year="2017" mediaType={MediaType.Series} episode="" isAlternateTimeline={false}></MarvelTimelineItem>
                        <MarvelTimelineItem title="Marvel’s The Punisher (Staffel 2)" year="2017" mediaType={MediaType.Series} episode="" isAlternateTimeline={false}></MarvelTimelineItem>
                        <MarvelTimelineItem title="Marvel’s Jessica Jones (Staffel 3)" year="2017" mediaType={MediaType.Series} episode="" isAlternateTimeline={false}></MarvelTimelineItem>

                        <MarvelTimelineItem title="Marvel’s Runaways (Staffel 2)" year="2018" mediaType={MediaType.Series} episode="" isAlternateTimeline={false}></MarvelTimelineItem>
                        <MarvelTimelineItem title="Marvel’s Runaways (Staffel 3, Folge 1-4)" year="2018" mediaType={MediaType.Series} episode="" isAlternateTimeline={false}></MarvelTimelineItem>
                        <MarvelTimelineItem title="Ant-Man and the Wasp" year="2018" mediaType={MediaType.Movie} episode="" isAlternateTimeline={false}></MarvelTimelineItem>
                        <MarvelTimelineItem title="Marvel’s Agents of S.H.I.E.L.D. (Staffel 5, Folgen 19-21)" year="2018" mediaType={MediaType.Series} episode="" isAlternateTimeline={false}></MarvelTimelineItem>
                        <MarvelTimelineItem title="Avengers: Infinity War" year="2018" mediaType={MediaType.Movie} episode="" isAlternateTimeline={false}></MarvelTimelineItem>
                        <MarvelTimelineItem title="Marvel’s What If...? (Staffel 1, Folge 5)" year="2018" mediaType={MediaType.Series} episode="" isAlternateTimeline={true}></MarvelTimelineItem>
                        <MarvelTimelineItem title="Marvel’s Agents of S.H.I.E.L.D. (Staffel 5, Folgen 22)" year="2018" mediaType={MediaType.Series} episode="" isAlternateTimeline={false}></MarvelTimelineItem>
                        <MarvelTimelineItem title="Marvel’s Runaways (Staffel 3, Folge 5-10)" year="2018" mediaType={MediaType.Series} episode="" isAlternateTimeline={false}></MarvelTimelineItem>

                        <MarvelTimelineItem title="Marvel’s Agents of S.H.I.E.L.D. (Staffel 6)" year="2019" mediaType={MediaType.Series} episode="" isAlternateTimeline={false}></MarvelTimelineItem>
                        <MarvelTimelineItem title="Marvel’s Agents of S.H.I.E.L.D. (Staffel 7, Folge 13)" year="2019 - 2020" mediaType={MediaType.Series} episode="" isAlternateTimeline={false}></MarvelTimelineItem>

                        <MarvelTimelineItem title="Avengers: Endgame" year="2023" mediaType={MediaType.Movie} episode="" isAlternateTimeline={false}></MarvelTimelineItem>
                        <MarvelTimelineItem title="WandaVision (Staffel 1)" year="2023" mediaType={MediaType.Series} episode="" isAlternateTimeline={false}></MarvelTimelineItem>
                        <MarvelTimelineItem title="Eternals" year="2023" mediaType={MediaType.Movie} episode="" isAlternateTimeline={false}></MarvelTimelineItem>

                        <MarvelTimelineItem title="Shang-Chi and the Legend of the Ten Rings" year="2024" mediaType={MediaType.Movie} episode="" isAlternateTimeline={false}></MarvelTimelineItem>
                        <MarvelTimelineItem title="The Falcon and the Winter Soldier (Staffel 1)" year="2024" mediaType={MediaType.Series} episode="" isAlternateTimeline={false}></MarvelTimelineItem>
                        <MarvelTimelineItem title="Thor: Love and Thunder" year="2024" mediaType={MediaType.Movie} episode="" isAlternateTimeline={false}></MarvelTimelineItem>
                        <MarvelTimelineItem title="Peter's To-Do List" year="2024" mediaType={MediaType.OneShot} episode="" isAlternateTimeline={false}></MarvelTimelineItem>
                        <MarvelTimelineItem title="Spider-Man: Far From Home" year="2024" mediaType={MediaType.Movie} episode="" isAlternateTimeline={false}></MarvelTimelineItem>
                        <MarvelTimelineItem title="Spider-Man: No Way Home" year="2024" mediaType={MediaType.Movie} episode="" isAlternateTimeline={false}></MarvelTimelineItem>
                        <MarvelTimelineItem title="Doctor Strange in the Multiverse of Madness" year="2024" mediaType={MediaType.Movie} episode="" isAlternateTimeline={false}></MarvelTimelineItem>
                        <MarvelTimelineItem title="Hawkeye (Staffel 1)" year="2024" mediaType={MediaType.Series} episode="" isAlternateTimeline={false}></MarvelTimelineItem>

                        <MarvelTimelineItem title="Moon Knight (Staffel 1)" year="2025" mediaType={MediaType.Series} episode="" isAlternateTimeline={false}></MarvelTimelineItem>
                        <MarvelTimelineItem title="Black Panther: Wakanda Forever" year="2025" mediaType={MediaType.Movie} episode="" isAlternateTimeline={false}></MarvelTimelineItem>
                        <MarvelTimelineItem title="She-Hulk: Die Anwältin (Staffel 1)" year="2025" mediaType={MediaType.Series} episode="" isAlternateTimeline={false}></MarvelTimelineItem>
                        <MarvelTimelineItem title="Ms. Marvel (Staffel 1)" year="2025" mediaType={MediaType.Series} episode="" isAlternateTimeline={false}></MarvelTimelineItem>
                        <MarvelTimelineItem title="The Guardians of the Galaxy Holiday Special" year="2025" mediaType={MediaType.OneShot} episode="" isAlternateTimeline={false}></MarvelTimelineItem>
                        <MarvelTimelineItem title="Werewolf by Night" year="2025" mediaType={MediaType.Movie} episode="" isAlternateTimeline={false}></MarvelTimelineItem>

                        <MarvelTimelineItem title="Ant-Man and the Wasp: Quantumania" year="2026" mediaType={MediaType.Movie} episode="" isAlternateTimeline={false}></MarvelTimelineItem>
                        <MarvelTimelineItem title="Guardians of the Galaxy Vol. 3" year="2026" mediaType={MediaType.Movie} episode="" isAlternateTimeline={false}></MarvelTimelineItem>
                        <MarvelTimelineItem title="Secret Invasion (Staffel 1)" year="2026" mediaType={MediaType.Series} episode="" isAlternateTimeline={false}></MarvelTimelineItem>
                    </Timeline>
                 </Paper>
            </Box>
        </ThemeProvider>
    );
}