import React from 'react';
import Topic from './Topic';
import {connect} from "react-redux";
import {selectUnanswered} from "../actions";

const CombinedTopics = (props) => {
    let selected_posts = props.selected_posts

    if (!props.selected_posts.isArray){
        selected_posts = Object.keys(props.selected_posts).map(function(key){
                                return props.selected_posts[key];
                            });
    }

    let TotalTopics = selected_posts.filter((e)=>e.include_in_list===true).map((e)=><Topic posts = {e} />)

  return (
          <div>
              {TotalTopics.length === 0? <div className = "topicNavigation"><p style = {{marginLeft: "20px", marginTop: "10px"}}>No Posts Found for this Topic</p></div> : TotalTopics}
          </div>
      )};



const mapStateToProps = (state) => {
    return {selected_posts: state.selected_posts}
}

export default connect(mapStateToProps)(CombinedTopics);