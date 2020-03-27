import React from 'react';

import '../static/css/topics.css'

import CombinedTopics from './CombinedTopics';
import {connect} from "react-redux";

const TopicList = (props) => {

  return (
          <div>
             <div className = "topicNavigation" style = {{paddingLeft: "10%",paddingTop: "1%",paddingBottom:"1%",paddingRight: "10%"}}>
                  <a onClick={() => props.dispatch({ type: "RECENT_ACTIVITY" })} >Recent Activity</a>
                  <a href="#about">Trending</a>
                  <a href="#contact" className = "active">Unanswered</a>
             </div>
              <div className = "combinedTopics">
                <CombinedTopics posts = {props.selected_posts}/>
              </div>
          </div>
      )};


const mapStateToProps = (state) => {
    return {selected_posts: state.selected_posts}
}

export default connect(mapStateToProps)(TopicList);