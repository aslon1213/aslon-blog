import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Intro
      </h1>
      <p className="mb-4">
        {`I am software engineer from Uzbekistan. I love to code and build things.`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
