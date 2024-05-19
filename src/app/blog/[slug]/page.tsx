import "highlight.js/styles/github-dark.css";
import Link from "next/link";
import { notFound } from "next/navigation";

import { cn, getFormattedDate } from "@/lib/utils";
import { getPostByName, getPostsMeta } from "@/feature/blog/services";

export const revalidate = 86400;

export async function generateStaticParams() {
  const posts = await getPostsMeta();

  if (!posts) return [];

  return posts.map((post) => ({
    slug: post.id,
  }));
}

type Props = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({ params: { slug } }: Props) {
  const post = await getPostByName(`${slug}.mdx`);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: post.meta.title,
  };
}

export default async function Post({ params: { slug } }: Props) {
  const post = await getPostByName(`${slug}.mdx`);

  if (!post) notFound();

  const { meta, content } = post;

  const publishDate = getFormattedDate(meta.date);

  const tags = meta.tags.map((tag, i) => (
    <Link key={i} href={`/blog/tags/${tag}`} className="hover:underline">
      {tag}
    </Link>
  ));

  return (
    <div className="space-y-12 py-24">
      <div>
        <h2 className="text-4xl font-bold mb-2">{meta.title}</h2>
        <p className="mt-0 text-sm text-white/50">{publishDate}</p>
      </div>
      <div className="space-y-2">
        <article>{content}</article>
        <hr className="text-white/50" />
        <section>
          <h3>Related:</h3>
          <div className="flex gap-4">{tags}</div>
        </section>
      </div>
      <p>
        <Link href="/blog">← Back to blog list</Link>
      </p>
    </div>
  );
}
