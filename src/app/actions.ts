'use server'
import { auth } from '@clerk/nextjs/server';

export async function addItem(formData: FormData) {
  const { userId } = auth();

  if (!userId) {
    throw new Error('You must be signed in to add an item to your cart');
  }

  console.log(`${formData.get('data')}`);
}