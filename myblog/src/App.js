import React from "react";

import Header from "./components/header";
import Blogs from "./components/blogs";
import AddBlog from "./components/addBlog";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BlogContextProvider from "./context/BlogContext";
import UpdateBlog from "./components/updateBlog";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <BlogContextProvider>
          <Header />

          <Routes>
            <Route path="/" element={<Blogs />} />
            <Route path="/add-blog" element={<AddBlog />} />
            <Route path="/update-blog/:blogId" element={<UpdateBlog />} />
          </Routes>
        </BlogContextProvider>
      </div>
    </BrowserRouter>
  );
}

export default App;
