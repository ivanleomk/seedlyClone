import React from 'react';
import { Grid } from "@chakra-ui/core";

//Component Imports
import UserNavBar from './UserNavBar';
import DesktopImage from './DesktopImage';
import Sidebar from './Sidebar';
import Topics from './Topic';;

class App extends React.Component {
    render(){
        return (
            <div>
                <UserNavBar />
                <DesktopImage />
                <div className = "bodyTopics">
                    <Sidebar/>
                    <Topics/>
                </div>
            </div>

        );
    }
}

export default App;