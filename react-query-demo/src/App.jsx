import { useState } from "react";
import PostsComponent from "./components/PostsComponent";

export default function App() {
  const [showPosts, setShowPosts] = useState(true);

  return (
    <div style={{ padding: 16, fontFamily: "sans-serif" }}>
      <h1>React Query Demo</h1>

      <div style={{ marginBottom: 12 }}>
        <button onClick={() => setShowPosts((s) => !s)}>
          {showPosts ? "Unmount Posts" : "Mount Posts"}
        </button>
        <p style={{ marginTop: 8 }}>
          Toggle this to unmount/mount the component and observe cached data load instantly.
        </p>
      </div>

      {showPosts ? <PostsComponent /> : <p>Posts component is unmounted.</p>}
    </div>
  );
}
