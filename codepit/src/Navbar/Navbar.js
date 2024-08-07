import React,{useEffect,useState} from 'react';

import  './Navbar.css'

const problemData;
const [flag,flagCount]=useState(0);
useEffect(()=>{
//axios for fetching problem
},[]);

function handleProblemList(e){

}

function Navbar() {

  return (
    <nav className='nav'>
      <button className="Home">CodePit.</button>
      <button className="Problemlist" onClick={()=>flag}>ProblemList</button>
      <button className="LeaderBoard">LeaderBoard</button>
      

    </nav>
  );
}

export default Navbar;
