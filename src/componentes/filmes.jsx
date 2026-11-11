import axios from 'axios';
import { useEffect, useState } from 'react';

function Filme(){
    const[filme, setFilme] = useState(0);
    const [loading, setLoading] = useState(true);
    const[error,setError] = useState(false);

    useEffect(() => {
        const getData = async () => {
            try{
                const res = await axios.get("https://www.omdbapi.com/?i=tt0903747&apikey=e20e5475")
                setFilme(res.data);
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
        <div>
            <h1>Meu filme favorito:</h1>
            <img src={filme.Poster} className="base" width="200" height="280" alt="Imagem Dragon Ball Gohan" border-radius='10px'/>        
        </div>
     )   
}

export default Filme