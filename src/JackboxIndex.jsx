import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import GameCard from "./GameCard";

import drawful from "./images/Drawful.png";
import lieSwatter from "./images/Lie-Swatter.png";
import fibbageXL from "./images/Fibbage-XL.png";
import wordSpud from "./images/WordSpud.png";
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
            pack: 1,
            title: "You Don't Know Jack 2015",
            description: "The comedy trivia sensation returns with hundreds of new questions that you can tackle on a night in by yourself or when you’re joined by friends.",
            image: ydkj2015
        },
        {
            id: "drawful",
            pack: 1,
            title: "Drawful",
            description: "The first installment of the wildly popular drawing game allows you to draw bizarre doodles on your phone or tablet.",
            image: drawful
        },
        {
            id: "lieSwatter",
            pack: 1,
            title: "Lie Swatter",
            description: "Need a game for a big group? Grab yourself or a crowd and play true-or-false with a timer. Don’t get swatted in this wacky fact-filled game!",
            image: lieSwatter
        },
        {
            id: "fibbageXL",
            pack: 1,
            title: "Fibbage XL",
            description: "The hilarious bluffing game now has 50% more questions added to the original hit game, Fibbage. Convince your friends that you know the answers to odd trivia questions OR aim to win the Thumbs Cup with the funniest answer.",
            image: fibbageXL
        },
        {
            id: "wordSpud",
            pack: 1,
            title: "Word Spud",
            description: "Test your vocabulary chops in the racy-as-you-want-it-to-be fill-in-the-blank word game.",
            image: wordSpud
        }
    ];

    return (
        <React.Fragment>
            <div className={classes.heroContent}>
                <Container maxWidth="sm">
                    <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                        The Jackbox Index
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