import React from 'react';
import { pokemonData } from '../../data/pokemonData';

import Pokedex from '../Pokedex/Pokedex'
import './App.css';
interface AppState{
    searchField:string,
    allPokemons:any,
    searchPokemons:any,
    selectedPokeman:any
}
interface Play{
    name:string
}

//here <any,any> first any indicates type of the prop and second any indicates type of the state
class App extends React.Component<any,any>{
    //as soon as App component mounted on the screen this function is called
    componentDidMount(){
        const pokeData = pokemonData;
    }
    render(){
        return <div className="App">
            <h1>Pokedex</h1>
            <Pokedex/>
        
        </div>
    }
}
export default App