import React, { Component, useState, useEffect, useContext } from "react";
import { UserContext } from "../../App.js";

const Home = () => {
  const [data, setData] = useState([]);
  const { state, dispatch } = useContext(UserContext);
  const [comment, setComment] = useState("");

  useEffect(() => {
    fetch("/post/posts", {
      headers: { authorization: localStorage.getItem("jwt") },
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result.posts);
        setData(result.posts);
      });
  }, []);

  const handleUnlike = (itemId) => {
    fetch("/post/unlike", {
      method: "put",
      headers: {
        authorization: localStorage.getItem("jwt"),
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ postId: itemId }),
    })
      .then((res) => res.json())
      .then((result) => {
        const newData = data.map((item) => {
          if (item._id === result._id) {
            console.log(result);
            return result;
          } else {
            return item;
          }
        });
        setData(newData);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleLike = (itemId) => {
    fetch("/post/like", {
      method: "put",
      headers: {
        authorization: localStorage.getItem("jwt"),
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ postId: itemId }),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        const newData = data.map((item) => {
          if (item._id === result._id) {
            return result;
          } else {
            return item;
          }
        });
        setData(newData);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleComment = (text, postId) => {
    fetch("/post/comment", {
      method: "put",
      headers: {
        "Content-Type": "application/json",
        authorization: localStorage.getItem("jwt"),
      },
      body: JSON.stringify({
        postId,
        text,
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        const newData = data.map((item) => {
          if (item._id === result._id) {
            return result;
          } else {
            return item;
          }
        });
        setData(newData);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deletePost = (postId) => {
    fetch("/post/deletepost/" + postId, {
      method: "delete",
      headers: { authorization: localStorage.getItem("jwt") },
    })
      .then((res) => res.json())
      .then((result) => {
        const newData = data.filter((item) => {
          return item._id !== result._id;
        });
        setData(newData);
      })
      .catch((err) => console.log(err));
  };

  const deleteComment = (commentId, postId) => {
    console.log(commentId, postId);
    fetch("/post/deletecomment", {
      method: "delete",
      headers: { authorization: localStorage.getItem("jwt") },
      body: JSON.stringify({ commentId, postId }),
    })
      .then((res) => res.json())
      .then((result) => {
        const newData = data.filter((item) => {
          return item._id !== result._id;
        });
        setData(newData);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="home">
      {data.map((item) => {
        return (
          <div className="card home-card" key={item._id}>
            <h5>
              {item.postedBy.name}{" "}
              {item.postedBy._id === state._id && (
                <button
                  className="btn white material-icons"
                  style={{ color: "black", marginRight: 0, float: "right" }}
                  onClick={() => deletePost(item._id)}
                >
                  delete
                </button>
              )}
            </h5>
            <div className="card-image">
              <img src={item.photo} alt="photo" />
            </div>
            <div className="card-content">
              {item.likes.includes(state._id) ? (
                <button
                  className="btn white material-icons"
                  style={{ color: "red" }}
                  onClick={() => handleUnlike(item._id)}
                >
                  favorite
                </button>
              ) : (
                <button
                  className="btn white material-icons"
                  style={{ color: "red" }}
                  onClick={() => handleLike(item._id)}
                >
                  favorite_border
                </button>
              )}
              <h6>{item.likes.length} likes</h6>
              <h6>{item.title}</h6>
              <p>{item.body}</p>
              {item.comments.map((instance) => {
                return (
                  <h6>
                    <span style={{ fontWeight: "bold", fontSize: 15 }}>
                      {instance.author.name}
                    </span>
                    <span style={{ fontSize: 15 }}>: {instance.text}</span>
                    {instance.author._id === state._id && (
                      <button
                        className="white material-icons"
                        style={{
                          color: "#414141",
                          marginRight: 0,
                          border: 0,
                          display: "inline-block",
                          verticalAlign: "middle",
                          cursor: "pointer",
                        }}
                        onClick={() => deleteComment(instance._id, item._id)}
                      >
                        delete
                      </button>
                    )}
                  </h6>
                );
              })}
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleComment(e.target[0].value, item._id);
                }}
              >
                <input type="text" placeholder="Add comment...." />
              </form>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Home;

//                onChange={(e) => setComment(e.target.value)}
//          onKeyDown={(e) => handleComment(e, item._id)}
