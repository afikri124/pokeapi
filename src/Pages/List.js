import React from 'react';
import ListPokemon from '../ListPokemon';
import { PokeAPI } from '../PokeAPI';
import Pokemon from '../Pokemon';

const List = () => {
  const [pokemons] = PokeAPI([]);
 
  const AnakKomponent = ({ pokemons }) => (
    <React.Fragment>
      {pokemons.map((pok) =>
          <Pokemon
            key={pok.name}
            pokemon={pok}
          />
      )}
    </React.Fragment>
  )
 
  return(
      <React.Fragment>
             <h2>Pokemon List</h2>
             <ListPokemon
               AnakKomponent={
                 React.useMemo(
                   () =>
                     <AnakKomponent
                       pokemons={pokemons}
                     ></AnakKomponent>,
                   [pokemons]
                 )}
             >
             </ListPokemon>
      </React.Fragment>
  );
}
export default React.memo(List);