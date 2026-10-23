
import Link from "next/link"
type PostCardProps = {
  id: string;
  message: string;
}
export default function PostCard({id,message}:PostCardProps) {
  return (
    <Link
   href={`/post/${id}`}
    >
      <p>{message}</p>
    </Link>
  )
}
