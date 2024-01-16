import { sanitizedHTML } from "@/lib/utils";
import Image from "next/image";
import RichText from "./RichText";

type Props = {
  imageSrc: string;
  title: string;
  content: string;
  isContentful?: boolean;
};

export default function Post({
  imageSrc,
  title,
  content,
  isContentful,
}: Props) {
  return (
    <article>
      <figure>
        <Image
          src={`${isContentful ? `https:` : ""}${imageSrc}`}
          alt={title}
          width={702}
          height={351}
        />
      </figure>
      <h1 dangerouslySetInnerHTML={sanitizedHTML(title)}></h1>
      {isContentful ? (
        <RichText content={content} />
      ) : (
        <p dangerouslySetInnerHTML={sanitizedHTML(content)}></p>
      )}
    </article>
  );
}
