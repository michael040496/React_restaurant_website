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

class RegisterForm extends Component {
    constructor() {
        super()
        this.state = {
            username: "",
            email: "",
            password: "",
            role: "",
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value })
        this.setState({
            [event.target.name]:
                event.target.name === "role"
                    ? parseInt(event.target.value)
                    : event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault()
        
        const user = {
            username: this.state.username,
            email: this.state.email,
            password: this.state.password,
            role: this.state.role
        }

        console.log(user)

        const proxyurl = "https://cors-anywhere.herokuapp.com/"
        fetch(proxyurl + "http://reviewsdb.herokuapp.com/user", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username: this.state.username,
                email: this.state.email,
                password: this.state.password,
                role: this.state.role,
                active: 1
            })
        })

        alert("The user is registered")
    }

    render() {
        return (
            <div className="container">
                <Card>
                    <CardBody>
                        <legend id="cardTitle">
                            Register a new user
                        </legend>
                        <Form onSubmit={this.handleSubmit}>
                            <FormGroup>
                                <Label for="username">
                                    Username
                                </Label>
                                <Input
                                    type="text"
                                    name="username"
                                    id="username"
                                    onChange={this.handleChange}
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label for="email">Email</Label>
                                <Input
                                    type="email"
                                    name="email"
                                    id="email"
                                    onChange={this.handleChange}
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label for="password">Password</Label>
                                <Input
                                    type="password"
                                    name="password"
                                    id="password"
                                    onChange={this.handleChange}
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label for="role">Role</Label>
                                <Input
                                    type="select"
                                    name="role"
                                    onChange={this.handleChange}
                                >
                                    <option />
                                    <option value="0">Owner</option>
                                    <option value="1">Reviewer</option>
                                </Input>
                            </FormGroup>
                            <Button type="submit" className="buttons">Add Restaurant</Button>
                        </Form>
                       
                    </CardBody>
                </Card>
            </div>
        )
    }
}

export default RegisterForm
