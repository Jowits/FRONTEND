import React from "react";
import API from "../adapters/API.js";
import CommentCard from "../components/CommentCard";

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
          <CommentCard key={review.id} review={review} />
        ))}
      </div>
    );
  }
}

export default ReviewContainer;
