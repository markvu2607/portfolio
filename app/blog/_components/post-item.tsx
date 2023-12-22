import Link from "next/link";

import { getFormattedDate } from "@/utils";

type PostItemProps = {
  post: Meta;
};

export function PostItem({ post }: PostItemProps) {
  const { id, title, date } = post;
  const formattedDate = getFormattedDate(date);

  return (
    <li className="text-2xl">
      <Link className="underline" href={`/blog/${id}`}>
        {title}
      </Link>
      <br />
      <p className="text-sm mt-1">{formattedDate}</p>
    </li>
  );
}
