import React from 'react';
import { LocaleContext } from '../LocaleContext';
import ListPokemon from '../ListPokemon';
import MyPokemon from '../MyPokemon';
export default function MyPokemonList() {
	const [myPokemon] = LocaleContext();
	const AnakKomponent = ({ pokemons }) => (
		<React.Fragment>
		  {pokemons.map((pok) =>
			  <MyPokemon
				key={pok.name}
				myPokemon={pok}
			  />
		  )}
		</React.Fragment>
	  )

	return (
		<React.Fragment>
			<h2>My Pokemon List</h2>
			<ListPokemon
               AnakKomponent={
                 React.useMemo(
                   () =>
                     <AnakKomponent
                       pokemons={myPokemon.items}
                     ></AnakKomponent>,
                   [myPokemon.items]
                 )}
             >
             </ListPokemon>
		</React.Fragment>
	)
}
