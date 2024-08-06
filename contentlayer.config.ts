import { defineDocumentType, makeSource } from "contentlayer/source-files";
import { BlogPosting, WithContext } from "schema-dts";
import { visit } from "unist-util-visit";
import rehypePrettyCode from "rehype-pretty-code";
import remarkGfm from "remark-gfm";

export const Writing = defineDocumentType(() => ({
  name: "Writing",
  contentType: "mdx",
  filePathPattern: `**/*.mdx`,
  fields: {
    title: {
      type: "string",
      required: true,
    },
    excerpt: {
      type: "string",
      required: true,
    },
    date: { type: "date", required: true },
    draft: {
      type: "boolean",
      default: true,
    },
  },

  computedFields: {
    url: {
      type: "string",
      resolve: (post: any) => `/${post._raw.flattenedPath}`,
    },
    image: {
      type: "string",
      resolve: (post: any) =>
        `${process.env.NEXT_PUBLIC_APP_URL}/api/og?title=${encodeURI(
          post.title
        )}`,
    },
    structuredData: {
      type: "json",
      resolve: (view: any) =>
        ({
          "@context": "https://schema.org",
          "@type": `BlogPosting`,
          headline: view.title,
          datePublished: view.date,
          dateModified: view.date,
          description: view.summary,
          image: view.image,
          url: `https://ozantek.in/${view._raw.flattenedPath}`,
          author: {
            "@type": "Person",
            name: view.author,
            url: `https://twitter.com/ozanmakers`,
          },
        } as WithContext<BlogPosting>),
    },
  },
}));

export default makeSource({
  contentDirPath: "writing",
  documentTypes: [Writing],
  mdx: {
    // @ts-ignore
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      () => (tree) => {
        visit(tree, (node) => {
          if (node?.type === "element" && node?.tagName === "pre") {
            const [codeEl] = node.children;

            if (codeEl.tagName !== "code") return;

            node.__rawString__ = codeEl.children?.[0].value;
          }
        });
      },
      [
        // @ts-ignore
        rehypePrettyCode,
        {
          theme: "one-dark-pro",
          keepBackground: false,
          onVisitLine(node: any) {
            if (node.children.length === 0) {
              node.children = [{ type: "text", value: " " }];
            }
          },
        },
      ],
      () => (tree) => {
        visit(tree, (node) => {
          if (node?.type === "element" && node?.tagName === "figure") {
            if (!("data-rehype-pretty-code-figure" in node.properties)) {
              return;
            }

            const preElement = node.children.at(-1);
            if (preElement.tagName !== "pre") {
              return;
            }

            preElement.properties["__rawString__"] = node.__rawString__;
          }
        });
      },
    ],
  },
});
