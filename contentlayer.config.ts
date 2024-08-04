import { defineDocumentType, makeSource } from "contentlayer/source-files";
import { BlogPosting, WithContext } from "schema-dts";

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
      resolve: (post: any) => `/writing/${post._raw.flattenedPath}`,
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
});
