import Link from "next/link";
import { PropsWithChildren } from "react";

type TSectionWrapperProps = PropsWithChildren & {
  title: string;
  // TODO: Refactor viewMore prop
  viewMore: { visible: boolean; link?: string };
  showTitleLine?: boolean;
};

export function SectionWrapper({
  title,
  viewMore,
  showTitleLine = true,
  children,
}: TSectionWrapperProps) {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <span className="text-[32px] font-medium">
            <span className="text-primary">#</span>
            {title}
          </span>
          {showTitleLine && (
            <div className="w-[200px] h-0 border-t border-primary" />
          )}
        </div>
        {viewMore.visible && (
          <Link href={viewMore.link || "/"}>
            <span className="font-medium hover:text-primary hover:underline duration-200">
              View more ~~{">"}
            </span>
          </Link>
        )}
      </div>
      <div>{children}</div>
    </div>
  );
}
