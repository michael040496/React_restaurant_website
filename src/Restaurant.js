import React, { Component } from "react"
import "bootstrap/dist/css/bootstrap.css"
import {
    CardDeck,
    Card,
    Button,
    CardTitle,
    CardText,
    Row,
    Col
} from "reactstrap"
import StarRatings from "react-star-ratings"

class Restaurant extends React.Component {
    state = {
        isLoading: true,
        restaurants: [],
        avg: [],
        error: null
    }

    fetchRestaurants() {
        const proxyurl = "https://cors-anywhere.herokuapp.com/"

        fetch(proxyurl + "http://reviewsdb.herokuapp.com/restaurant")
            .then(response => response.json())
            .then(data =>
                this.setState({
                    restaurants: data,
                    isLoading: false
                })
            )
            .catch(error => this.setState({ error, isLoading: false }))
    }

    componentDidMount() {
        this.fetchRestaurants()
        this.fetchRating()
    }

    fetchRating() {
        const proxyurl = "https://cors-anywhere.herokuapp.com/"

        fetch(proxyurl + "http://reviewsdb.herokuapp.com/avg")
            .then(response => response.json())
            .then(data =>
                this.setState({
                    avg: data,
                    isLoading: false
                })
            )
            .catch(error => this.setState({ error, isLoading: false }))
    }

    test(avg, restaurant) {
        let a = 0

        this.state.avg.find(res =>
            res.restaurant_id === restaurant.restaurant_id
                ? (a = res.avgrating)
                : (a = 0)
        )
        console.log(restaurant.restaurant_id)
        console.log(a)
        var rounded = Math.round(a * 10) / 10
        return rounded
    }

    render() {
        return (
            <Row>
                {this.state.restaurants.map(restaurant => (
                    <Col sm="4">
                        <Card body>
                            <div className="mapouter">
                                <div align="center" className="gmap_canvas">
                                    <iframe
                                        title="map"
                                        width="270"
                                        height="270"
                                        id="gmap_canvas"
                                        src={
                                            "https://maps.google.com/maps?q=" +
                                            restaurant.address +
                                            "&t=&z=13&ie=UTF8&iwloc=&output=embed"
                                        }
                                        frameBorder="0"
                                        scrolling="no"
                                        marginHeight="0"
                                        marginWidth="0"
                                    />
                                </div>
                            </div>
                            <CardTitle>
                                <h2>{restaurant.name} </h2>{" "}
                            </CardTitle>

                            <StarRatings
                                rating={this.test(this.state.avg, restaurant)}
                                starDimension="30px"
                                starSpacing="15px"
                            />
                            <h4>{restaurant.category}</h4>
                            <CardText>{restaurant.description}</CardText>
                            <Button href="/Review">Review</Button>
                        </Card>
                    </Col>
                ))}
            </Row>
        )
    }
}

export default Restaurant
