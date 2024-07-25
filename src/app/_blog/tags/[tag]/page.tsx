import Link from "next/link";

import { PostItem } from "@/feature/blog/components/post-item";
import { getPostsMeta } from "@/feature/blog/services";

export const revalidate = 86400;

export async function generateStaticParams() {
  const posts = await getPostsMeta();

  if (!posts) return [];

  const tags = new Set(posts.map((post) => post.tags).flat());

  return Array.from(tags).map((tag) => ({ tag }));
}

type Props = {
  params: {
    tag: string;
  };
};

export function generateMetadata({ params: { tag } }: Props) {
  return {
    title: `Posts about ${tag}`,
  };
}

export default async function TagPostList({ params: { tag } }: Props) {
  const posts = await getPostsMeta();

  if (!posts)
    return <p className="mt-24 text-center">Sorry, no posts available.</p>;

  const tagPosts = posts.filter((post) => post.tags.includes(tag));

  if (!tagPosts.length) {
    return (
      <div className="text-center">
        <p className="mt-10">Sorry, no posts for that keyword.</p>
        <Link href="/">Back to Home</Link>
      </div>
    );
  }

  return (
    <div className="py-24">
      <h2 className="text-4xl font-bold mb-8">Results for: #{tag}</h2>
      <ul className="w-full list-none space-y-4">
        {tagPosts.map((post) => (
          <PostItem key={post.id} post={post} />
        ))}
      </ul>
    </div>
  );
}
