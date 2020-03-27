import React from 'react';
import seedlyLogo from '../static/seedly-logo.png'

import '../static/css/navbar.css'

const UserNavBar = () => {
  return (
          <div style = {{paddingLeft: "10%",paddingTop: "1%",paddingBottom:"1%",paddingRight: "10%"}} className="topnav">
              <div className = "navigation">
                  <img src = {seedlyLogo} alt = "Logo"/>
                  <div>
                      <a href="#home">Home</a>
                      <a href="#about">About</a>
                      <a href="#contact">Contact</a>
                  </div>
              </div>
              <div className = "input">

                  <input type="text" placeholder="Search For Anything"></input>


                  <button type = "submit">Join</button>
              </div>

          </div>
      )};

export default UserNavBar;