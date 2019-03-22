import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./App"
import Restaurant from "./Restaurant"
import Frontpage from "./Frontpage"
import "semantic-ui-css/semantic.min.css"
import * as serviceWorker from "./serviceWorker"
import MetisMenu from "react-metismenu"
import { BrowserRouter } from "react-router-dom"
import { Route, Link } from "react-router-dom"
import RegisterForm from "./components/RegisterForm/RegisterFormComp"
import AddReviewComp from "./components/AddReviewComp/AddReviewComp"
import AddRestaurantComp from "./components/AddRestaurantComp/AddRestaurantComp"

const content = [
    {
        icon: "icon-class-name",
        label: "Home",
        to: "/"
    },
    {
        icon: "icon-class-name",
        label: "Menu",
        content: [
            {
                icon: "icon-class-name",
                label: "Restaurants",
                content: [
                    {
                        icon: "icon-class-name",
                        label: "Show all",
                        to: "/Restaurant"
                    },
                    {
                        icon: "icon-class-name",
                        label: "Add restaurant",
                        to: "/AddRestaurant"
                    }
                ]
            },
            {
                icon: "icon-class-name",
                label: "Register user",
                to: "/Register"
            }
        ]
    }
]
ReactDOM.render(
    <BrowserRouter>
        <MetisMenu content={content} activeLinkFromLocation />
        <Route exact path="/" component={Frontpage} />
        <Route path="/Restaurant" component={Restaurant} />
        <Route path="/Register" component={RegisterForm} />
        <Route path="/Review" component={AddReviewComp} />
        <Route path="/AddRestaurant" component={AddRestaurantComp} />
    </BrowserRouter>,
    document.getElementById("root")
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
