import React from "react";
import LineGradient from "../../hooks/LineGradient";

const Blog = () => {
  return (
    <section>
      <div id="blog" className="my-24 w-5/6 mx-auto">
        <p className="font-playfair font-semibold text-5xl my-4 text-center">
          <span className="text-red">MY </span>BLOGS
        </p>
        <div className="flex justify-center">
          <LineGradient width="w-[120px]" />
        </div>
        <div className="my-24">
          <h2 className="text-4xl font-bold text-center">Comming soon......</h2>
        </div>
      </div>
      <LineGradient></LineGradient>
    </section>
  );
};

export default Blog;
