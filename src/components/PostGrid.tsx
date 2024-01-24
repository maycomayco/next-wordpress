import Card from "./Card";

type Props = {
  posts: any[];
};

export default function PostGrid({ posts }: Props) {
  console.log(posts);
  return (
    <div className="grid gap-4 grid-cols-2 max-sm:grid-cols-1">
      {posts.map((post) => (
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
  );
}
