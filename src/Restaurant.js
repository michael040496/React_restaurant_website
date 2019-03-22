import React,{Component} from 'react';
//import { Grid, Card, Icon, Image , Button} from 'semantic-ui-react'
import 'bootstrap/dist/css/bootstrap.css';
import { CardDeck, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import StarRatings from 'react-star-ratings';



class Restaurant extends React.Component {

  /*constructor(props){
    super(props);
    this.state = {
      news:[],
    };
  } */
    
    state = {
    isLoading: true,
    restaurants: [],
    avg: [],
    error: null
  };


     
  /*fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      this.setState({
        news: data.articles
      })
      console.log(data);
    })
    .catch((error)=>{
      console.log('error while trying to retrieve data')
    })
}*/
    
fetchRestaurants() {
    const proxyurl = "https://cors-anywhere.herokuapp.com/"
    
    fetch(proxyurl + 'http://reviewsdb.herokuapp.com/restaurant')
      .then(response => response.json())
      .then(data =>
        this.setState({
          restaurants: data,
          isLoading: false,
        })
      )
      .catch(error => this.setState({ error, isLoading: false }));
}
    
componentDidMount() {
    this.fetchRestaurants();
    this.fetchRating();
  }

fetchRating() {
    const proxyurl = "https://cors-anywhere.herokuapp.com/"
    
    fetch(proxyurl + 'http://reviewsdb.herokuapp.com/avg')
      .then(response => response.json())
      .then(data =>
        this.setState({
          avg: data,
          isLoading: false,
        })
      )
      .catch(error => this.setState({ error, isLoading: false }));
}

test(avg,restaurant) {    
    let a = 0
        
    /*this.state.avg.map((res) => (
        console.log("test")
    ));*/
    
    this.state.avg.find((res) => (
        
        (res.restaurant_id === restaurant.restaurant_id) ? a = res.avgrating : a = 0
    ));
    console.log(restaurant.restaurant_id)
    console.log(a)
    var rounded = Math.round( a * 10 ) / 10;
    //console.log(a)
    //console.log(2)
    return rounded
    
    //return rounded.toString();
}
    
                          
    //let a = avg.find(res => res.restaurant_id === restaurant.restaurant_id);
    
   

render() {
  //const { isLoading, avg, error } = this.state;    
    return (
    <Row>
            
      {this.state.restaurants.map((restaurant) => (
      
            <Col  sm="4">
                <Card body>
                    <div className="mapouter">
                        <div align="center" className="gmap_canvas">
                            <iframe 
                                title="map"
                                width="270" 
                                height="270" 
                                id="gmap_canvas" 
                                src={"https://maps.google.com/maps?q=" + restaurant.address + "&t=&z=13&ie=UTF8&iwloc=&output=embed"} 
                                frameBorder="0" 
                                scrolling="no" 
                                marginHeight="0" 
                                marginWidth="0">
                            </iframe>
                        </div>
                    </div>
                    <CardTitle><h2>{restaurant.name} </h2> </CardTitle>
                    
                    
                   
                    <StarRatings
                        
                        rating={this.test(this.state.avg, restaurant)}
                        starDimension="30px"
                        starSpacing="15px"
                    />
                    <h4>{restaurant.category}</h4>
                    <CardText>{restaurant.description}</CardText>
                    <Button>Edit</Button>
                </Card>
            </Col>
      
    ))}
      </Row>
  );
    
    
  /*return (
    <Row>
      {this.state.restaurants.map((restaurant) => (
      
            <Col  sm="4">
                <Card body>
                    <div className="mapouter">
                        <div align="center" className="gmap_canvas">
                            <iframe 
                                title="map"
                                width="270" 
                                height="270" 
                                id="gmap_canvas" 
                                src={"https://maps.google.com/maps?q=" + restaurant.address + "&t=&z=13&ie=UTF8&iwloc=&output=embed"} 
                                frameBorder="0" 
                                scrolling="no" 
                                marginHeight="0" 
                                marginWidth="0">
                            </iframe>
                        </div>
                    </div>
                    <CardTitle><h2>{restaurant.name} </h2> </CardTitle>
                    
                    
                   
                    <StarRatings
                        
                        rating={1}
                        starDimension="30px"
                        starSpacing="15px"
                    />
                    <h4>{restaurant.category}</h4>
                    <CardText>{restaurant.description}</CardText>
                    <Button>Edit</Button>
                </Card>
            </Col>
      
    ))}
      </Row>
  ); 
    */
}
   
/*renderItems = () => {
  const { isLoading, restaurants, error } = this.state;    
  return (
    <Card.Group>
      {this.state.restaurants.map((card) => (
        
        <Card
          key={card.restaurant_id}
          image={card.imageUrl}
          header={card.name}
          meta={card.address}
          meta={card.category}
          description={card.description}
      
       />
          ))}
    </Card.Group>
  )
}
*/
        
        
/*
render() {
  const { isLoading, restaurants, error } = this.state;    
    return (
    restaurants.map(restaurant => {
        const { restaurant_id, name, address,category, description, created_at, updated_at, active, user_id } = restaurant;
        return (
        <Row >
            <Col sm="3">
                <Card body>
                    <div className="mapouter">
                        <div align="center" className="gmap_canvas">
                            <iframe 
                                title="map"
                                width="270" 
                                height="270" 
                                id="gmap_canvas" 
                                src={"https://maps.google.com/maps?q=" + {address} + "&t=&z=13&ie=UTF8&iwloc=&output=embed"} 
                                frameBorder="0" 
                                scrolling="no" 
                                marginHeight="0" 
                                marginWidth="0">
                            </iframe>
                        </div>
                    </div>
                    <CardTitle><h2>{name} </h2> </CardTitle>
                    <h4>{category}</h4>
                    <CardText>{description}</CardText>
                    <Button>Edit</Button>
                </Card>
            </Col>
        </Row>
        
        );
        })
    );
            
  }
*/

  



/*
<div className="mapouter">
              <div className="gmap_canvas">
                            <iframe 
                                title="map"
                                width="270" 
                                height="270" 
                                id="gmap_canvas" 
                                src={"https://maps.google.com/maps?q=" + card.address + "&t=&z=13&ie=UTF8&iwloc=&output=embed"} 
                                frameBorder="0" 
                                scrolling="no" 
                                marginHeight="0" 
                                marginWidth="0">
                            </iframe>
                        </div>
          </div>
*/
/*renderItems(){
  return this.state.news.map((item) =>(
    <Card.Group>
      <Cardo
        image={item.urlToImage}
        header={item.author}
        meta={item.url}
        description={item.description}
      />
    </Card.Group>
  ));
}
*/

    /*render() {
        return (
          <Grid.Row>
            {this.renderItems()}
          </Grid.Row>
        );
    }
*/
}

export default Restaurant;