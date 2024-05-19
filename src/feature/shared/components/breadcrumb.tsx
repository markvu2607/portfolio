type TBreadcrumbProps = {
  link: string;
  description?: string;
};

export function Breadcrumb({ link, description }: TBreadcrumbProps) {
  return (
    <div className="flex flex-col gap-2">
      <span className="font-semibold text-[32px]">
        <span className="text-primary">/</span>
        <span>{link}</span>
      </span>
      <span>{description}</span>
    </div>
  );
}
