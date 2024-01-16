import Post from "@/components/Post";
import { getPostBySlug } from "@/lib/actions/contentful.actions";
import Link from "next/link";
import { notFound } from "next/navigation";

type Props = {
  params: { slug: string };
};

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
      <Link href="/contentful" className="return">
        Go to Homepage &rarr;
      </Link>
    </>
  );
}
