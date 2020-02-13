import React, { Component } from "react";

export class NewsCard extends Component {
  render() {
    return (
      <div className="card">
        <img src={this.props.article.urlToImage} alt="img" />
        <h3 className="title">{this.props.article.title}</h3>
        <p>{this.props.article.description}</p>
      </div>
    );
  }
}

export default NewsCard;
