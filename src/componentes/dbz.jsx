import axios from 'axios';
import { useEffect, useState } from 'react';

function DBZ(){
    const[dbz, setDBZ] = useState(0);
    const [loading, setLoading] = useState(true);
    const[error,setError] = useState(false);

    useEffect(() => {
        const getData = async () => {
            try{
                const res = await axios.get("https://dragonball-api.com/api/characters/10")
                setDBZ(res.data);
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
        <div className='AreaDBZ'>
            <div className='textDBZ'>
            <h2>Esse é meu personagem favorito.</h2>
            </div>
            <h2>{dbz.name}</h2>
            <img src={dbz.image} className="imageDBZ" width="200" height="280" alt="Imagem Dragon Ball Gohan" border-radius='10px'/>
            <div className='dbzAtributes'>
            <p>RACA: <br />
            {dbz.race}
            </p>
            <p>GENÊRO: <br />
            {dbz.gender}
            </p>   
            <p>KI: <br />
            {dbz.ki}
            </p>
            </div>     
        </div>
     )   
}

export default DBZ