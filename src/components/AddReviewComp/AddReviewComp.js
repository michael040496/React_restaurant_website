import React, { Component } from "react"
import StarRatings from "react-star-ratings"
import "./AddReviewComp.css"
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

class AddReviewComp extends Component {
    constructor() {
        super()
        this.state = {
            reviewtext: "",
            rating: 0
        }
        this.changeRating = this.changeRating.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    changeRating(newRating, name) {
        this.setState({
            rating: newRating
        })
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value })
    }

    handleSubmit = event => {
        event.preventDefault()

        const review = {
            reviewtext: this.state.reviewtext,
            rating: this.state.rating
        }

        const proxyurl = "https://cors-anywhere.herokuapp.com/"
        fetch(proxyurl + "http://reviewsdb.herokuapp.com/review", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                reviewtext: this.state.reviewtext,
                rating: this.state.rating,
                active: 1
            })
        })

        console.log(review)
        window.location = "/"
    }

    render() {
        return (
            <div className="container" id="formContainer">
                <Card>
                    <CardBody>
                        <legend id="cardTitle">Your Review</legend>
                        <Form onSubmit={this.handleSubmit}>
                            <FormGroup>
                                <Input
                                    type="textarea"
                                    name="reviewtext"
                                    id="textreview"
                                    style={{ height: 200 }}
                                    onChange={this.handleChange}
                                />
                            </FormGroup>
                            <FormGroup>
                                <StarRatings
                                    rating={this.state.rating}
                                    starRatedColor="yellow"
                                    starHoverColor="yellow"
                                    changeRating={this.changeRating}
                                    numberOfStars={5}
                                    starDimension="40px"
                                    name="rating"
                                />
                            </FormGroup>
                            <Button type="submit" className="buttons">
                                Add Review
                            </Button>
                        </Form>
                    </CardBody>
                </Card>
            </div>
        )
    }
}

export default AddReviewComp
