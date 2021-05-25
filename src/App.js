import React from 'react';
import axios from 'axios';
import './App.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Alert from 'react-bootstrap/Alert';
import 'bootstrap/dist/css/bootstrap.min.css';
import Weather from './Weather';
import dotenv from 'dotenv';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      searchQuery: '',
      cityData: '',
      displayMap: false,
      errorMessage: false,
      errorCode:'',
      weatherItem:[],
      showWeather:false,
      latitude:'',
      longitude:'',
    }
  }

  getCity = async (event) => {
    event.preventDefault();

    
    let serverRoute = process.env.REACT_APP_SERVER;
    

    // const url = `http://localhost:3001/weather?city=amman&lon=35.9239625&lat=31.9515694`;
    
    
    let cityUrl = `https://eu1.locationiq.com/v1/search.php?key=pk.ac59253e8de69d4b78490835a252e7bb&q=${this.state.searchQuery}&format=json`;
    
      
    try {
      

      
      let cityResult = await axios.get(cityUrl);
      
      
 
      this.setState({
        cityData: cityResult.data[0],
        displayMap: true,
        errorMessage: false,
        // weatherItem:importedData.data,
        // showWeather:true,
        latitude: cityResult.data[0].lat,
        longitude: cityResult.data[0].lon
      })
      

    }
    catch(error) {
      this.setState({
        displayMap: false,
        errorMessage: true,
        errorCode: error,
        // showWeather:false
      })
    }
    try{
      const url = `${serverRoute}/weather?city=${this.state.searchQuery}&lon=${this.state.longitude}&lat=${this.state.latitude}`;
      let importedData = await axios.get(url);
      
      this.setState({
        weatherItem:importedData.data,
        showWeather:true,
        // latitude: this.state.cityData.lat,
        // longitude: this.state.cityData.lon
      })


    } catch(error){
      this.setState({
        weatherItem:error.response,
        showWeather:false
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

        {this.state.displayMap &&
        <Weather weatherData={this.state.weatherItem} showWeather={this.state.showWeather}></Weather>}
      </>

    );
  }
}

export default App;
