import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import 'bootstrap/dist/css/bootstrap.min.css';

class Weather extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            weatherArray: this.props.weatherData
        }
    }

    render() {
        return (
            <>

                <ListGroup>

                    <ListGroup.Item action variant="success">
                        {this.state.weatherArray[0].date} <br></br>
                        {this.state.weatherArray[0].description}
                    </ListGroup.Item>
                    <ListGroup.Item action variant="danger">
                        {this.state.weatherArray[1].date} <br></br>
                        {this.state.weatherArray[1].description}
                    </ListGroup.Item>
                    <ListGroup.Item action variant="warning">
                        {this.state.weatherArray[2].date} <br></br>
                        {this.state.weatherArray[2].description}
                    </ListGroup.Item>

                </ListGroup>

            </>
        )
    }

}

export default Weather;