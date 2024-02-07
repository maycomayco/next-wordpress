"use serve";

import { client } from "../contentful/contentful.client";
import { sleep } from "../utils";

export async function getPosts() {
  const response = await client.getEntries({ content_type: "post" });

  if (!response) throw new Error("Failed to fetch posts data.");

  return response.items;
}

export async function getPostBySlug(slug: string) {
  // simulate slow network
  // await sleep(3000);
  const response = await client.getEntries({
    content_type: "post",
    "fields.slug": slug,
  });

  if (!response) throw new Error("Failed to fetch posts by slug.");

  return response.items.at(0);
}
