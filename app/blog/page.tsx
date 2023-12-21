import { Posts } from "./_components/posts";

export const revalidate = 86400;

export default function Blog() {
  return (
    <div className="mx-auto">
      <p className="mt-12 mb-12 text-3xl text-center">Hello and welcome</p>
      <Posts />
    </div>
  );
}
