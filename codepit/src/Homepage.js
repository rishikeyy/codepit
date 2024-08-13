import React from 'react';
import Navbar from './Navbar/Navbar.js'
import HomepageContent from './HomepageContent.js'
import { Routes, Route } from 'react-router-dom';
import ProblemList from './Problemlist.js';

var problemData;
// useEffect(()=>{
//     //axios for fetching problem
//     },[]);
    

function Homepage(){
    return (
    <div>
    <Navbar/>
    <HomepageContent/>
   
    </div>
    )
} 

export default Homepage;