import { useGetPostsQuery } from "./apiSlice";
import PostModel from "../../model/post";

function Posts() {
  const { data, isFetching, ...rest } = useGetPostsQuery("");

  console.log(rest, "rest");

  if (isFetching) {
    return <div>Loading data</div>;
  }

  return (
    <div>
      <h5>posts</h5>
      {data.map((post: PostModel) => (
        <div key={post.id}>{`${post.id} - ${post.title}`}</div>
      ))}
    </div>
  );
}

export default Posts;
