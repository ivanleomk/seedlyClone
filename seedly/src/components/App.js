//Library Imports
import React from 'react';
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