import Card from "@/components/Card";
import { getPosts } from "@/lib/actions/wordpress.actions";

export default async function Home() {
  const posts = await getPosts();

  if (!posts)
    return (
      <div>
        <p>There is no post to show...</p>
      </div>
    ); // short circuit

  return (
    <>
      <p className="instructions">
        Click on any of the cards below to see the post content generated with
        the amazing SSG ✌️
      </p>
      <ul role="list" className="link-card-grid">
        {posts.map((post: any) => (
          <Card
            key={post.id}
            title={post.title.rendered}
            excerpt={post.excerpt.rendered}
            imageUrl={post._embedded?.["wp:featuredmedia"]["0"].source_url}
            slug={post.slug}
          />
        ))}
      </ul>
    </>
  );
}
