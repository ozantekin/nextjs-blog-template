import { HTMLAttributes } from "react";
import { cn } from "@/utils/cn";

export const BasicItems = {
  h1: (props: HTMLAttributes<HTMLHeadingElement>) => {
    const { className, ...rest } = props;
    return (
      <h1
        className={cn(
          "font-heading mt-2 scroll-m-20 text-4xl font-bold",
          className
        )}
        {...rest}
      />
    );
  },
  h2: (props: HTMLAttributes<HTMLHeadingElement>) => {
    const { className, ...rest } = props;
    return (
      <h2
        className={cn(
          "font-heading mt-12 scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight first:mt-0",
          className
        )}
        {...rest}
      />
    );
  },
  h3: (props: HTMLAttributes<HTMLHeadingElement>) => {
    const { className, ...rest } = props;
    return (
      <h3
        className={cn(
          "font-heading mt-8 scroll-m-20 text-xl font-semibold tracking-tight",
          className
        )}
        {...rest}
      />
    );
  },
  h4: (props: HTMLAttributes<HTMLHeadingElement>) => {
    const { className, ...rest } = props;
    return (
      <h4
        className={cn(
          "font-heading mt-8 scroll-m-20 text-lg font-semibold tracking-tight",
          className
        )}
        {...rest}
      />
    );
  },
  h5: (props: HTMLAttributes<HTMLHeadingElement>) => {
    const { className, ...rest } = props;
    return (
      <h5
        className={cn(
          "mt-8 scroll-m-20 text-lg font-semibold tracking-tight",
          className
        )}
        {...rest}
      />
    );
  },
  h6: (props: HTMLAttributes<HTMLHeadingElement>) => {
    const { className, ...rest } = props;
    return (
      <h6
        className={cn(
          "mt-8 scroll-m-20 text-base font-semibold tracking-tight",
          className
        )}
        {...rest}
      />
    );
  },
  p: (props: HTMLAttributes<HTMLParagraphElement>) => {
    const { className, ...rest } = props;
    return (
      <p
        className={cn("leading-7 [&:not(:first-child)]:mt-6", className)}
        {...rest}
      />
    );
  },
  hr: ({ ...props }) => <hr className="my-4 md:my-8" {...props} />,
  ul: (props: HTMLAttributes<HTMLUListElement>) => {
    const { className, ...rest } = props;
    return <ul className={cn("my-6 ml-6 list-disc", className)} {...rest} />;
  },
  ol: (props: HTMLAttributes<HTMLOListElement>) => {
    const { className, ...rest } = props;
    return <ol className={cn("my-6 ml-6 list-decimal", className)} {...rest} />;
  },
  li: (props: HTMLAttributes<HTMLElement>) => {
    const { className, ...rest } = props;
    return <li className={cn("mt-2", className)} {...rest} />;
  },
  blockquote: (props: HTMLAttributes<HTMLElement>) => {
    const { className, ...rest } = props;
    return (
      <blockquote
        className={cn("mt-6 border-l-2 pl-6 italic", className)}
        {...rest}
      />
    );
  },
  table: (props: HTMLAttributes<HTMLTableElement>) => {
    const { className, ...rest } = props;
    return (
      <div className="my-6 w-full overflow-y-auto">
        <table className={cn("w-full", className)} {...props} />
      </div>
    );
  },
  tr: (props: HTMLAttributes<HTMLTableRowElement>) => {
    const { className, ...rest } = props;
    return <tr className={cn("m-0 border-t p-0", className)} {...props} />;
  },
  th: (props: HTMLAttributes<HTMLTableCellElement>) => {
    const { className, ...rest } = props;
    return (
      <th
        className={cn(
          "border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right",
          className
        )}
        {...props}
      />
    );
  },
  td: (props: HTMLAttributes<HTMLTableCellElement>) => {
    const { className, ...rest } = props;
    return (
      <td
        className={cn(
          "border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right",
          className
        )}
        {...props}
      />
    );
  },
  code: (props: HTMLAttributes<HTMLElement>) => {
    const { className, ...rest } = props;
    return (
      <code
        className={cn(
          "rounded-sm bg-slate-950 px-[0.5rem] py-1 font-mono text-sm text-foreground text-pretty leading-relaxed text-white",
          className
        )}
        {...rest}
      />
    );
  },
};
