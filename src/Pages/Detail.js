import React from 'react';
import { PokeAPIdetail } from '../PokeAPI';
import { LocaleContext } from '../LocaleContext';
import PropTypes from 'prop-types';
import { Fab, AppBar, CardMedia, Grid, Card, Tabs, Tab, Typography, Box } from '@material-ui/core';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Logo from '../logo.svg';
import Pokeball from '../pokeball.png';

const myStyle = makeStyles((theme) => ({
    card: {
        margin: 5,
        padding: 5
    },
    media: {
        height: 300,
        backgroundSize:'contain'
    },
	detail:{
		margin:15,
		paddingLeft:5,
		paddingRight:5
	},
	root: {
		flexGrow: 1,
		backgroundColor: theme.palette.background.paper,
	},
	box:{
		padding:0,
		paddingTop:10,
		paddingBottom:70
	},
	title:{
		textTransform:'capitalize'
	},
	appBar2: {
		top: 'auto',
		bottom: 0,
	},
	grow: {
		flexGrow: 1,
	},
	fabButton: {
		position: 'absolute',
		zIndex: 1,
		top: -70,
		left: 0,
		right: 0,
		margin: '0 auto',
		'&:hover': {
			width: 90,
			top: -90
		},
	},
	pokeball:{
		'&:hover': {
			width: 90,
		},
	}
}));
function TabPanel(props) {
	const { children, value, index, ...other } = props;
	const classes = myStyle();
  
	return (
	  <div
		role="tabpanel"
		hidden={value !== index}
		id={`simple-tabpanel-${index}`}
		aria-labelledby={`simple-tab-${index}`}
		{...other}
	  >
		{value === index && (
		  <Box p={3} className={classes.box}>
			<Typography>{children}</Typography>
		  </Box>
		)}
	  </div>
	);
  }
  
  TabPanel.propTypes = {
	children: PropTypes.node,
	index: PropTypes.any.isRequired,
	value: PropTypes.any.isRequired,
  };
  
  function a11yProps(index) {
	return {
	  id: `simple-tab-${index}`,
	  'aria-controls': `simple-tabpanel-${index}`,
	};
  }
  

export default function Detail({match}) {
	const classes = myStyle();
	const [detailPokemon] = PokeAPIdetail(match.params.id);
	const [value, setValue] = React.useState(0);
	const [myPokemon, setMyPokemon] = LocaleContext();

	const handleChange = (event, newValue) => {
	  setValue(newValue);
	};

	function catchThisPokemon(){
		if (Math.random() >= 0.5){
			return prompt("Yeay..!! you caught a "+detailPokemon.name+"🔥\ngive your pokemon nickname:", "my-"+detailPokemon.name);
		}else{
			alert("You failed to catch " + detailPokemon.name + "! 😭\nthe pokemon ran away, try again!");
			return false;
		}
	}


	return (
		<React.Fragment>
			<h2>Pokemon Detail</h2>
			<Grid container>
				<Grid item lg={4} md={5} sm={12} xs={12}>
					<Card>
						<CardMedia
							image={detailPokemon?.sprites?.front_default ?? Logo}
							className={classes.media}
						>
						</CardMedia>
					</Card>
				</Grid >
				<Grid item lg={8} md={7} sm={12} xs={12}>
					<div className={classes.detail}>
						<h1 className={classes.title}>{detailPokemon.name}</h1>
						<small></small>
						<hr/>
						<div>Experience: {detailPokemon.base_experience}<br/> Weight: {detailPokemon.weight}<br/>Height: {detailPokemon.height}</div>
						<br/>
						<div className={classes.root}>
							<AppBar position="static"  color="inherit">
								<Tabs value={value} onChange={handleChange}>
								<Tab label="Moves" {...a11yProps(0)} />
								<Tab label="Types" {...a11yProps(1)} />
								<Tab label="Abilities" {...a11yProps(2)} />
								</Tabs>
							</AppBar>
							<TabPanel value={value} index={0}>
								<small>{detailPokemon?.moves?.map((item) => item.move.name).join(', ')}</small>
							</TabPanel>
							<TabPanel value={value} index={1}>
								<small>{detailPokemon?.types?.map((item) => item.type.name).join(', ')}</small>
							</TabPanel>
							<TabPanel value={value} index={2}>
								<small>{detailPokemon?.abilities?.map((item) => item.ability.name).join(', ')}</small>
							</TabPanel>
						</div>

					</div>
				</Grid>
        	</Grid>
			<AppBar position="fixed" color="transparent" className={classes.appBar2}>
				<Fab color="secondary" aria-label="add" className={classes.fabButton}
					onClick={event => {
						let nickname = catchThisPokemon();
						if(nickname){
							if(myPokemon.items.filter((item) => item?.nickName.toLowerCase() === nickname.toLowerCase()).length === 0){
								setMyPokemon((prevState) => ({
									...prevState,
									items: [...prevState.items,
												{
													id: detailPokemon.id,
													name: detailPokemon.name,
													nickName: nickname,
													img: detailPokemon?.sprites?.front_default,
												}
											]
								}),[setMyPokemon]);
								window.location.href = '/mypokemon'; 
							} else {
								alert("Failed, nickname can't be same!")
							}
						}
					}}
				>
					<img src={ Pokeball } alt='Catch the Pokemon' title='Catch the Pokemon' className={classes.pokeball}/>
				</Fab>
			</AppBar>
		</React.Fragment>
	)
}
