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

class Frontpage extends React.Component {
    state = {
        isLoading: true,
        restaurants: [],
        avg: [],
        reviews: [],
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

    fetchReviews() {
        const proxyurl = "https://cors-anywhere.herokuapp.com/"

        fetch(proxyurl + "http://reviewsdb.herokuapp.com/review")
            .then(response => response.json())
            .then(data =>
                this.setState({
                    reviews: data,
                    isLoading: false
                })
            )
            .catch(error => this.setState({ error, isLoading: false }))
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

    componentDidMount() {
        this.fetchRestaurants()
        this.fetchRating()
        this.fetchReviews()
    }

    test(avg, restaurant) {
        let a = 0

        this.state.avg.find(res =>
            res.restaurant_id === restaurant.restaurant_id
                ? (a = res.avgrating)
                : (a = 0)
        )

        var rounded = Math.round(a * 10) / 10

        return rounded
    }

    top5() {
        var avgall = []
        var avg5 = []
        var cnt = 0
        var top5 = []


        this.state.avg.map(res =>
            avgall.push(res.restaurant_id)
        )

        for (let i = 0; i < 5; i++) {
            avg5.push(avgall[i])
        }

        for (let i = 0; i < avg5.length; i++) {
            this.state.restaurants.find(restaurant =>
                avg5[i] === restaurant.restaurant_id ? top5.push(restaurant) : 0
            )
        }
        return top5
    }

    top5rev() {
        var revall = []

        var cnt = 0
        var top5 = []

        this.state.reviews.map(res =>
            revall.push(res.review_id, res.updated_at)
        )

        let except = []
        var revs = this.state.reviews
        let recent = revs[0]

        for (let i = 0; i < 5; i++) {
            let ind = 0
            for (let j = 0; j < revs.length - 1; j++) {
                if (
                    revs[ind].updated_at < revs[j + 1].updated_at &&
                    !except.includes(ind) &&
                    !except.includes(j + 1)
                ) {
                    ind = j + 1
                }
            }

            except.push(ind)
        }

        var rev5 = []
        for (let i = 0; i < revs.length; i++) {
            cnt++
            if (cnt <= except.length) rev5.push(revs[except[i]].review_id)
        }

        console.log(rev5)
        for (let i = 0; i < rev5.length; i++) {
            this.state.reviews.map(rev =>
                rev5[i] === rev.review_id ? top5.push(rev) : 0
            )
        }

        return top5
    }

    findRestaurant(rev) {
        let a
        this.state.restaurants.find(res =>
            res.restaurant_id === rev.restaurant_id ? (a = res.name) : (a = 0)
        )
        return a
    }

    render() {
        let top5res = this.top5()
        let toprev = this.top5rev()
        return (
            <React.Fragment>
                <h1>Top 5 restaurants in your area</h1>
                <Row>
                    {top5res.map(restaurant => (
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
                                    rating={this.test(
                                        this.state.avg,
                                        restaurant
                                    )}
                                    starDimension="30px"
                                    starSpacing="5px"
                                />
                                <h4>{restaurant.category}</h4>
                                <CardText>{restaurant.description}</CardText>
                                <Button href="/Review">Review</Button>
                            </Card>
                        </Col>
                    ))}
                </Row>

                <h1>Recent 5 reviews</h1>
                <Row>
                    {toprev.map(rev => (
                        <Col sm="4">
                            <Card body>
                                <h4>{this.findRestaurant(rev)}</h4>
                                <StarRatings
                                    rating={Math.round(rev.rating * 10) / 10}
                                    starDimension="10px"
                                    starSpacing="5px"
                                />

                                <CardText>{rev.reviewtext}</CardText>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </React.Fragment>
        )
    }
}

export default Frontpage
