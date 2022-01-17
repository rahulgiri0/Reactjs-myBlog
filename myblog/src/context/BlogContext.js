import React, { createContext, useEffect, useReducer } from "react";
import MyBlog from "../data/myBlogs";
import { BlogReducer } from "../reducer/blogReducer";

export const BlogContext = createContext();
const BlogContextProvider = (props) => {
  //const [blogs, setBlogs] = useState([...MyBlog]);

  const [blogs, dispatch] = useReducer(BlogReducer, [...MyBlog]);

  // useEffect(() => {
  //   localStorage.setItem("blogs", JSON.stringify(blogs));
  // }, [blogs]);

  // const addBlog = (id, title, category, description) => {
  //   setBlogs([...blogs], { title, category, description, id });
  // };

  // const removeBlog = (id) => {
  //   setBlogs(blogs.filter((blog) => blog.id !== id));
  // };

  return (
    // <BlogContext.Provider value={{ blogs, addBlog, removeBlog }}>
    <BlogContext.Provider value={{ blogs, dispatch }}>
      {props.children}
    </BlogContext.Provider>
  );
};

export default BlogContextProvider;

// () => {
//   const localData = localStorage.getItem("blogs");
//   return localData ? JSON.parse(localData) : [...MyBlog];
// }
