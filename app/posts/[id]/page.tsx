import { getPostData } from "@app/core/posts";
import PostLayout, { Post } from "../post-layout";
import type { Metadata } from "next";
import Link from "next/link";

export async function generateMetadata({ params }): Promise<Metadata> {
  const post: Post = await getPostData(params.id);
  const imageUrl = `/images/blog/${post.id}/${post.image}`;

  return {
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      images: [{ url: imageUrl, alt: post.description }],
    },
    twitter: {
      site: "@theredfi_sh",
      title: post.title,
      images: [{ url: imageUrl, alt: post.description }],
      description: post.description,
      card: "summary_large_image",
    },
  };
}

export default async function PostContent({ params }) {
  const post: Post = await getPostData(params.id);

  return (
    <>
      <div className="pt-8 pb-5 pl-5 md:pl-0 md:max-w-3xl md:mx-auto">
        <Link
          href="/"
          className="rounded ring-1 ring-zinc-400 hover:ring-zinc-500 py-2 px-4"
        >
          ← Home
        </Link>
      </div>
      <PostLayout post={post} />
      <div className="pt-5 pb-8 pl-5 md:pl-0 md:max-w-3xl md:mx-auto">
        <Link
          href="/"
          className="rounded ring-1 ring-zinc-400 hover:ring-zinc-500 py-2 px-4"
        >
          ← Home
        </Link>
      </div>
    </>
  );
}
