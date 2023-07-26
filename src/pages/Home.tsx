import React from "react";

interface IProps {}

function Home(props: IProps) {
  return (
    <div style={{ width: "100%", height: "100%", background: "dodgerblue" }}>
      <h1>Home text Changed</h1>
    </div>
  );
}

export default Home;
