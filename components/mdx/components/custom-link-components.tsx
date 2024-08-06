import Link from "next/link";
import { cn } from "@/utils/cn";

const CustomLink = ({ href, className, children, ...props }: any) => {
  if (href.startsWith("/")) {
    return (
      <Link href={href} className={className} {...props}>
        {children}
      </Link>
    );
  }

  if (href.startsWith("#")) {
    return (
      <a href={href} className={className} {...props}>
        {children}
      </a>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn("after:content-['_↗']", className)}
      {...props}
    >
      {children}
    </a>
  );
};

export const CustomLinkComponents = {
  a: ({ className, ...props }: React.HTMLAttributes<HTMLAnchorElement>) => (
    <CustomLink className={cn("font-medium", className)} {...props} />
  ),
};
