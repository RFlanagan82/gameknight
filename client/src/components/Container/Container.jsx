import React from "react";

const Container = (props) => {
  return (
    <main className="flex-fill">
      <div className={`container ${props.className}`}>{props.children}</div>
    </main>
  );
};

export default Container;