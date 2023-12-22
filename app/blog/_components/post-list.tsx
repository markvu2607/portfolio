import { PostItem } from "./post-item";

type PostListProp = {
  posts?: Meta[];
};

export async function PostList({ posts }: PostListProp) {
  if (!posts) {
    return <p className="mt-10 text-center">Sorry, no posts available.</p>;
  }

  return (
    <ul className="w-full list-none space-y-4">
      {posts.map((post) => (
        <PostItem key={post.id} post={post} />
      ))}
    </ul>
  );
}
