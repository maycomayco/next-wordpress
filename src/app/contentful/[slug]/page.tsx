import BackButton from "@/components/BackButton";
import Post from "@/components/Post";
import { Button } from "@/components/ui/button";
import { getPostBySlug, getPosts } from "@/lib/actions/contentful.actions";
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
    title: `${post.fields.title} | Headless CMS Demo App`,
    description: post.fields.excerpt,
  };
}

// export async function generateStaticParams() {
//   // obtengo todos los 'slugs' validos desde contentful
//   const posts = await getPosts();

//   const slugList = posts.map((post: any) => ({
//     slug: post.fields.slug,
//   }));

//   return slugList;
// }

export default async function page({ params }: Props) {
  const { slug } = params;
  const post = await getPostBySlug(slug);

  if (!post) return notFound();

  return (
    <>
      <Post
        imageSrc={post.fields?.coverImage.fields.file.url}
        title={post.fields?.title}
        content={post.fields?.content}
        isContentful
      />
      <BackButton pathname="/contentful" />
    </>
  );
}
