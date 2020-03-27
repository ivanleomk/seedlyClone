import React from 'react';
import seedlyDesktop from '../static/default_desktop.svg'
import '../static/css/main.css'

const DesktopImage = () => {
  return (
      <div style = {{
          backgroundImage: `url(${seedlyDesktop})`
      }} className = "mainDesktopImage">
           <h1>Let's Talk Finance</h1>
           <h2>Ask for opinions and get answers from other Singaporeans</h2>
           <button className = "questionButton">Ask a Question</button>
      </div>

        )};

export default DesktopImage;