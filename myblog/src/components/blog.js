import React, { Fragment, useContext, useState } from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Card,
  CardBody,
  CardSubtitle,
  CardText,
  CardTitle,
  Col,
  Container,
  Row,
} from "reactstrap";
import { BlogContext } from "../context/BlogContext";

function Blog({ blog }) {
  //const { removeBlog } = useContext(BlogContext);

  let [liked, setLiked] = useState(false);
  let like = () => {
    setLiked(!liked);
  };
  const { dispatch } = useContext(BlogContext);

  return (
    <Fragment>
      <Container>
        <Row>
          <Col md={10} className="p-4 offset-1 bg-dark">
            <Card body color="warning" outline className="mb-3">
              <CardBody>
                <CardTitle tag="h5">{blog.title}</CardTitle>
                <CardSubtitle tag="i" className="mb-2 ">
                  {blog.category}
                </CardSubtitle>

                <CardText tag="p">{blog.description}</CardText>

                <Container className="text-center">
                  <Link to={"/update-blog/" + blog.id}>
                    <Button color="primary">Update</Button>
                  </Link>

                  {/* <Button color="danger mx-2" onClick={() => removeBlog(blog.id)}> */}
                  <Button
                    color="danger mx-2"
                    onClick={() =>
                      dispatch({ type: "REMOVE_BLOG", id: blog.id })
                    }
                  >
                    Delete
                  </Button>

                  <Button color="danger mx-5" onClick={like}>
                    Like
                  </Button>

                  {liked ? (
                    <img
                      src="https://www.pngitem.com/pimgs/m/12-121389_like-png-thumbs-up-emoji-google-transparent-png.png"
                      alt="liked"
                      width={25}
                    />
                  ) : null}
                </Container>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
}

export default Blog;
