import React, { useEffect, useState } from "react";
import "./Blog.css";
import { useNavigate } from "react-router-dom";
import { FcLike } from "react-icons/fc";

const API_KEY = "a336b6d5d8b944258cf974dff4421fea";
const PAGE_SIZE = 10;

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
      const response = await fetch(
        `https://newsapi.org/v2/everything?q=health&pageSize=${PAGE_SIZE}&page=${page}&apiKey=${API_KEY}`
      );
      const data = await response.json();
      const shuffled = data.articles.sort(() => 0.5 - Math.random());
      setArticles(shuffled);
      console.log(shuffled);
    } catch (err) {
      // console.error("Failed to fetch articles:", err);
      console.log(err);
    }
  };

  const handleLike = (url) => {
    setLikes({ likes, [url]: (likes[url] || 0) + 1 });
  };

  const handleComment = (url, text) => {
    if (!text) return;
    setComments({
      ...comments,
      [url]: [...(comments[url] || []), text],
    });
  };

  const openDetail = (url) => {
    const encodedUrl = encodeURIComponent(url);
    navigate(`/blogView/${encodedUrl}`);
  };

  return (
    <div className="container">
      <div style={{ display: "flex", gap: "20px" }}>
        <div>
          <h1 style={{}}>
            The <br /> <font style={{ fontSize: "60px" }}>Health Blog</font>
          </h1>
          <p style={{ color: "gray" }}>
            Explore practical insights, expert tips, and helpful guides on
            common health conditions in old age, with a focus on prevention,
            care, and improving daily well-being for the elderly."
          </p>
        </div>

        <div style={{display: "flex"}}>
          <div>
            {/* <img src="" alt="" /> */}
          </div>
        </div>
      </div>
      {articles.map((article) => (
        <div className="card" key={article.url}>
          <img
            src={article.urlToImage || "/fallback.svg"}
            alt="Thumbnail"
            onClick={() => openDetail(article.url)}
            style={{ cursor: "pointer" }}
          />

          <h2
            onClick={() => openDetail(article.url)}
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
                  placeItems: "center",
                  gap: "10px",
                  padding: "0 10px",
                }}>
                <p>
                  <FcLike />
                </p>
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

      <div className="pagination">
        <button onClick={() => setPage(page - 1)} disabled={page === 1}>
          Previous
        </button>
        <span>Page {page}</span>
        <button onClick={() => setPage(page + 1)}>Next</button>
      </div>
    </div>
  );
};

export default Blog;
