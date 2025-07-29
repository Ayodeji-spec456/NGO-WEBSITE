import { useEffect, useState } from "react";
import "./Events.css";
import axios from "axios";

const Events = () => {
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const [query, setQuery] = useState("");

  // Keywords to randomize search
  const keywords = [
    "disease",
    "virus",
    "health",
    "pandemic",
    "infection",
    "epidemic",
    "covid",
    "vaccine",
  ];

  useEffect(() => {
    // Set a random query once on mount
    const randomKeyword = keywords[Math.floor(Math.random() * keywords.length)];
    setQuery(randomKeyword);
  }, []);

  useEffect(() => {
    if (query) {
      fetchNews();
    }
  }, [page, query]);

  const fetchNews = async () => {
    try {
      const res = await axios.get(
        `https://newsapi.org/v2/everything?q=${query}&page=${page}&pageSize=20&apiKey=a336b6d5d8b944258cf974dff4421fea`
      );
      setArticles(res.data.articles);
      setTotalResults(res.data.totalResults);
      console.log(`Query: ${query}`, res.data);
    } catch (err) {
      console.error("Error fetching news:", err);
    }
  };

  const totalPages = Math.ceil(totalResults / 20);

  return (
    <div className="news-container">
    
      

      <div className="card-grid">
        {articles.map((article, index) => (
          <div className="news-card" key={index}>
            <img
              src={article.urlToImage || "https://via.placeholder.com/300"}
              alt="news"
            />
            <h3>{article.title}</h3>
            <p>{article.description || "No description available."}</p>
            <a href={article.url} target="_blank" rel="noopener noreferrer">
              Read More....
            </a>
          </div>
        ))}
      </div>

      <div className="pagination">
        <button disabled={page <= 1} onClick={() => setPage(page - 1)}>
          Prev
        </button>
        <span>
          Page {page} of {totalPages}
        </span>
        <button disabled={page >= totalPages} onClick={() => setPage(page + 1)}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Events;
