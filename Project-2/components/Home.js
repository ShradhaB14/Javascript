import React, { Component } from "react";
import axios from "axios";
class Home extends Component {
  state = {
    posts: []
  };
  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/posts").then(res => {
      console.log(res);
      this.setState({
        posts: res.data.splice(0, 10)
      });
    });
  }

  render() {
    const { posts } = this.state;
    const postTitle = posts.length ? (
      posts.map(post => {
        return (
          <div className="post card" key={post.id}>
            <div className="card-content">
              <span className="card-title">{post.title}</span>
              <p>{post.body}</p>
            </div>
          </div>
        );
      })
    ) : (
      <div className="center">No data to display</div>
    );
    return (
      <div className="container">
        <div className="center">{postTitle}</div>
      </div>
    );
  }
}
export default Home;
