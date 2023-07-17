import Image from "next/image"
import Link from "next/link";

type Post = {
  title: {
    rendered: string
  },
  excerpt: { rendered: string },
  _embedded: {
    'wp:featuredmedia': {
      '0': {
        source_url: string;
      };
    };
  };
  slug: string
}

type Props = {
  post: Post
}

export default function Card({ post }: Props) {
  const { title, excerpt, slug } = post
  const image = post._embedded?.['wp:featuredmedia']['0'].source_url

  return (
    <li className="link-card">
      <Link href={`/posts/${slug}`}>
        <figure>
          <Image src={image} alt={title.rendered} width={300} height={200} />
        </figure>
        <h2 dangerouslySetInnerHTML={{ __html: title.rendered }} />
        <p dangerouslySetInnerHTML={{ __html: excerpt.rendered }} />
      </Link>
    </li >
  )
}