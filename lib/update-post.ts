'use server'
import prisma from "./prisma"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

export default async function updatePost(formData: FormData) {
  const id = formData.get('id') as string;
  const message = formData.get('message') as string;
  await prisma.post.update(({
    where: { id },
    data: {
      message
    }
  }))
  revalidatePath('/')
  redirect('/')

}
