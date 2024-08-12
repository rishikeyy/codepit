import React from 'react';
import Navbar from './Navbar/Navbar.js'
import HomepageContent from './HomepageContent.js'

var problemData;
// useEffect(()=>{
//     //axios for fetching problem
//     },[]);
    

function Homepage(){
    return (
    <div>
    <Navbar/>
    <HomepageContent/>
    <Routes>
        <Route path="/Home" element={<HomepageContent/>}/>
        <Route path="/LeaderBoard" element={<LeaderBoard/>}/>
        <Route path="/ProblemList" element={<ProblemList/>}/>
    </Routes>
    </div>
    )
} 

export default Homepage;