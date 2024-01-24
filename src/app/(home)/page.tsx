import Link from "next/link";

export default async function Home() {
  return (
    <div className="flex flex-col gap-8 mt-8">
      <Link href="/wordpress">
        <div className="bg-white rounded-md p-8 border">
          <h1>
            Next.js +{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-accent to-[rgb(36,204,255)]">
              Wordpress
            </span>
          </h1>
        </div>
      </Link>
      <Link href="/contentful">
        <div className="bg-white rounded-md p-8 border">
          <h1>
            Next.js +{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-accent to-[rgb(36,204,255)]">
              Contentful
            </span>
          </h1>
        </div>
      </Link>
    </div>
  );
}
