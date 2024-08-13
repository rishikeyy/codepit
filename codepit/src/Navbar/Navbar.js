import React,{useEffect,useState} from 'react';

import  './Navbar.css'

var problemData;
//const [flag,flagCount]=useState(0);


function Navbar() {

  return (
    <nav className='nav'>
      <button className="Home">CodePit.</button>
      <button className="Problemlist" >ProblemList</button>
      {/* <button className="LeaderBoard">LeaderBoard</button> */}
      

    </nav>
  );
}

export default Navbar;
