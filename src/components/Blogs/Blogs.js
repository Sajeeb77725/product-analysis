import React from "react";
import "./Blogs.css";

const Blogs = () => {
  return (
    <div style={{ marginTop: "40px" }}>
      <div className="quesOne">
        <p>
          <span style={{ color: "orange", fontWeight: "bold" }}>Ans:</span> The
          Context API is a React structure that gives a power you to exchange
          unique details and assists in solving prop-drilling from all levels of
          your application. React Context API is a way for a React app to
          effectively generate global variables that can be passed around. This
          is the alternative of "prop drilling" or moving props from grandparent
          to child to parent, and other where you need.
        </p>
      </div>
      <div className="quesTwo">
        <p>
          <span
            style={{ color: "orange", fontWeight: "bold", marginRight: "6px" }}
          >
            Ans:
          </span>
          Semantic tag is one kind of HTML tag. Semantic tags are those that
          cleanly describe their meaning in a human and machine readable way.
          Like as header ,footer , nav, main, section and article are all
          considered semantic tag because they accurately describe the purpose
          of the element and the type of content that is inside them. Using
          semantic tags the program much easier to read. That is why we use
          semantic tags. Without semantic tag program is difficult to read and
          understand quickly.
        </p>
      </div>
    </div>
  );
};

export default Blogs;
