import React from "react";

const dynamicPageId = ({ params, searchParams }) => {
  console.log("seacrchParams object akare dibe", searchParams); //aita terminal a pabo jodi comp er upore "use client use kori tahole ui er client a pabo"
  // seacrchParams object akare dibe { name: '"dfd"' }
  return (
    <div>
      <h3>This dynamic page id:{params?.id}</h3>
    </div>
  );
};

export default dynamicPageId;
