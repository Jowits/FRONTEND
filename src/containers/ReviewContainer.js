import React from "react";
import API from "../adapters/API.js";
import ReviewCard from "../components/ReviewCard";

class ReviewContainer extends React.Component {
  state = {
    reviews: []
  };

  componentDidMount() {
    API.fetchReviews().then(reviews => this.setState({ reviews }));
  }
  render() {
    return (
      <div className="master-detail-element sidebar">
        {this.state.reviews.map(review => (
          <ReviewCard review={review} />
        ))}
      </div>
    );
  }
}

export default ReviewContainer;
