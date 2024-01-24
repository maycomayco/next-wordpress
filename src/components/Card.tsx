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
    // TODO: refactor this CSS
    <div className="link-card">
      <Link
        className="p-6 flex flex-col gap-2"
        href={`${isContentful ? "/contentful/" : "/wordpress/"}${slug}`}
      >
        {/* TODO: refactor the image to align to 3:2 aspect ratio */}
        <Image
          className="rounded-md shadow-lg"
          src={`${isContentful ? `https:` : ""}${imageUrl}`}
          alt={title}
          width={600}
          height={400}
        />
        <h2
          className="text-xl font-semibold text-pretty"
          dangerouslySetInnerHTML={{ __html: title }}
        />
        <p
          className="text-pretty"
          dangerouslySetInnerHTML={{ __html: excerpt }}
        />
      </Link>
    </div>
  );
}
