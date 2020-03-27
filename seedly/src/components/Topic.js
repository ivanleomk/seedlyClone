import React from 'react';

import '../static/css/topics.css'

const Topics = () => {
  return (
          <div>
             <div className = "topicNavigation" style = {{paddingLeft: "10%",paddingTop: "1%",paddingBottom:"1%",paddingRight: "10%"}}>
                  <a href="#home">Recent Activity</a>
                  <a href="#about">Trending</a>
                  <a href="#contact" className = "active">Unanswered</a>
             </div>

          </div>
      )};

export default Topics;