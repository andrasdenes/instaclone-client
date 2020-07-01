import React, { Component } from "react";

const CreatePost = () => {
  return (
    <div
      className="card input-field"
      style={{
        margin: "30px auto",
        maxWidth: "600px",
        padding: "20px",
        textAlign: "center",
      }}
    >
      <input type="text" placeholder="Title" />
      <input type="text" placeholder="Body" />
      <div className="file-field input-field">
        <div className="btn blue darken-1">
          <span>Upload image</span>
          <input type="file" />
        </div>
        <div className="file-path-wrapper">
          <input className="file-path validate" type="text" />
        </div>
      </div>
      <button
        className="btn waves-effect waves-light blue darken-1"
        style={{ marginTop: 20 }}
      >
        Submit Post
      </button>
    </div>
  );
};

export default CreatePost;
