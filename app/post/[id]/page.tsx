import prisma from "@/lib/prisma";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import updatePost from "@/lib/update-post";
import { deletePost } from "@/lib/delete-post";

type Props = {
  params: Promise<{ id: string }>;
}

async function PostContent({params}: Props) {
  const { id } = await params;
  const post = await prisma.post.findUnique({
    where: { id: id },

  });
  if (!post) {
    notFound();
  }
  return (
    <div className="space-y-3">
      <h1>SinglePost</h1>
      <form
        action={updatePost}
      >
        <input
          id="id"
          name="id"
          defaultValue={post.id}
          hidden
        />
        <input
          id="message"
          name="message"
          defaultValue={post.message}
        />
        <button type="submit">UpdatePost</button>
      </form>
      <div>
        <p>Delete Post</p>
        <form
          action={deletePost}
        >
          <input id="id" name="id" defaultValue={post.id} hidden />
          <button>Delete</button>
        </form>
      </div>
    </div>
  )
}

export default async function SinglePostPage({params}:Props) {

  return (
    <main className="px-4 py-2">
      <Suspense fallback="Post loading...">
        <PostContent params={params} />
        </Suspense>
    </main>
  )
}
