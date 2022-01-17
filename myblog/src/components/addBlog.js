import React, { Fragment, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Col, Container, Form, FormGroup, Input, Label, Row } from "reactstrap";
import { BlogContext } from "../context/BlogContext";

function AddBlog() {
  const [id, setId] = useState();
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");

  //const { addBlog } = useContext(BlogContext);

  const { dispatch } = useContext(BlogContext);
  const navigate = useNavigate();

  let handle = (e) => {
    e.preventDefault();

    //addBlog(id, title, category, description);
    dispatch({ type: "ADD_BLOG", blog: { id, title, category, description } });
    setCategory("");
    setDescription("");
    setId("");
    setTitle("");
    navigate("/");
  };

  return (
    <Fragment>
      <h2 className="text-center">Fill New Blog Details</h2>
      <Container>
        <Row>
          <Col md={6} className="p-4 offset-3 bg-white">
            <Form onSubmit={handle}>
              <FormGroup>
                <Label for="id">
                  <h6>Blog Id</h6>
                </Label>
                <Input
                  type="text"
                  name="id"
                  value={id}
                  onChange={(e) => setId(parseInt(e.target.value))}
                  required
                />
              </FormGroup>
              <FormGroup>
                <Label for="title">
                  <h6>Title</h6>
                </Label>
                <Input
                  type="text"
                  name="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                />
              </FormGroup>
              <FormGroup>
                <Label for="category">
                  <h6>Category</h6>
                </Label>
                <Input
                  type="text"
                  name="category"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  required
                />
              </FormGroup>

              <FormGroup>
                <Label for="description">
                  <h6>Description</h6>
                </Label>
                <Input
                  type="textarea"
                  name="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  required
                />
              </FormGroup>

              <Container className="text-center ">
                <input
                  className="btn btn-success btn-sm"
                  type="submit"
                  value="Submit"
                />
              </Container>
            </Form>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
}

export default AddBlog;
