import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = '5pJv5DMkGaLdDzps9u3mJdA1OeJ1vbrR';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here
export default class LatestMovieReviewsContainer extends Component {
    state = { reviews: [] };
  
    render() {
      return <div className='latest-movie-reviews'><MovieReviews reviews={this.state.reviews} /></div>;
    }
    
    componentDidMount() {
      fetch(URL)
      .then(res => res.json())
      .then(json => this.setState({ reviews: json.results }))
    }
  }