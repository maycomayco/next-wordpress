import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

type Props = {
  pathname: string;
};

export default function BackButton({ pathname }: Props) {
  return (
    <div className="flex justify-center mt-6">
      <Button asChild variant="link">
        <Link href={pathname}>Go to Homepage &rarr;</Link>
      </Button>
    </div>
  );
}
