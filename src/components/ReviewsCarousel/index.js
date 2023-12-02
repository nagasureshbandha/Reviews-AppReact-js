import {Component} from 'react'

import './index.css'

class ReviewsCarousel extends Component {
  state = {
    activeReviewIndex: 0,
  }

  onClickRightArrow = () => {
    const {activeReviewIndex} = this.state
    const {reviewsList} = this.props

    if (activeReviewIndex < reviewsList.length - 1) {
      this.setState(prevState => ({
        activeReviewIndex: prevState.activeReviewIndex + 1,
      }))
    }
  }

  renderActiveImageReview = review => {
    const {imgUrl, username, companyName, description} = review

    return (
      <div className="review-container">
        <h1 className="heading">Reviews</h1>
        <img alt={username} src={imgUrl} />

        <p className="username">{username}</p>
        <p className="company">{companyName}</p>
        <p className="description">{description}</p>
      </div>
    )
  }

  onClicLeftArrow = () => {
    const {activeReviewIndex} = this.state
    if (activeReviewIndex > 0) {
      this.setState(prevState => ({
        activeReviewIndex: prevState.activeReviewIndex - 1,
      }))
    }
  }

  render() {
    const {reviewsList} = this.props
    const {activeReviewIndex} = this.state
    const currentReviewDetails = reviewsList[activeReviewIndex]

    return (
      <div className="app-container">
        <button
          type="button"
          onClick={this.onClicLeftArrow}
          data-testId="leftArrow"
          className="arrow-button"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
            alt="left arrow"
            className="arrow"
          />
        </button>

        {this.renderActiveImageReview(currentReviewDetails)}

        <button
          className="arrow-button"
          type="button"
          onClick={this.onClickRightArrow}
          data-testId="rightArrow"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png "
            alt="right arrow"
            className="arrow"
          />
        </button>
      </div>
    )
  }
}
export default ReviewsCarousel
