import React, { Component } from "react";
import NewsCard from "./NewsCard";
import axios from "axios";

export class News extends Component {
  constructor(props) {
    super(props);
    this.state = { news: "" };
  }

  componentDidMount() {
    this.getNews();
  }

  async getNews() {
    const newsArray = [];
    const url =
      "https://newsapi.org/v2/top-headlines?" +
      "country=us&" +
      "apiKey=fe8a84b676c84ea387ddba2872f9c0d6";
    const res = await axios.get(url).then(res => {
      const news = res.data.articles;
      news.forEach(article => {
        const newsCard = (
          <NewsCard key={article.publishedAt} article={article} />
        );
        newsArray.push(newsCard);
      });
      this.setState({ news: newsArray });
    });
  }

  renderNews() {
    if (this.state.news) {
      return (
        <div className="cardArticle">
          {this.state.news.map(article => article)}
        </div>
      );
    } else {
      return (
        <div className="loading_div">
          <h1 className="loading">Loading Article...</h1>
        </div>
      );
    }
  }

  render() {
    return (
      <div className="newsBody">
        <div className="articlesCards">{this.renderNews()}</div>
      </div>
    );
  }
}

export default News;
