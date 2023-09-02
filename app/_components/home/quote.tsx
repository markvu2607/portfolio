import Image from "next/image";

type TQuoteProps = {
  content: string;
  author: string;
};

export function Quote({ content, author }: TQuoteProps) {
  return (
    <section className="flex justify-center">
      <div className="flex flex-col items-end">
        <div className="border border-gray p-8 relative">
          <div className="absolute p-1 bg-background -top-3 left-3">
            <Image
              className="select-none"
              src="/quote.svg"
              alt=""
              width={26}
              height={21}
            />
          </div>
          <span className="text-[24px] font-medium">{content}</span>
          <div className="absolute p-1 bg-background -bottom-4 right-3">
            <Image
              className="select-none"
              src="/quote.svg"
              alt=""
              width={26}
              height={21}
            />
          </div>
        </div>
        <div className="border-x border-b border-gray p-4">
          <span className="text-[24px]">- {author}</span>
        </div>
      </div>
    </section>
  );
}
