"use client";
import React, { useState } from "react";
import { Box, Typography, Pagination, Grid2 } from "@mui/material";
import BlogPostCard from "./BlogPostCard";
import { BlogPost } from "@/lib/types/post.type";

interface BlogPostsProps {
  posts: BlogPost[];
}

const BlogPosts: React.FC<BlogPostsProps> = ({ posts }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setCurrentPage(value);
  };

  return (
    <Box sx={{ py: { xs: 2, md: 4 } }}>
      <Typography variant="h4" sx={{ fontWeight: "bold", mb: 2 }}>
        Blog Posts
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
        Discover my latest blog posts on a variety of topics.
      </Typography>

      <Grid2 container spacing={3}>
        {currentPosts.map((post) => (
          <Grid2
            size={{
              xs: 12,
              sm: 6,
              md: 4,
            }}
            key={post.id}
          >
            <BlogPostCard {...post} />
          </Grid2>
        ))}
      </Grid2>

      <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
        <Pagination
          count={Math.ceil(posts.length / postsPerPage)}
          page={currentPage}
          onChange={handlePageChange}
          color="primary"
          sx={{
            width: { xs: "100%", md: "auto" },
            "& .MuiPagination-ul": {
              justifyContent: "center",
            },
            ".MuiPaginationItem-root": {
              fontSize: { xs: "0.8rem", md: "1rem" },
            },
          }}
        />
      </Box>
    </Box>
  );
};

export default BlogPosts;
