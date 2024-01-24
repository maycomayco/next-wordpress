import Card from "@/components/Card";
import PreContent from "@/components/PreContent";
import { getPosts } from "@/lib/actions/contentful.actions";

export default async function page() {
  const posts = await getPosts();

  return (
    <>
      <PreContent />

      <div className="grid gap-4 grid-cols-2 max-sm:grid-cols-1">
        {posts.map((post: any) => (
          <Card
            key={post.sys.id}
            title={post.fields.title as string}
            excerpt={post.fields.excerpt as string}
            imageUrl={post?.fields?.coverImage?.fields.file.url as string}
            slug={post.fields.slug as string}
            isContentful
          />
        ))}
      </div>
    </>
  );
}
