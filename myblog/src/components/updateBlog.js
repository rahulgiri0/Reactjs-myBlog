import React, { Fragment, useContext, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import {
  Button,
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  Label,
  Row,
} from "reactstrap";
import { BlogContext } from "../context/BlogContext";
const UpdateBlog = () => {
  const navigate = useNavigate();
  const { blogId } = useParams();
  const { blogs, dispatch } = useContext(BlogContext);
  const [selectedBlog, setSelectedBlog] = useState(
    blogs.find((blog) => blog.id === parseInt(blogId))
  );

  // const blog = dispatch({ type: "FIND_BLOG", id: id });

  let updateHandle = (e) => {
    e.preventDefault();
    dispatch({ type: "REMOVE_BLOG", id: selectedBlog.id });
    dispatch({ type: "ADD_BLOG", blog: selectedBlog });

    navigate("/");
  };

  return (
    <Fragment>
      <h2 className="text-center">Update Blog Details</h2>
      <Container>
        <Row>
          <Col md={6} className="p-4 offset-3 bg-white">
            <Form onSubmit={updateHandle}>
              <FormGroup>
                <Label for="id">
                  <h6>Blog Id</h6>
                </Label>
                <Input
                  type="text"
                  name="id"
                  value={selectedBlog.id}
                  readOnly
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
                  value={selectedBlog.title}
                  onChange={(e) =>
                    setSelectedBlog({
                      ...selectedBlog,
                      [e.target.name]: e.target.value,
                    })
                  }
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
                  value={selectedBlog.category}
                  onChange={(e) =>
                    setSelectedBlog({
                      ...selectedBlog,
                      [e.target.name]: e.target.value,
                    })
                  }
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
                  value={selectedBlog.description}
                  onChange={(e) =>
                    setSelectedBlog({
                      ...selectedBlog,
                      [e.target.name]: e.target.value,
                    })
                  }
                  required
                />
              </FormGroup>

              <Container className="text-center ">
                <input
                  className="btn btn-success btn-sm"
                  type="submit"
                  value="Submit"
                />

                <Link to="/">
                  <Button color="secondary btn-sm mx-3">Cancel</Button>
                </Link>
              </Container>
            </Form>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default UpdateBlog;
