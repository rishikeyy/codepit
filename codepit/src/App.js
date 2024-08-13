import logo from './logo.svg';
import { Routes, Route } from 'react-router-dom';
import Homepage from './Homepage.js';
import ProblemList from './Problemlist.js';
import Navbar from './Navbar/Navbar.js';
import HomepageContent from './HomepageContent.js';
function App() {
  return (
    <div >
      <Homepage/> 
      {/* <ProblemList/> */}
      <Routes>
        <Route path="/Home" element={<HomepageContent/>}/>
        {/* <Route path="/LeaderBoard" element={<LeaderBoard/>}/> */}
        <Route path="/ProblemList" element={<ProblemList/>}/>
    </Routes>
    </div>
  );
}

export default App;
