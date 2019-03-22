import React, { Component } from 'react';

class App extends React.Component {
  state = {
    isLoading: true,
    restaurants: [],
    error: null
  };

  fetchRestaurants() {
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
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
  }
  render() {
    const { isLoading, restaurants, error } = this.state;
    return (
      <React.Fragment>
        <h1>Restaurants</h1>
        {error ? <p>{error.message}</p> : null}
        {!isLoading ? (
          restaurants.map(restaurant => {
            const { restaurant_id, name, address,category, description, created_at, updated_at, active, user_id } = restaurant;
            return (
              <div key={restaurant_id}>
                <p>Name: {name}</p>
                <p>Address: {address}</p>
                <p>Category: {category}</p>
                <p>Description: {description}</p>
                <p>Created At: {created_at}</p >
                <hr />
              </div>
            );
          })
        ) : (
          <h3>Loading...</h3>
        )}
      </React.Fragment>
    );
  }
}



export default App;


