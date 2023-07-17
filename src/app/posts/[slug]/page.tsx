import Image from "next/image";
import Link from "next/link";

type Props = {
    params: { slug: string }
}

// Return a list of `params` to populate the [slug] dynamic segment
export async function generateStaticParams() {
    const posts = await fetch('https://ceropixel.com.ar/astro-demo/wp-json/wp/v2/posts?_embed').then((res) => res.json())

    if (!posts) return [] // short circuit

    // @ts-ignore
    return posts.map((post) => ({
        slug: post.slug,
    }))
}

export default async function page({ params }: Props) {
    const { slug } = params
    const res = await fetch(`https://ceropixel.com.ar/astro-demo/wp-json/wp/v2/posts?slug=${slug}&_embed`)
    const listOfPosts = await res.json();
    const post = listOfPosts[0]

    if (!res.ok || !post) {
        return null;
    }

    const sanitizedHTML = (content: string) => ({ __html: content || '' });

    return (
        <>
            <article>
                <figure>
                    <Image src={post._embedded?.['wp:featuredmedia']['0'].source_url} alt={post.title?.rendered} width={702} height={351} />
                </figure>
                <h1 dangerouslySetInnerHTML={sanitizedHTML(post.title?.rendered)}></h1>
                <p dangerouslySetInnerHTML={sanitizedHTML(post.content?.rendered)}></p>
            </article>
            <Link href="/" className="return">Go to Homepage &rarr;</Link>
        </>
    )
}