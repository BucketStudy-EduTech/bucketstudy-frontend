import React from "react";
import {Link} from "react-router-dom";
import './index.css';

//--------------------  NAV COMPONENT ----------------------
function Nav(){
    return(
       <div className="nav-bar">
        <header className="header">
        <img src='https://res.cloudinary.com/dhqfjwhhe/image/upload/v1752854930/b_wbwdgn.jpg ' alt='img' className='img'/>
        <nav className="nav-bar">
          <ul className="ul">
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/about">About Us</Link>
            </li>
            <li>
               <Link to="/internships">Internships</Link>
            </li>
            <li>
                <Link to="/challenges">Challenges</Link>
            </li>
            <li>
                <Link to="/career">Career</Link>
            </li>
            <li>
                <Link to="/contact">Contact Us</Link>
            </li>
          </ul>
        </nav>
      </header>

      {/*------------ Importing fonts from GoogleFonts ------------  */}
      <style>        
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
</style>
       </div>
    )
}
export default Nav