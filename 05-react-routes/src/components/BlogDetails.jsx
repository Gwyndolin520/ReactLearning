import React from "react";
import { useParams, Link } from "react-router-dom";
import { Card, Typography, Image, Tag, Button } from "antd";
import blogs from "../data/blog";

const { Title, Paragraph } = Typography;

const BlogDetails = () => {
  const { blogIndex } = useParams();
  const blog = blogs[blogIndex];

  return (
    <div style={{ padding: "24px" }}>
      <Card
        title={blog.title}
        extra={[
          <span key="views">👁️ {blog.views}</span>,
          <span key="favorites">❤️ {blog.favorites}</span>,
        ]}
        style={{ width: "100%" }}
      >
        <Paragraph style={{ marginBottom: "16px" }}>By {blog.author}</Paragraph>
        <div style={{ display: "flex", gap: "8px", marginBottom: "16px" }}>
          {blog.tags.map((tag, index) => (
            <Tag key={index} color="blue">
              {tag}
            </Tag>
          ))}
        </div>
        <Image
          src={blog.image}
          alt={blog.title}
          style={{ width: "100%", maxHeight: "400px", objectFit: "cover" }}
        />
        <Typography style={{ marginTop: "24px" }}>
          <Title level={3}>{blog.title}</Title>
          <Paragraph>{blog.content}</Paragraph>
        </Typography>
      </Card>
      {/* 返回按钮 */}
      <div
        style={{
          position: "fixed",
          bottom: "24px",
          right: "24px",
        }}
      >
        <Button type="primary">
          <Link to="/">返回首页</Link>
        </Button>
      </div>
    </div>
  );
};

export default BlogDetails;
