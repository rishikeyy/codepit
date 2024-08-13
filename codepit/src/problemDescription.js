import axios from "axios";
import { useEffect } from "react";

function problemDescription(problemID){
const [data,dataSetter]=useState();
useEffect(()=>{
    var fetch=async ()=>{
        try{
            var response=await axios.get('http://localhost:8080/problemlist/{problemID}')
            dataSetter(response)
        }
        catch(e){
            console.log(e)
        }
    }
    response();

},[])
return(
    //parse data and return it in a jsx format
    <>
    
    </>
)
}

export default problemDescription