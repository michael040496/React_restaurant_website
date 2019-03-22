import React, { Component } from "react"
import {
    Button,
    Card,
    CardBody,
    legend,
    Form,
    FormGroup,
    Label,
    Input
} from "reactstrap"

class AddRestaurantComp extends Component {
    constructor() {
        super()
        this.state = {
            name: "",
            address: "",
            category: "",
            description: ""
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value })
    }

    handleSubmit = event => {
        event.preventDefault()

        const restaurant = {
            name: this.state.restaurant,
            address: this.state.address,
            category: this.state.category,
            description: this.state.description
        }

        console.log(restaurant)

        const proxyurl = "https://cors-anywhere.herokuapp.com/"
        fetch(proxyurl + "http://reviewsdb.herokuapp.com/restaurant", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: this.state.restaurant,
                address: this.state.address,
                category: this.state.category,
                description: this.state.description,
                active: 1
            })
        })

        alert("The restaurant is added")
        window.location = "/"
       
    }

    render() {
        return (
            <div className="container">
                <Card>
                    <CardBody>
                        <legend id="cardTitle">ADD A NEW RESTAURANT</legend>
                        <Form onSubmit={this.handleSubmit}>
                            <FormGroup>
                                <Label for="restaurantName">
                                    Restaurant Name
                                </Label>
                                <Input
                                    type="text"
                                    name="restaurant"
                                    id="restaurantName"
                                    onChange={this.handleChange}
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label for="address">Address</Label>
                                <Input
                                    type="text"
                                    name="address"
                                    id="address"
                                    onChange={this.handleChange}
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label for="category">Category</Label>
                                <Input
                                    type="text"
                                    name="category"
                                    id="category"
                                    onChange={this.handleChange}
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label for="description">Description</Label>
                                <Input
                                    type="textarea"
                                    name="description"
                                    id="description"
                                    onChange={this.handleChange}
                                />
                            </FormGroup>
                            <Button type="submit" className="buttons">
                                Add Restaurant
                            </Button>
                        </Form>
                    </CardBody>
                </Card>
            </div>
        )
    }
}

export default AddRestaurantComp
