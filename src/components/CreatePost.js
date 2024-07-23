import React, { useState } from "react";
import "./CreatePost.css";
import { collection, addDoc } from "firebase/firestore";
import { db, auth } from "../firebase";
import { useNavigate } from "react-router-dom";

const CreatePost = () => {
  const [title, setTitle] = useState();
  const [postText, setPostText] = useState();

  const navigate = useNavigate();
  const createPost = async () => {
    await addDoc(collection(db, "posts"), {
      title: title,
      postsText: postText,
      author: {
        username: auth.currentUser?.displayName || "匿名ユーザー",
        id: auth.currentUser?.uid || "unknown",
      },
    });

    navigate("/");

    // if (auth.currentUser) {
    //   try {
    //     await addDoc(collection(db, "posts"), {
    //       title: title,
    //       postsText: postText,
    //       author: {
    //         username: auth.currentUser.displayName || "匿名ユーザー",
    //         id: auth.currentUser.uid,
    //       },
    //     });
    //     navigate("/");
    //   } catch (error) {
    //     console.error("投稿の作成中にエラーが発生しました:", error);
    //   }
    // } else {
    //   console.error("ユーザーが認証されていません");
    //   // 必要に応じてエラーメッセージをユーザーに表示するロジックを追加
    // }
  };

  return (
    <div className="createPostPage">
      <div className="postContainer">
        <h1>記事を投稿</h1>
        <div className="inputPost">
          <div>タイトル</div>
          <input
            type="text"
            placeholder="タイトルを記入"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="inputPost">
          <div>投稿</div>
          <textarea
            placeholder="投稿内容を記入"
            onChange={(e) => setPostText(e.target.value)}
          ></textarea>
        </div>
        <button className="postButton" onClick={createPost}>
          投稿する
        </button>
      </div>
    </div>
  );
};

export default CreatePost;
