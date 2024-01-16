import Image from "next/image";
import Link from "next/link";

type Props = {
  title: string;
  excerpt: string;
  imageUrl: string;
  slug: string;
  isContentful?: boolean;
};

export default function Card({
  title,
  excerpt,
  imageUrl,
  slug,
  isContentful,
}: Props) {
  return (
    <li className="link-card">
      <Link href={`${isContentful ? "/contentful/" : "/posts/"}${slug}`}>
        <figure>
          <img
            src={`${isContentful ? `https://` : ""}${imageUrl}`}
            alt={title}
            width={300}
            height={200}
          />
        </figure>
        <h2 dangerouslySetInnerHTML={{ __html: title }} />
        <p dangerouslySetInnerHTML={{ __html: excerpt }} />
      </Link>
    </li>
  );
}
