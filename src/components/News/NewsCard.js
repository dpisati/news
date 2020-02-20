import React, { Component } from "react";

export class NewsCard extends Component {
  render() {
    return (
      <div className="card">
        {/* <img className="image" src={this.props.article.urlToImage} alt="img" /> */}

        <h3 className="cardTitle">{this.props.article.title}</h3>
        <p className="cardBody">{this.props.article.description}</p>
        <button onClick={() => this.props.action(this.props.article)}>
          Click me
        </button>
      </div>
    );
  }
}

export default NewsCard;
