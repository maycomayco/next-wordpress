import Card from "@/components/Card";
import PreContent from "@/components/PreContent";
import { getPosts } from "@/lib/actions/wordpress.actions";

export default async function Page() {
  const posts = await getPosts();

  if (!posts)
    return (
      <div>
        <p>There is no post to show...</p>
      </div>
    );

  return (
    <>
      <PreContent />

      <div className="grid gap-4 grid-cols-2 max-sm:grid-cols-1">
        {posts.map((post: any) => (
          <Card
            key={post.id}
            title={post.title.rendered}
            excerpt={post.excerpt.rendered}
            imageUrl={post._embedded?.["wp:featuredmedia"]["0"].source_url}
            slug={post.slug}
          />
        ))}
      </div>
    </>
  );
}
