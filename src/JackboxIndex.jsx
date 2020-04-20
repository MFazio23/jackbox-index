import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import GameCard from "./GameCard";

import ydkj2015 from "./images/YDKJ-2015.png";

const useStyles = makeStyles((theme) => ({
    heroContent: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 6),
    },
    cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
    }
}));

export default function JackboxIndex() {

    const classes = useStyles();

    const games = [
        {
            id: "ydkj2015",
            title: "You Don't Know Jack 2015",
            description: "",
            image: ydkj2015
        }
    ];

    return (
        <React.Fragment>
            <div className={classes.heroContent}>
                <Container maxWidth="sm">
                    <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                        Jackbox Index
                    </Typography>

                </Container>
            </div>
            <Container className={classes.cardGrid} maxWidth="md">
                {/* End hero unit */}
                <Grid container spacing={4}>
                    {games.map(game => (
                        <Grid item key={game.id} xs={12} sm={6} md={4}>
                            <GameCard game={game}/>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </React.Fragment>
    )
}