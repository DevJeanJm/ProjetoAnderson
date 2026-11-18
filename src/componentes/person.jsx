import axios from 'axios';
import { useEffect, useState } from 'react';

function Person(){
    const[person, setPerson] = useState(0);
    const [loading, setLoading] = useState(true);
    const[error,setError] = useState(false);

    useEffect(() => {
        const getData = async () => {
            try{
                const res = await axios.get("https://6a79e554674f43f4db11ebc8.mockapi.io/api/person/9")
                setPerson(res.data);
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
        <div>Error</div>
      }
     }   
     return (
        <div className="textPerson">
              <h1>Me chamo {person.nome} {person.sobrenome}</h1>        
              
            </div>
    
     )   
}

export default Person