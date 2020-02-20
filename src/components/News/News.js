import React from "react";
import { connect } from "react-redux";
import NewsCard from "./NewsCard";

export const News = ({ news }) => {
  if (news) {
    console.log("NEWS", news[0].news);
    return (
      <div className="newsBody">
        <div className="articlesCards">
          <div className="cardArticle">
            {news[0].news.map(article => (
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

// export const News = ({ news }) => {
//   return (
//     <div className="newsBody">
//       {console.log("from component NEWS", news[0].news[0])}
//       <div className="articlesCards">{renderNews(news[0].news[0])}</div>
//     </div>
//   );
// };

export default connect(state => ({ news: state }))(News);
