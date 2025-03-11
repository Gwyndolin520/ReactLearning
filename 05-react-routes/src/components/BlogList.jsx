import React from "react";
import { List, Card, Tag } from "antd";
import { Link } from "react-router-dom";
import blogs from "../data/blog";

const BlogList = () => {
  return (
    <div style={{ padding: "24px" }}>
      <h1 style={{ textAlign: "center", marginBottom: "24px" }}>Blog List</h1>
      <List
        grid={{ gutter: 16, column: 3 }}
        dataSource={blogs}
        renderItem={(blog) => (
          <List.Item>
            <Link to={`/blog/${blog.id - 1}`}>
              <Card
                hoverable
                cover={<img alt={blog.title} src={blog.image} />}
                actions={[
                  <span>👁️ {blog.views}</span>,
                  <span>❤️ {blog.favorites}</span>,
                ]}
              >
                <Card.Meta
                  title={blog.title}
                  description={
                    <div>
                      <p>By {blog.author}</p>
                      <div>
                        {blog.tags.map((tag, index) => (
                          <Tag key={index} color="blue">
                            {tag}
                          </Tag>
                        ))}
                      </div>
                    </div>
                  }
                />
              </Card>
            </Link>
          </List.Item>
        )}
      />
    </div>
  );
};

export default BlogList;
