import { Box } from "@mui/material";
import React from "react";
import Post from "./Post";
import nature from "../img/nature.jpg";
import nature2 from "../img/nature2.jpg";
import nature3 from "../img/nature3.jpg";
import nature4 from "../img/nature4.jpg";
import nature5 from "../img/nature5.jpg";
import nature6 from "../img/nature6.jpg";
import nature7 from "../img/nature7.jpg";
import john from "../img/user.jpg";
import user1 from "../img/user1.jpg";
import user2 from "../img/user2.jpg";
import user3 from "../img/user3.jpg";
import user4 from "../img/user4.jpg";
import user5 from "../img/user5.jpg";
import user6 from "../img/user6.jpg";

const Feed = () => {
  const postsData = [
    {
      id: 1,
      title: "John Doe",
      date: "September 14, 2016",
      content: "This impressive paella is a perfect party dish...",
      image: nature,
      avatar: john,
    },
    {
      id: 2,
      title: "Ali Jabbar",
      date: "October 18, 2017",
      content: "A wonderful serenity has taken possession of my entire soul...",
      image: nature2,
      avatar: user1,
    },
    {
      id: 3,
      title: "Ömer Duman",
      date: "October 18, 2017",
      content: "A wonderful serenity has taken possession of my entire soul...",
      image: nature3,
      avatar: user2,
    },
    {
      id: 4,
      title: "Mike Doe",
      date: "October 18, 2017",
      content: "A wonderful serenity has taken possession of my entire soul...",
      image: nature4,
      avatar: user3,
    },
    {
      id: 5,
      title: "Jesus Williams",
      date: "October 18, 2017",
      content: "A wonderful serenity has taken possession of my entire soul...",
      image: nature5,
      avatar: user4,
    },
    {
      id: 6,
      title: "Angelina Bryant",
      date: "October 18, 2017",
      content: "A wonderful serenity has taken possession of my entire soul...",
      image: nature6,
      avatar: user5,
    },
    {
      id: 7,
      title: "Serena Doe",
      date: "October 18, 2017",
      content: "A wonderful serenity has taken possession of my entire soul...",
      image: nature7,
      avatar: user6,
    },
  ];
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
