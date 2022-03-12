import React from 'react';
import { useLocation } from 'react-router-dom';
import {posts} from "./Data/data";

export default function Post() {
    const location = useLocation();
    const path = location.pathname.split("/")[2];

    const post = posts.find(p => p.id.toString() === path);
  return (
    <div>
        {post ? post.title: "login please"}
    </div>
  )
}