import React from 'react';
import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom';
import { Container, AppBar, Toolbar, Typography,Grid, Badge, IconButton } from '@material-ui/core/';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { publicRoutes } from './Routes';
import NotFound from './Pages/404';
import { LocaleContext } from './LocaleContext';
import HomeIcon from '@material-ui/icons/Home';
import Pokeball from './pokeball.png';
import PokeAPIIcon from './pokeapi.svg';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    // marginRight: theme.spacing(2),
  },
  title: {
    paddingTop:7,
    flexGrow: 1,
  },
  appbar: {
    marginBottom: 20
  },
  toolbar: {
    padding:0
  },
  text:{
    padding:20,
    textAlign:'center'
  },
  container:{
    minHeight:'80vh'
  }
}));

const App = () => {
  const classes = useStyles();
  const [myPokemon] = LocaleContext();
		return (
      <>
        <Router>
        <AppBar color="inherit" position="sticky" className={classes.appbar}>
            <Container>
              <Toolbar className={classes.toolbar}>
                <IconButton edge="start" className={classes.menuButton} aria-label="menu" > 
                  <NavLink to="/" color="textPrimary">
                    <HomeIcon color="primary"/>
                  </NavLink>
                </IconButton>
                <Typography className={classes.title} variant="h6" noWrap>
                  <img src={ PokeAPIIcon } alt='PokeAPI' title='PokeAPI-Fikri' />
                </Typography>
                <IconButton aria-label="MyPokemon" color="inherit">
                  <Badge badgeContent={myPokemon.items.length ?? 0} color="primary">
                    <NavLink to="/mypokemon">
					            <img src={ Pokeball } alt='Pokedex' title='Pokedex' width='25' />
                    </NavLink>
                  </Badge>
                </IconButton>
              </Toolbar>
            </Container>
          </AppBar>
           <Container className={classes.container}>
            <Switch>
              {publicRoutes.map((route, index) => (
                <Route exact={route.exact} path={route.path} component={route.component} key={index} />
              ))}
              <Route exact component={NotFound} key='404' />
            </Switch>
          </Container>
          <Grid item xs={12} className={classes.text}>
              <small>Created by <a href="https://www.alifikri.com">alifikri.com</a></small>
            </Grid>
        </Router>
      </>
		)
}
export default React.memo(App);