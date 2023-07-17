import Card from './components/Card'

export default async function Home() {
  const posts = await fetch('https://ceropixel.com.ar/astro-demo/wp-json/wp/v2/posts?_embed').then((res) => res.json())

  if (!posts) return [] // short circuit

  return (
    <main>
      <h1>Astro + <span className="text-gradient">Wordpress API</span> = 🚀</h1>
      <p className="instructions">
        Watch this space for <strong>more exciting</strong> updates from the Vue.js community.
      </p>
      <ul role="list" className="link-card-grid">

        {

          // @ts-ignore
          posts.map((post) => (
            <Card key={post.id} post={post} />
          ))
        }
      </ul>
    </main>
  )
}
