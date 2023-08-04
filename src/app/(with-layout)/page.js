import React from "react";

const page = () => {
  return (
    <div>
      <h2>This is home page</h2>
      <button className="btn btn-accent">Disabled using attribute</button>
      <button
        className="btn btn-disabled"
        tabIndex="-1"
        role="button"
        aria-disabled="true"
      >
        Disabled using class name
      </button>
    </div>
  );
};

export default page;
