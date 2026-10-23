import PostList from "./_components/post-list";
import { Suspense } from "react";
import Link from "next/link";

export default async function Home() {
  return (
    <div className="px-4 py-2">
      <div>
        <div className="flex items-center justify-baseline max-w-2xl">
          <div>All Post</div>
          <Link
            className="btn btn-sm btn-ghost"
            href={'/post/new'}>
            New Post
          </Link>
        </div>
      </div>
        <div>
        <Suspense fallback={'Post are loading...'}>
          <PostList />
        </Suspense>
        </div>
    </div>
  );
}
