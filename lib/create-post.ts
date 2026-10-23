'use server'
import prisma from "./prisma"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

export default async function createPost(formData: FormData) {
  const message = formData.get('message') as string;
  await prisma.post.create({
    data: {
      message
    }
  })
  revalidatePath('/')
  redirect('/')
}
