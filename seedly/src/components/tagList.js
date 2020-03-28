import React from 'react';

//Importing Action Creators
import { selectTag } from '../actions';
import {connect} from "react-redux";

const TagList = (props) => {
    let TagItems = props.tags.map((e)=>
        <li
          onClick={()=>props.selectTag({e})}
          style = {{marginTop: "20px",width:"200px"}}
          key = {e}>
         <a href="#asd">{e}</a></li>)

  return (
          <div>
              <span style = {{paddingLeft: "50px",fontSize:"17px",fontWeight:"bold"}}>{props.title || ""}</span>
              <ul>
                  {TagItems}
              </ul>
          </div>
      )};


const mapStateToProps = (state) => {
    return {selected_posts: state.selected_posts}
}

export default connect(mapStateToProps,
    {selectTag}
)(TagList);