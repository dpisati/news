import React from "react";
import { connect } from "react-redux";
import NewsCard from "./NewsCard";

function actionTest(article) {
  return {
    type: "SEARCH_ACTIVE",
    payload: "Search in use",
    log: article
  };
}

export const News = ({ news, dispatch }) => {
  if (news) {
    return (
      <div className="newsBody">
        <div className="articlesCards">
          <div className="cardArticle">
            {news.map(article => (
              <NewsCard
                key={article.title}
                article={article}
                action={() => dispatch(actionTest(article))}
              />
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
