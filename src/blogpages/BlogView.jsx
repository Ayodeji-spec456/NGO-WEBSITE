import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const BlogView = () => {
  const { encodedUrl } = useParams();
  const navigate = useNavigate();
  const decodedUrl = decodeURIComponent(encodedUrl);

  return (
    <div style={{ padding: "20px" }}>
      <button onClick={() => navigate(-1)} style={{ marginBottom: "10px" }}>
        Go Back
      </button>
      <iframe
        src={decodedUrl}
        title="Blog Viewer"
        style={{
          width: "100%",
          height: "90vh",
          border: "1px solid #ccc",
          borderRadius: "10px",
        }}></iframe>
    </div>
  );
};

export default BlogView;
