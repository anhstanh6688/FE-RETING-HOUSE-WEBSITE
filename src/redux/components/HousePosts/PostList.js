import React, { useEffect, useState } from "react";
import { fetchAllPosts } from "../../services/PostService";
import _ from "lodash";
import { Card, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faDollarSign } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "./PostList.scss";

const PostList = (props) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    callFetchAllPosts();
  }, []);

  const callFetchAllPosts = async () => {
    let response = await fetchAllPosts();
    if (response && response.data && +response.data.EC === 0) {
      const _posts = _.cloneDeep(response.data.DT);
      setPosts(_posts);
    }
    console.log(">>> check posts: ", posts);
  };

  // ✅ Hàm xử lý khi click vào bài đăng
  const handleClickOnPost = (house_id) => {
    console.log(`>>> Đã click vào bài đăng có ID: ${house_id}`);
  };

  return (
    <>
      {posts.map((post) => {
        return (
          <Link
            to={`/house/${post.house_id}`}
            key={post.house_id}
            className="post-link"
            onClick={() => handleClickOnPost(post.house_id)} //Gọi hàm khi click
          >
            <Card
              className={props.isOpenMap ? "small-card mb-2" : "medium-card mb-2"}
              style={{ cursor: "pointer" }}
            >
              <Row>
                <Col md={4} className="left-side2">
                  <img
                    src={post.image}
                    className="img-fluid rounded px-1"
                    alt="House"
                    style={{
                      objectFit: "cover",
                      width: "100%",
                      height: "170px",
                    }}
                  />
                </Col>
                <Col md={8} className="right-side2">
                  <Card.Body>
                    <h4 className="title-font">{post.house_name}</h4>
                    <p className="highlight-font">
                      {<FontAwesomeIcon icon={faDollarSign} />} Giá: {post.cost}đ
                      - Diện tích: {post.area}m2
                    </p>
                    <p className="smaller-font lighter-font text-truncate">
                      {<FontAwesomeIcon icon={faLocationDot} />} {post.address}
                    </p>
                    <p className="smaller-font lighter-font text-truncate">
                      {post.description}
                    </p>
                  </Card.Body>
                </Col>
              </Row>
            </Card>
          </Link>
        );
      })}
    </>
  );
};

export default PostList;
