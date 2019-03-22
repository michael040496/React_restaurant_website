import React, { Component } from "react"
import "./OwnerDashboard.css"
import AddRestaurantComp from "../../components/AddRestaurant/AddRestaurant"
import AddReviewComp from "../../components/AddReviewComponent/AddReviewComp"

class OwnerDashboard extends Component {

    render() {
        return (
            <React.Fragment>
                <AddReviewComp/>
            </React.Fragment>
        )
    }
}

export default OwnerDashboard
