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
    <article className="flex flex-col gap-6">
      <Image
        src={`${isContentful ? `https:` : ""}${imageSrc}`}
        alt={title}
        width={900}
        height={400}
        quality={90}
        className="w-full rounded-lg shadow-lg"
      />

      <h2
        className="text-pretty"
        dangerouslySetInnerHTML={{ __html: title }}
      ></h2>

      {isContentful ? (
        <RichText content={content} />
      ) : (
        <p
          // TODO: review how to handle the content from wordpress
          dangerouslySetInnerHTML={{ __html: content }}
        ></p>
      )}
    </article>
  );
}
