import React, { useEffect, useState } from 'react';




  
function Problems(){
    //fetch problms from backed  along with id.
    //iterate and make table of problems and on click fire fuction  for render of probAndEditor.js 
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