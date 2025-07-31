import { useEffect, useState } from "react";
import "./Events.css";
import axios from "axios";

const Events = () => {
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  const fetchNews = async () => {
    try {
      const res = await axios.get(
        `https://newsapi.org/v2/everything?q=disease&page=${page}&pageSize=10&apiKey=a336b6d5d8b944258cf974dff4421fea`
      );
      setArticles(res.data.articles);
      setTotalResults(res.data.totalResults);
      console.log(res.data);
    } catch (err) {
      console.error("Error fetching news:", err);
    }
  };

  useEffect(() => {
    fetchNews();
  }, [page]);

  const totalPages = Math.ceil(totalResults / 2500);

  return (
    <>
    <h1 id="detitle">Stay up to date with our daily news.</h1>
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
    </>
  );
};


export default Events;
