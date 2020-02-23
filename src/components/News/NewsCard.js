import React, { Component } from "react";

export class NewsCard extends Component {
  render() {
    if (!this.props.fetched) {
      return (
        <div className="loading_div">
          <div className="spinner"></div>
        </div>
      );
    } else {
      return (
        <div className="card">
          <img
            className="image"
            src={this.props.article.urlToImage}
            alt="img"
          />
          <h3 className="cardTitle">
            {this.props.article.title.substring(
              0,
              this.props.article.title.indexOf(" - ")
            )}
          </h3>
          <p className="cardBody">
            {this.props.article.description.substring(0, 80) + "..."}
          </p>
          <div className="btn-container">
            <button
              className="view_button"
              onClick={() => this.props.action(this.props.article)}
            >
              View More
            </button>
          </div>
        </div>
      );
    }
  }
}

export default NewsCard;
