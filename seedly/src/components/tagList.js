import React from 'react';


const TagList = (props) => {
    let TagItems = props.tags.map((e)=><li style = {{marginTop: "20px",width:"200px"}} key = {e}><a>{e}</a></li>)

  return (
          <div>
              <span style = {{paddingLeft: "50px",fontSize:"17px",fontWeight:"bold"}}>{props.title || ""}</span>
              <ul>
                  {TagItems}
              </ul>
          </div>
      )};

export default TagList;