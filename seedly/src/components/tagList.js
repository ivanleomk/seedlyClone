import React from 'react';

//Importing Action Creators
import { selectTag, updateAbout } from '../actions';
import {connect} from "react-redux";


class TagList extends React.Component{
    constructor(props) {
    super(props);
    this.updateAboutInformation = this.updateAboutInformation.bind(this)
    }

    clearElements(){
        let elements = document.querySelectorAll('a')
        for (var i = 0; i < elements.length; i++) {
            if(elements[i].classList.contains("active")){
                elements[i].classList.remove("active")
            }
        }

    }

    componentDidMount() {
        let element = document.getElementById("All Questions").querySelector("a")
        element.setAttribute("class","active")
    }


    updateAboutInformation(e){
        this.clearElements()
        let element = document.getElementById(e.target.text).querySelector("a")
        element.setAttribute("class","active")

        if (e.target.text == "All Questions"){
           this.props.updateAbout("")
           this.props.selectTag("ALL")
        }
        else{
            this.props.updateAbout(e.target.text)
            this.props.selectTag(e.target.text)
        }

    }


    render(){

        let TagItems = this.props.tags.map((e)=>
            <li
              onClick={this.updateAboutInformation}
              style = {{margintop: "20px",width:"200px"}}
              id = {e}>
             <a href="#asd">{e}</a></li>)

        return (
          <div>
              <span style = {{paddingLeft: "50px",fontSize:"17px",fontWeight:"bold"}}>{this.props.title || ""}</span>
              <ul>
                  {TagItems}
              </ul>
          </div>
      )};

    }





const mapStateToProps = (state) => {
    return {selected_posts: state.selected_posts}
}

export default connect(mapStateToProps,
    {selectTag,updateAbout}
)(TagList);