import { getPostsMeta } from "@/lib/posts";
import { PostList } from "./_components/post-list";
import { cn } from "@/utils";

export const revalidate = 86400;

export default async function Blog() {
  const posts = await getPostsMeta();

  return (
    <div className="py-24">
      <h2 className={cn("mb-8", "text-4xl font-bold")}>Blog</h2>
      <PostList posts={posts} />
    </div>
  );
}
