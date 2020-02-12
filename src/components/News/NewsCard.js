import React, { Component } from "react";

export class NewsCard extends Component {
  render() {
    return (
      <div>
        <img
          src={this.props.article.urlToImage}
          alt="img"
          width="300"
          height="300"
        />
        <h1>{this.props.article.title}</h1>
        <p>{this.props.article.description}</p>
      </div>
    );
  }
}

export default NewsCard;
