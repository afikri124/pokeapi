import React from 'react';
import { LocaleContext } from './LocaleContext';
import { NavLink } from 'react-router-dom';
import { CardContent, CardMedia,  ListItemText, Grid, Card, List, Button } from '@material-ui/core';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Logo from './logo.svg';

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
    button:{
        padding:0,
        margin:3,
        fontSize:10
    },
    link:{
        textDecoration:'none'
    }
})

const MyPokemon = ({ myPokemon }) => {
    const classes = myStyle();
	const [myPokemons, setMyPokemon] = LocaleContext();
    return (
        <Grid item lg={3} md={4} sm={6} xs={6}>
            <Card className={classes.card}>
                <CardMedia
                    image={myPokemon.img ?? Logo}
                    className={classes.media}
                >
                </CardMedia>
                <CardContent className={classes.text}>
                    <List >
                        <ListItemText 
                            primary={myPokemon.nickName}
                            className={classes.text}
                        />
                        <small className={classes.text}>( {myPokemon.name} )</small>
                    </List>
                    <NavLink to={`/detail/${myPokemon.name}`} className={classes.link}>
                        <Button variant="outlined" color="primary" className={classes.button}>
                            Detail
                        </Button>
                    </NavLink>
                    <Button variant="outlined" color="secondary" className={classes.button}
                        onClick={() => {
                            setMyPokemon((prevState) => ({
                                ...prevState,
                                items: myPokemons.items.filter((item) => item.nickName !== myPokemon.nickName)
                            }),[setMyPokemon]);
                            window.location.reload(); 
                        }
                        }>Remove
                    </Button>
                </CardContent>
            </Card>
        </Grid >
    )
}

export default React.memo(MyPokemon);