import React from "react";

const ContainerFluid = (props) => {
  return (
    <main className="flex-fill">
      <div className="container-fluid">{props.children}</div>
    </main>
  );
};

export default ContainerFluid;