import React, { useEffect, useState } from "react";
import "./Blog.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FcLike } from "react-icons/fc";

const API_KEY = "9b37bbafdefa4d259d1a341c2cfdbf25";
const PAGE_SIZE = 10;
const MAX_PAGE = 5;
const totalPages = MAX_PAGE;

const Blog = () => {
  const [articles, setArticles] = useState([]);
  const [likes, setLikes] = useState({});
  const [comments, setComments] = useState({});
  const [page, setPage] = useState(1);
  const navigate = useNavigate();

  useEffect(() => {
    fetchArticles();
  }, [page]);

  const fetchArticles = async () => {
    try {
      const response = await axios.get(
        `https://newsapi.org/v2/everything?q=health&pageSize=${PAGE_SIZE}&page=${page}&apiKey=${API_KEY}`
      );
      const shuffled = (response.data.articles || []).slice(0, PAGE_SIZE);
      setArticles(shuffled);
      console.log(response);
      
      console.log(shuffled);
      
    } catch (err) {
      console.log(err);
      
    }
  };

  const handleLike = (url) => {
    setLikes({ ...likes, [url]: (likes[url] || 0) + 1 });
  };

  const handleComment = (url, text) => {
    if (!text) return;
    setComments({
      ...comments,
      [url]: [...(comments[url] || []), text],
    });
  };

  const openDetail = (article) => {
    const encodedUrl = encodeURIComponent(article.url);
    navigate(`/blogView/${encodedUrl}`, { state: { article } });
  };


  return (
    <div className="container">
      <div style={{ display: "flex", gap: "20px" }}>
        <div>
          <h1>
            The <br />
            <span style={{ fontSize: "60px" }}>Health Blog</span>
          </h1>
          <p style={{ color: "gray", paddingBottom: "14px"  }}>
            Explore practical insights, expert tips, and helpful guides on
            common health conditions in old age, with a focus on prevention,
            care, and improving daily well-being for the elderly.
          </p>
        </div>
      </div>

      {articles.map((article) => (
        <div className="card" key={article.url}>
          <img
            src={article.urlToImage || "/fallback.svg"}
            alt="Thumbnail"
            onClick={() => openDetail(article)}
            style={{ cursor: "pointer" }}
          />

          <h2
            onClick={() => openDetail(article)}
            style={{ cursor: "pointer", color: "black" }}>
            {article.title}
          </h2>

          <p style={{ color: "gray" }}>{article.description}</p>

          <div className="flex">
            <div className="actions">
              <button
                onClick={() => handleLike(article.url)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  padding: "0 10px",
                }}>
                <FcLike />
                {likes[article.url] || 0}
              </button>
            </div>

            <div className="comment-section">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  const comment = e.target.elements.comment.value;
                  handleComment(article.url, comment);
                  e.target.reset();
                }}>
                <input
                  type="text"
                  name="comment"
                  placeholder="Add a comment..."
                />
                <button type="submit">Post</button>
              </form>

              <ul>
                {(comments[article.url] || []).map((cmt, idx) => (
                  <li key={idx}>{cmt}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}

      <div
        className="pagination">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((num) => (
          <button
            key={num}
            onClick={() => setPage(num)}
            style={{
              padding: "8px 12px",
              margin: "0 5px",
              backgroundColor: page === num ? "black" : "#eee",
              color: page === num ? "#fff" : "#000",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
            }}>
            {num}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Blog;
