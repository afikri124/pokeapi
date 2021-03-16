import { useState, useEffect } from 'react';
import Axios from 'axios';

const MainURL = process.env.REACT_APP_API_URL;

export const PokeAPI = () => {
    const [counter, setCounter] = useState(0)

    const [pokemons, setPokemons] = useState([])

    useEffect(() => {
        const url = MainURL;
        Axios.get(url)
        .then(
            response => setPokemons(response.data.results)
        )
        .catch(error => console.log('parsing failed', error))


    }, [counter])


    return [pokemons, setCounter]
}

export const PokeAPIdetail = (id) => {
    const [detailPokemon, setDetailPokemon] = useState([]);
    
    useEffect(() => {
        // console.log(id);
        if (id !== null) {
            const url = `${MainURL}/${id}`;
            Axios.get(url).then(
                response => setDetailPokemon(response.data)
            )
        }
    }, [id])

    return [detailPokemon]
}