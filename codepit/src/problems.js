import React, { useEffect, useState } from 'react';

//require.context()


  
function Problems(){

    const [markDown,setMarkDown] = useState("")


    useEffect(() => {
        


    },[])


   



    return <div>
       {/* connect to backend and fetch the list. */}
       
       <button onClick={updatedMd}>Click me</button>
       <div dangerouslySetInnerHTML={{__html: markDown}}></div>
        
    </div>
}
export default Problems;