import React from 'react';
import './PokeSearchResult.css';
const PokeSearchResult=()=>{
    const selectPokemon = true;
    return(
      <div className="poke-result-card">
          {
             selectPokemon?(<div>
                 <p>Name:pikachu</p>
                 <p>Id:Some Id</p>
                 <p>Height:some height</p>
                 <p>weight:some weight</p>
                 <p>Base Exp:100xp</p>
                 </div>):(
                     <h2>welcome to the pokedex</h2>
                 )
          }
      </div>
    )
}
export default PokeSearchResult;