import React from 'react';
import NavHeader from '../../components/navHeader/navHeader'
import button from '../../components/button/button'
import RegisterForm from '../../components/RegisterForm/RegisterForm'

class LandingPage extends React.Component{
    render(){
        return(
            <React.Fragment>
                <RegisterForm/>
            </React.Fragment>
        )
    }
}

export default LandingPage;