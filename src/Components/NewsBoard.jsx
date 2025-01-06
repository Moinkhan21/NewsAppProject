/* eslint-disable react/prop-types */
// Importing necessary hooks from React
import { useEffect, useState } from "react"
// Importing the NewsItem component to display individual news items
import NewsItem from "./Newsitem";

const NewsBoard = ({ category }) => {

  // State to hold an array of news articles fetched from the API
  const [articles, setArticles] = useState([]);

  // useEffect hook to fetch news articles whenever the `category` prop changes
  useEffect(() => {
    // API URL with category query parameter dynamically set based on the prop
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`;
    
    // Fetching data from the API and setting the articles state with the response
    fetch(url)
      .then(response => response.json())
      .then(data => setArticles(data.articles));
  }, [category]); // Dependency array to trigger effect on category change

  return (
    <div>
      {/* Title for the news section, with styling for a centered badge */}
      <h2 className="text-center mt-3">
        Latest <span className="badge bg-danger">News</span>
      </h2>
      
      {/* Mapping over the articles array to display each news item */}
      {articles.map((news, index) => {
        return (
          <NewsItem 
            key={index}                 // Unique key for each news item
            title={news.title}          // Passing title prop to NewsItem
            description={news.description}  // Passing description prop
            src={news.urlToImage}       // Passing image URL prop
            url={news.url}              // Passing URL prop for the news link
          />
        );
      })}
    </div>
  )
}

export default NewsBoard;
