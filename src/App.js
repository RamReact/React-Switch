import './App.css';
import { useState } from 'react';
import { IoSunnyOutline } from "react-icons/io5";
import { BsMoonStars } from 'react-icons/bs';
function App() {
 const[isDark,setisDark]=useState(true);
 const toggleisDark=()=>{
   setisDark(!isDark);
 }
  return (
    <div className={`App ${isDark ? 'dark':'light'}`}>
     <div 
      className={`container ${isDark ? 'dark-con':'light-con'}`} 
      onClick={toggleisDark}>
       <div className={`left-container`}>
        <span>{isDark ? 'Night':'Day'} Mode</span>
       </div>
       <div className={`right-container ${isDark ? 'dark':'light'}`}>
       {isDark ? <BsMoonStars />:<IoSunnyOutline />}
       </div>
     </div>
    </div>
  );
}

export default App;
