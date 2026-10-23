import prisma from "@/lib/prisma"
import PostCard from "./post-card"

export default async function PostList() {
  const posts = await prisma.post.findMany()
  return (
    <div>
      {posts.map((post) => (
        <PostCard
          id={post.id}
          message={post.message}
          key={post.id}
        />
      ))}
    </div>
  )
}
