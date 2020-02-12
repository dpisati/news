import React, { Component } from "react";
import NewsCard from "./NewsCard";

export class News extends Component {
  constructor(props) {
    super(props);
    this.state = { news: "" };
  }

  // componentDidMount() {
  //   const news = [];
  //   const url =
  //     "https://newsapi.org/v2/top-headlines?country=us&apiKey=fe8a84b676c84ea387ddba2872f9c0d6";
  //   fetch(url)
  //     .then(response => {
  //       return response.json();
  //     })
  //     .then(data => {
  //       const result = data.articles;
  //       console.log(news.props.article);

  //       result.forEach(article => {
  //         const newsCard = (
  //           <NewsCard key={article.publishedAt} article={article} />
  //         );
  //         news.push(newsCard);
  //         this.setState({ news: newsCard });
  //       });
  //     })
  //     .catch(err => {
  //       console.log("Error fetching data, ", err);
  //     });
  // }

  // componentDidMount(trendingResults) {
  //   const urlString =
  //     "https://newsapi.org/v2/top-headlines?country=us&apiKey=fe8a84b676c84ea387ddba2872f9c0d6";
  //   $.ajax({
  //     url: urlString,
  //     success: trendingResults => {
  //       const results = trendingResults.results;
  //       var movieRows = [];

  //       results.forEach(movie => {
  //         const movieRow = <NewsCard key={movie.id} movie={movie} />;
  //         movieRows.push(movieRow);
  //       });

  //       this.setState({ rows: movieRows });
  //     },
  //     error: (xhr, status, err) => {
  //       console.error("failed to fetch", xhr, status, err);
  //     }
  //   });
  // }

  render() {
    return (
      <div className="newsBody">
        <h1>Hello World</h1>
      </div>
    );
  }
}

export default News;
