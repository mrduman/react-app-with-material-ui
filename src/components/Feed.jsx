import { Box } from "@mui/material";
import React from "react";
import Post from "./Post";
import { postsData } from "../postsData";

const Feed = () => {
  return (
    <Box flex={4} p={{ xs: 0, sm: 2 }}>
      {postsData.map((post) => {
        return (
          <Post
            title={post.title}
            date={post.date}
            content={post.content}
            image={post.image}
            avatar={post.avatar}
            key={post.id}
          />
        );
      })}
    </Box>
  );
};

export default Feed;
