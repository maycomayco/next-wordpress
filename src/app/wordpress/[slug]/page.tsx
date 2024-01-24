import BackButton from "@/components/BackButton";
import Post from "@/components/Post";
import { getPostBySlug, getPosts } from "@/lib/actions/wordpress.actions";
import Link from "next/link";
import { notFound } from "next/navigation";

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params: { slug } }: Props) {
  const post = await getPostBySlug(slug);

  // esta sera la metada para la pagina notFound
  if (!post) {
    return {
      title: "Post not found",
    };
  }

  return {
    title: `${post.title.rendered} | Headless CMS Demo App`,
    description: post.excerpt.rendered,
  };
}

// Return a list of `params` to populate the [slug] dynamic segment
export async function generateStaticParams() {
  const posts = await getPosts();

  return posts.map((post: any) => ({
    slug: post.slug,
  }));
}

export default async function page({ params }: Props) {
  const { slug } = params;
  const post = await getPostBySlug(slug);

  if (!post) return notFound();

  return (
    <>
      <Post
        imageSrc={post._embedded?.["wp:featuredmedia"]["0"].source_url}
        title={post.title.rendered}
        content={post.content.rendered}
      />
      <BackButton pathname="/wordpress" />
    </>
  );
}
