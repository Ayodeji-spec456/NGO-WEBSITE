import React from "react";
import "./Blog.css";
import { useParams, useNavigate, useLocation } from "react-router-dom";

const BlogView = () => {
  const { encodedUrl } = useParams();
  const navigate = useNavigate();
  const { state } = useLocation();
  const article = state?.article;

  return (
    <div style={{ padding: "20px", maxWidth: "800px", margin: "auto" }}>
      <button onClick={() => navigate(-1)} style={{ marginBottom: "20px" }}>
        Back
      </button>
      <h1>{article.title}</h1>
      <img
        src={article.urlToImage}
        alt="Blog image"
        style={{ width: "100%", borderRadius: "10px", marginBottom: "20px" }}
      />
      <p style={{ fontSize: "18px", lineHeight: "1.6" }}>
        {article.description}
      </p>
      <a href={article.url} target="_blank" rel="noopener noreferrer">
        Read full article
      </a>
    </div>
  );
};

export default BlogView;
