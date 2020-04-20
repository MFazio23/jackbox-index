import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import CardMedia from "@material-ui/core/CardMedia";
import ydkj2015 from "./images/YDKJ-2015.png";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Tooltip from "@material-ui/core/Tooltip";
import SpellcheckIcon from "@material-ui/icons/Spellcheck";
import BrushIcon from "@material-ui/icons/Brush";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import Card from "@material-ui/core/Card";

const useStyles = makeStyles((theme) => ({
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    cardMedia: {
        paddingTop: '56.25%', // 16:9
    },
    cardContent: {
        flexGrow: 1,
    }
}));

export default function JackboxIndex() {

    const classes = useStyles();

    return (
        <Card className={classes.card}>
            <CardMedia
                className={classes.cardMedia}
                image={ydkj2015}
                title="You Don't Know Jack 2015"
            />
            <CardContent className={classes.cardContent}>
                <Typography gutterBottom variant="h5" component="h2">
                    You Don't Know Jack 2015
                </Typography>
                <Typography>
                    The comedy trivia sensation returns with hundreds of new questions that you can
                    tackle on a night in by yourself or when you’re joined by friends.
                </Typography>
            </CardContent>
            <Box px={3} pb={3}>
                <Grid container spacing={1}>
                    <Grid item xs>
                        <Tooltip disableFocusListener title={"Fill in the Blank"}>
                            <SpellcheckIcon alt={"Fill in the Blank"}/>
                        </Tooltip>
                    </Grid>
                    <Grid item xs>
                        <Tooltip disableFocusListener title={"Drawing"}>
                            <BrushIcon alt={"Drawing"}/>
                        </Tooltip>
                    </Grid>
                    <Grid item xs>
                        <Tooltip disableFocusListener title={"Trivia"}>
                            <HelpOutlineIcon alt={"Trivia"}/>
                        </Tooltip>
                    </Grid>
                </Grid>
            </Box>
        </Card>
    )

}