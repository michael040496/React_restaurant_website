import React, {Component} from 'react';
import LandingPage from './containers/LandingPage/LandingPage'
import OwnerDashboard from './containers/OwnerDashboard/OwnerDashboard'

class App extends Component{
    render(){
        return(
            <div>
                <OwnerDashboard/>
            </div>
        )
    }
}

export default App;