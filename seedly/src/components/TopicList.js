import React from 'react';

import '../static/css/topics.css'

//Importing Components
import CombinedTopics from './CombinedTopics';
import About from './About';

//Importing Reducers
import {connect} from "react-redux";
import {selectUnanswered, selectRecent, selectTrending,setUp} from "../actions";


class TopicList extends React.Component{
    constructor(props) {
    super(props);
    this.findRecent = this.findRecent.bind(this)
    this.findTrending = this.findTrending.bind(this)
    this.findUnanswered = this.findUnanswered.bind(this);
    }

    clearElements(){
        let elements = document.querySelectorAll('.navigationButtons')
        for (var i = 0; i < elements.length; i++) {
            if(elements[i].classList.contains("active")){
                elements[i].classList.remove("active")
            }
        }

    }

    findRecent(e) {
        e.preventDefault()
        this.clearElements()
        let element = document.getElementById(e.target.id)
        element.classList.add("active")
        this.props.selectRecent()
      }

    findTrending(e) {
        e.preventDefault()
        this.clearElements()
        let element = document.getElementById(e.target.id)
        element.classList.add("active")
        this.props.selectTrending()
      }

    findUnanswered(e) {
        e.preventDefault()
        this.clearElements()
        let element = document.getElementById(e.target.id)
        element.classList.add("active")
        this.props.selectUnanswered()
      }

    componentDidMount(){
        //Add an Axios API call here
        this.props.setUp()
        //We then configure Recent by deafult
        let element = document.getElementById("Recent")
        element.classList.add("active")
        this.props.selectRecent()
    }

    render(){
        return (
          <div>
             <div className = "topicNavigation" style = {{paddingLeft: "10%",paddingTop: "1%",paddingBottom:"1%",paddingRight: "10%"}}>
                  <a className = "navigationButtons" id = "Recent" onClick = {this.findRecent}             href = "#" > Recent Activity </a>
                  <a className = "navigationButtons" id = "Trending" onClick = {this.findTrending}   href = "#" > Trending </a>
                  <a className = "navigationButtons" id = "Uns" onClick = {this.findUnanswered} href = "#" > Unanswered </a>
             </div>
              <div className = "combinedTopics" >
                  <About />
                <CombinedTopics />
              </div>
          </div>
      )
    }
}

const mapStateToProps = (state) => {
    return {selected_posts: state.selected_posts}
}

export default connect(mapStateToProps,{selectRecent,selectUnanswered, selectTrending,setUp})(TopicList);