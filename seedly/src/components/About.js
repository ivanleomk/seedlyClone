import React from 'react';

//Importing Redux
import {connect} from "react-redux";

const About = (props) => {
  return (
          <div>
              {props.about !== "" &&

                  <div style = {{
                                  display: "flex",
                                  flexDirection:"column",
                                  marginTop: "20px",
                                  marginBottom: "20px",
                                  padding:"20px",
                                  backgroundColor: "White"}}>

                      <h1 style = {{color: "Black"}}>{props.about}</h1>
                      <p>This is an information section about {props.about}</p>
                  </div>

              }
          </div>
      )};


const mapStateToProps = (state) => {
    return {about: state.about}
}

export default connect(mapStateToProps)(About)