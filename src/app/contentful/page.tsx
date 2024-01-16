import Card from "@/components/Card";
import { getPosts } from "@/lib/actions/contentful.actions";

export default async function page() {
  const posts = await getPosts();

  return (
    <div>
      <ul role="list" className="link-card-grid">
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
      </ul>
    </div>
  );
}
