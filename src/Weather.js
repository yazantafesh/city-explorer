import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import 'bootstrap/dist/css/bootstrap.min.css';

class Weather extends React.Component {

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         weatherArray: this.props.weatherData
    //     }
    // }

    render() {
        return (
            <>

                {this.props.showWeather &&

                    <ListGroup>

                        <ListGroup.Item action variant="success">
                            {this.props.weatherData[0].date} <br></br>
                            {this.props.weatherData[0].description}
                        </ListGroup.Item>
                        <ListGroup.Item action variant="danger">
                            {this.props.weatherData[1].date} <br></br>
                            {this.props.weatherData[1].description}
                        </ListGroup.Item>
                        <ListGroup.Item action variant="warning">
                            {this.props.weatherData[2].date} <br></br>
                            {this.props.weatherData[2].description}
                        </ListGroup.Item>

                    </ListGroup>
                }
                {this.props.showWeather == false &&

                    <ListGroup>

                        <ListGroup.Item action variant="danger">
                            {this.props.weatherData.data}
                        </ListGroup.Item>

                    </ListGroup>
                }
            </>
        )
    }

}

export default Weather;