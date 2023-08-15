import { getPostsAtomFeed } from "@app/core/rss";
import { getSortedPostsData } from "@app/core/posts";
import { NextResponse } from "next/server";

import "server-only";

export async function GET() {
  const rssAtomFeed = getPostsAtomFeed(await getSortedPostsData());
  let response = new NextResponse(rssAtomFeed);
  response.headers.set("content-type", "application/atom+xml");

  return response;
}
