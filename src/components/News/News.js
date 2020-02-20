import React from "react";
import { connect } from "react-redux";
import NewsCard from "./NewsCard";

export const News = ({ news }) => {
  if (news) {
    return (
      <div className="newsBody">
        <div className="articlesCards">
          <div className="cardArticle">
            {news.map(article => (
              <NewsCard key={article.title} article={article} />
            ))}
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="loading_div">
        <div className="spinner"></div>
        <h1 className="loading">Loading Article...</h1>
      </div>
    );
  }
};

export default connect(state => ({ news: state.news }))(News);
