import React from 'react';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      searchQuery: '',
      cityData: ''
    }
  }

  getCity = async (event) => {
    event.preventDefault();

    let cityUrl = `https://eu1.locationiq.com/v1/search.php?key=pk.ac59253e8de69d4b78490835a252e7bb&q=${this.state.searchQuery}&format=json`;

    let cityResult = await axios.get(cityUrl);

    this.setState({
      cityData: cityResult.data[0]
    })
  }

  updateSearchQuery = (event) => {
    this.setState({
      searchQuery: event.target.value
    })
  }

  render() {
    return (
      <>
        <h1>City Explorer</h1>

        <Form onSubmit={this.getCity}>
          <Form.Group controlId="formBasicEmail">
            <Form.Control type="text" placeholder="Enter City Name" onChange={this.updateSearchQuery} />
          </Form.Group>
          <Button variant="primary" type="submit">
            Explore!
          </Button>
        </Form>

        <ListGroup>
          <ListGroup.Item>Results</ListGroup.Item>
          <ListGroup.Item variant="primary">{this.state.cityData.display_name}</ListGroup.Item>
          <ListGroup.Item variant="secondary">{this.state.cityData.lat}</ListGroup.Item>
          <ListGroup.Item variant="success">{this.state.cityData.lon}</ListGroup.Item>
        </ListGroup>
      </>

    );
  }
}

export default App;
