//Library Imports
import React from 'react';
import { connect } from 'react-redux';

//Action Imports


//Component Imports
import UserNavBar from './UserNavBar';
import DesktopImage from './DesktopImage';
import Sidebar from './Sidebar';
import TopicList from './TopicList';



class App extends React.Component {

    render(){
        return (
            <div>
                <button >Testing</button>
                <UserNavBar />
                <DesktopImage />
                <div className = "bodyTopics">
                    <Sidebar/>
                    <TopicList/>
                </div>
            </div>

        );
    }
}

export default App;