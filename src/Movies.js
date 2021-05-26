import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import 'bootstrap/dist/css/bootstrap.min.css';

class Movies extends React.Component {

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         weatherArray: this.props.weatherData
    //     }
    // }

    render() {
        return (
            <>
                {this.props.moviesData.length!== 0 && this.props.showMovies &&
                 
                    <ListGroup>
                        <ListGroup.Item>Top Movie</ListGroup.Item>
                        <ListGroup.Item variant="primary">Title: {this.props.moviesData[0].title}</ListGroup.Item>
                        <ListGroup.Item variant="secondary">Overview: {this.props.moviesData[0].overview}</ListGroup.Item>
                        <ListGroup.Item variant="success">Average Votes: {this.props.moviesData[0].average_votes}</ListGroup.Item>
                        <ListGroup.Item variant="danger">Total Votes: {this.props.moviesData[0].total_votes}</ListGroup.Item>
                        <ListGroup.Item variant="warning">Image Url: {this.props.moviesData[0].image_url}</ListGroup.Item>
                        <ListGroup.Item variant="info">Popularity: {this.props.moviesData[0].popularity}</ListGroup.Item>
                        <ListGroup.Item variant="light">Release Date: {this.props.moviesData[0].released_on}</ListGroup.Item>
                    </ListGroup>
                }
                {this.props.showMovies == false &&

                    <ListGroup>

                        <ListGroup.Item action variant="danger">
                            {this.props.moviesData}
                        </ListGroup.Item>

                    </ListGroup>
                }

            </>
        )
    }

}

export default Movies;