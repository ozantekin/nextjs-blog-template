import { format, parseISO } from "date-fns";
import { allWritings } from "contentlayer/generated";
import { Mdx } from "@/components/mdx";

export const generateStaticParams = async () =>
  allWritings.map((post) => ({ slug: post._raw.flattenedPath }));

export const generateMetadata = ({ params }: { params: { slug: string } }) => {
  const post = allWritings.find(
    (post) => post._raw.flattenedPath === params.slug
  );
  if (!post) throw new Error(`Post not found for slug: ${params.slug}`);
  return { title: post.title };
};

const PostLayout = ({ params }: { params: { slug: string } }) => {
  const post = allWritings.find(
    (post) => post._raw.flattenedPath === params.slug
  );
  if (!post) throw new Error(`Post not found for slug: ${params.slug}`);

  return (
    <article className="mx-auto max-w-xl py-8">
      <div className="mb-8 text-center">
        <time dateTime={post.date} className="mb-1 text-xs text-gray-600">
          {format(parseISO(post.date), "LLLL d, yyyy")}
        </time>
        <h1 className="text-3xl font-bold">{post.title}</h1>
      </div>
      <Mdx code={post.body.code} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(post.structuredData),
        }}
      />
    </article>
  );
};

export default PostLayout;
