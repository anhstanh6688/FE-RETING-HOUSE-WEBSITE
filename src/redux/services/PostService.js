import axios from "axios";

const fetchAllPosts = async () => {
  return await axios.get("http://localhost:2000/api/v1/posts/read");
};

export { fetchAllPosts };
