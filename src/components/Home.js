import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="homePage">
      <div className="postContetnts">
        <div className="postHeader">
          <h1>タイトル</h1>
        </div>
      </div>
      <div className="postTextContainer">
        今はReactの学習中です。これから頑張ってReactエンジニアとして頑張っていきたいと思います。
      </div>
      <div className="nameAndDeleteButton">
        <h3>@Yamamoto</h3>
      </div>
    </div>
  );
};

export default Home;
