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

        
        <div className="docs">
          <div className='textPokemon'>
              <h2>Meu nome pokemon é o <br />
              {pokemon.name}</h2> 
          </div>
              <div className='pokeball'>
                <div className='imagePokemon'>
              <img src={pokemon.sprites.front_shiny} className="base" width="100px" height="100px"
              border-radius="10px"
              alt="Imagem do Pokemon Celebi"/>                
                </div>

              </div>
              
            </div>
    
     ) 
     
}

export default Pokemon