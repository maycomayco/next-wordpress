"use serve";

export async function getPosts() {
  const response = await fetch(
    "https://ceropixel.com.ar/astro-demo/wp-json/wp/v2/posts?_embed"
  );

  // esto sera renderizado en el error boundary, debemos crear el error page
  if (!response.ok) throw new Error("Failed to fetch posts data.");

  const users = await response.json();

  return users;
}

export async function getPostBySlug(slug: string) {
  const response = await fetch(
    `https://ceropixel.com.ar/astro-demo/wp-json/wp/v2/posts?slug=${slug}&_embed`
  );

  const post = await response.json();
  return post[0];
}
