import React from 'react';
import axios from 'axios';
import './App.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
// import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';
import Alert from 'react-bootstrap/Alert';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      searchQuery: '',
      cityData: '',
      displayMap: false,
      errorMessage: false,
      errorCode:''
    }
  }

  getCity = async (event) => {
    event.preventDefault();

    let cityUrl = `https://eu1.locationiq.com/v1/search.php?key=pk.ac59253e8de69d4b78490835a252e7bb&q=${this.state.searchQuery}&format=json`;

    try {

      let cityResult = await axios.get(cityUrl);

      this.setState({
        cityData: cityResult.data[0],
        displayMap: true,
        errorMessage: false
      })
    }
    catch(error) {
      this.setState({
        displayMap: false,
        errorMessage: true,
        errorCode: error
      })
    }
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

        {/* <ListGroup>
          <ListGroup.Item>Results</ListGroup.Item>
          <ListGroup.Item variant="primary">{this.state.cityData.display_name}</ListGroup.Item>
          <ListGroup.Item variant="secondary">{this.state.cityData.lat}</ListGroup.Item>
          <ListGroup.Item variant="success">{this.state.cityData.lon}</ListGroup.Item>
        </ListGroup>

        {this.state.displayMap &&

        <img src={`https://maps.locationiq.com/v3/staticmap?key=pk.ac59253e8de69d4b78490835a252e7bb&center=${this.state.cityData.lat},${this.state.cityData.lon}`} alt=''/>
        } */}

        {this.state.displayMap &&

          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={`https://maps.locationiq.com/v3/staticmap?key=pk.ac59253e8de69d4b78490835a252e7bb&center=${this.state.cityData.lat},${this.state.cityData.lon}`} />
            <Card.Body>
              <Card.Title>{this.state.cityData.display_name}</Card.Title>
              <Card.Text>
                {this.state.cityData.lat} <br></br>
                {this.state.cityData.lon}
              </Card.Text>
            </Card.Body>
          </Card>
        }

        {this.state.errorMessage &&

        <Alert variant="danger">
        Please Enter a Valid City Name, Error Code: 
        {this.state.errorCode.response.status}
      </Alert>
        }
      </>

    );
  }
}

export default App;
