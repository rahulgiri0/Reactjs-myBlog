import React, { Fragment, useContext } from "react";
import Blog from "./blog";

import { BlogContext } from "../context/BlogContext";

function Blogs() {
  const { blogs } = useContext(BlogContext);
  return (
    <Fragment>
      <div className="text-center">
        <h4>All Blogs</h4>
        <p>Below are the blogs you are looking for</p>
      </div>

      {blogs.length > 0 ? (
        blogs.map((blog) => <Blog blog={blog} key={blog.id} />)
      ) : (
        <h6>no blogs</h6>
      )}
    </Fragment>
  );
}

export default Blogs;
