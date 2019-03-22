import React, { Component } from "react"
import "./OwnerDashboard.css"
import AddRestaurantComp from "../../components/AddRestaurant/AddRestaurant"

class OwnerDashboard extends Component {

    render() {
        return (
            <React.Fragment>
                <AddRestaurantComp/>
            </React.Fragment>
        )
    }
}

export default OwnerDashboard
