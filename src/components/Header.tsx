import Link from "next/link";

export default function Header() {
  return (
    <div className="flex bg-white w-full p-4 gap-12 items-center justify-between">
      <Link href="/" className="text-3xl font-bold">
        Headless CMS&apos;s Demo App
      </Link>
    </div>
  );
}
