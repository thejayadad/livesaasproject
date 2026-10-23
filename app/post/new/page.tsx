import createPost from "@/lib/create-post"
import Link from "next/link"
export default async function NewPostPage() {
  return (
    <div className="px-4 py-4">
      <div className="flex items-center">
        <Link href={'/'}>

          Back To Home
        </Link>
      </div>
      <div>
        <h1>NewPost Page</h1>
        <form action={createPost}>
          <input
            id="message"
            name="message"
            placeholder="Message..."
            className="input input-md outline-none"
          />
          <button type="submit">Add Post</button>
        </form>
      </div>
    </div>
  )
}
