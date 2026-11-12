import axios from 'axios';
import { useEffect, useState } from 'react';

function Pokemon(){
    const[pokemon, setPokemon] = useState(0);
    const [loading, setLoading] = useState(true);
    const[error,setError] = useState(false);

    useEffect(() => {
        const getData = async () => {
            try{
                const res = await axios.get("https://pokeapi.co/api/v2/pokemon/celebi")
                setPokemon(res.data);
                setLoading(false);
            }catch (error) {
                setLoading(false)                      
                setError(true)                          
                console.log("Error: ", error)
            }
        }
         getData()
    }, [])

    if(loading){
    
      return(
            <div>Carregando</div>
      )
      if(error){
        <div>error</div>
      }
     }   
     return (
        <div id="docs">
              <h2>Meu nome pokemon é o {pokemon.name}</h2>
              <img src={pokemon.sprites.front_shiny} className="base" width="200" height="280" alt="Imagem Dragon Ball Gohan" border-radius='10px'/>                
              
            </div>
    
     )   
}

export default Pokemon