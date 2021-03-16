import List from './Pages/List'
import Detail from './Pages/Detail'
import MyPokemonList from './Pages/MyPokemonList'

export const publicRoutes = [
	{
		component: List,
		path: '/',
		exact: true,
	},
	{
		component: Detail,
		path: '/detail/:id',
		exact: true,
	},
	{
		component: MyPokemonList,
		path: '/mypokemon',
		exact: true,
	},
]
