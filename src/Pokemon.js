import React from 'react';
import { NavLink } from 'react-router-dom';
import { CardContent, CardMedia,  ListItemText, Grid, Card, List } from '@material-ui/core';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Logo from './logo.svg';
import { PokeAPIdetail } from './PokeAPI';

const myStyle = makeStyles({
    card: {
        margin: 5,
        padding: 5
    },
    media: {
        height: 100,
        backgroundSize:'contain'
    },
    text:{
        padding:0,
        margin:0,
        textAlign:'center',
        textTransform:'capitalize'
    },
    link:{
        textDecoration:'none'
    }
})

const Pokemon = ({ pokemon }) => {
    const [detailPokemon] = PokeAPIdetail(pokemon.name);
    const classes = myStyle();
    return (
        <Grid item lg={3} md={4} sm={6} xs={6}>
            <NavLink to={`/detail/${pokemon.name}`} className={classes.link}>
            <Card className={classes.card}>
                <CardMedia
                    image={detailPokemon?.sprites?.front_default ?? Logo}
                    className={classes.media}
                >
                </CardMedia>
                <CardContent>
                    <List >
                        <ListItemText 
                            primary={pokemon.name}
                            className={classes.text}
                        />
                    </List>
                </CardContent>
            </Card>
            </NavLink>
        </Grid >
    )
}

export default React.memo(Pokemon);