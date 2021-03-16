import {  useEffect, useState } from 'react'

export const LocaleContext = () => {
	const [myPokemon, setMyPokemon] = useState({items: JSON.parse(localStorage.getItem('myPokemon')) ?? []})
	
	useEffect(() => {
		localStorage.setItem(`myPokemon`, JSON.stringify(myPokemon.items))
	}, [myPokemon])

	return [myPokemon, setMyPokemon] 
}
