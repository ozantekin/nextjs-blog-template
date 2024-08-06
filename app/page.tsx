import { compareDesc, format, parseISO } from "date-fns";
import { allWritings, Writing } from "contentlayer/generated";
import Link from "next/link";
import { Links } from "@/configs/personal";
import { Mdx } from "@/components/mdx";

function PostCard(post: Writing) {
  return (
    <div className="mb-8">
      <h2 className="mb-1 text-xl">
        <Link
          href={post.url}
          className="text-blue-700 hover:text-blue-900 dark:text-blue-400"
        >
          {post.title}
        </Link>
      </h2>
      <time dateTime={post.date} className="mb-2 block text-xs text-gray-600">
        {format(parseISO(post.date), "LLLL d, yyyy")}
      </time>
      <p className="text-gray-700 dark:text-gray-300">{post.excerpt}</p>
    </div>
  );
}

export default function Home() {
  const posts = allWritings.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date))
  );

  return (
    <main className="space-y-8">
      <div className="space-y-4 text-pretty">
        <div className="space-y-1 font-mono">
          <h1 className="text-xl font-bold">About Ozan Tekin</h1>
          <p className="font-medium">creating simplicity, crafting utility</p>
        </div>

        <div className="space-y-2">
          <p>Hi 👋🏻</p>
          <p>
            I'm Ozan, a fe dev. My focus as an indie maker is on creating simple
            and useful products. Seeing people use my products and finding them
            helpful brings me great satisfaction.
          </p>
        </div>

        <div className="space-x-4">
          {Links.map(({ href, ...props }, idx) => (
            <a
              key={idx}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm after:content-['_↗']"
              {...props}
            />
          ))}
        </div>
      </div>

      {posts.map((post, idx) => (
        <PostCard key={idx} {...post} />
      ))}
    </main>
  );
}
