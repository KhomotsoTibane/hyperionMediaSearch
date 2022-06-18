import React,{useState} from 'react'
import {NavLink} from "react-router-dom"

function Navbar() {
  const[sidebar, setSideBar]=useState(false);

  const showSideBar = () => setSideBar(!sidebar)
  
  return (
  <>
    <div className="navbar" >
        <NavLink to="#" className="menu-bars">
        <i className="fa-solid fa-bars " onClick={showSideBar}></i>
        </NavLink>
        <div className="name">iMedia Search</div>
    </div>

    <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
      <ul className="nav-menu-items" onClick={showSideBar} >
        <li className="navbar-toggle">
        <NavLink  to="#"><i class="fa-solid fa-xmark fa-2x"></i></NavLink>
        </li>
        <li className="navbar-toggle">
        <NavLink   to="/" className="nav-text"><span>Home</span></NavLink>
        </li>
        <li className="navbar-toggle">
        <NavLink  to="/Favorites" className="nav-text"><span>Favorites</span></NavLink>
        </li>
      </ul>
    </nav>
  </>
  );
};

export default Navbar





// import React from 'react'
// import {NavLink} from "react-router-dom"

// function Navbar() {
//   return (
//   <nav className="navbar is-primary" role="navigation" aria-label="main navigation" >
      
//     <div className="nav-container">       
//       <div className="navbar-menu">
//         <div className="navbar-start">
//           <NavLink className="navbar-item" to="#">
//             <div className="subnav">
//               <div className="subnavbtn"><i className="fa-solid fa-bars"></i></div>
//                 <div className="subnav-content">
                  
//                   <NavLink className="navbar-item" to="/">
//                   Home
//                   </NavLink>

//                   <NavLink className="navbar-item" to="/Favorites">
//                   Favorites
//                   </NavLink>
//                 </div>
//             </div>
//           </NavLink> 
//         </div>
//       </div>
//     </div>
//   </nav>
//   );
// };

// export default Navbar