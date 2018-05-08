import React from "react";

const ForkMe = ({ url }) => (
  <a href={url}>
    <img
      style={{ position: "absolute", top: "0", left: "0", border: "0" }}
      src="https://s3.amazonaws.com/github/ribbons/forkme_left_orange_ff7600.png"
      alt="Fork me on GitHub"
    />
  </a>
);

export default ForkMe;
