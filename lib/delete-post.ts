'use server'
import { revalidatePath } from "next/cache"
import prisma from "./prisma"
import { redirect } from "next/navigation"

export async function deletePost(formData: FormData) {
  const id = formData.get('id') as string;
  await prisma.post.delete({
    where: {id}
  })
  revalidatePath('/')
  redirect('/')
}
