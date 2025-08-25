import React from "react";
import { useQuery } from "@tanstack/react-query";

// fetchPosts function
const fetchPosts = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!res.ok) {
    throw new Error("Network response was not ok");
  }
  return res.json();
};

function PostsComponent() {
  const {
    data,
    isLoading,
    isError,
    error,
    refetch,   // ✅ get refetch function
    isFetching // ✅ for showing fetch state
  } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
    cacheTime: 1000 * 60 * 5, // 5 minutes
    staleTime: 1000 * 30,     // 30 seconds
    refetchOnWindowFocus: false,
    keepPreviousData: true,
  });

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div>
      <h2>Posts</h2>
      <button onClick={() => refetch()}>
        Refetch Posts
      </button> {/* ✅ Button with onClick */}
      
      {isFetching && <p>Fetching new data...</p>} {/* ✅ extra feedback */}

      <ul>
        {data.map((post) => (
          <li key={post.id}>
            <strong>{post.title}</strong>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PostsComponent;
