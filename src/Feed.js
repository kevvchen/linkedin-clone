import { serverTimestamp } from "firebase/firestore";
import { db } from "./firebase";

import React, { useEffect, useState } from "react";

import "./Feed.css";

import InputOption from "./InputOption";
import Post from "./Post";

import ImageIcon from "@mui/icons-material/Image";
import CreateIcon from "@mui/icons-material/Create";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import EventNoteIcon from "@mui/icons-material/EventNote";
import CalendarViewDayIcon from "@mui/icons-material/CalendarViewDay";
import { selectUser } from "./features/userSlice";
import { useSelector } from "react-redux";
import FlipMove from "react-flip-move";

function Feed() {
  const user = useSelector(selectUser);
  const [input, setInput] = useState("");
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      // Sets up a listener on the Firebase collection. Listens for changes to the "posts" collection and executes a callback function
      // whenever there's a change (e.g, new posts are added or existing ones are updated or deleted)
      .onSnapshot((snapshot) =>
        setPosts(
          // snapshot: represents the state of the posts collection at the moment the callback is executed (including the new post)
          // snapshot.docs: this is an array of documents in the posts collection
          // .map((doc) => ({ id: doc.id, data: doc.data() })): maps each document to an object with two properties. 'id' the unique
          // identifier of the document and 'data' the data contained in the document
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      );
  }, []);

  const sendPost = (e) => {
    e.preventDefault();

    db.collection("posts").add({
      name: user.displayName,
      description: user.email,
      message: input,
      photoUrl: user.photoUrl || "",
      // Using server timestamp, so no matter where the post is uploaded in the world, it is using same server time
      timestamp: serverTimestamp(),
    });

    setInput("");
  };

  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <CreateIcon />
          <form>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              type="text"
            />
            <button onClick={sendPost} type="submit">
              Send
            </button>
          </form>
        </div>

        <div className="feed__inputOptions">
          {/* React component of InputOptions */}
          <InputOption Icon={ImageIcon} title="Photo" color="#70B5F9" />
          <InputOption Icon={SubscriptionsIcon} title="Video" color="#E7A33E" />
          <InputOption Icon={EventNoteIcon} title="Event" color="#C0CBCD" />
          <InputOption
            Icon={CalendarViewDayIcon}
            title="Write article"
            color="#7FC15E"
          />
        </div>
      </div>

      {/* Posts */}
      <FlipMove>
        {posts.map(({ id, data: { name, description, message, photoUrl } }) => (
          <Post
            // React only renders the newly added unique key and not the whole list if given a key
            key={id}
            name={name}
            description={description}
            message={message}
            photoUrl={photoUrl}
          />
        ))}
      </FlipMove>
    </div>
  );
}

export default Feed;
