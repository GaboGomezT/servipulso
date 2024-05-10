'use server';
import prisma from '@/lib/prisma';
import { redirect } from 'next/navigation';

export async function createWaitlistSignup(formData: FormData) {
  const email = formData.get('waitlistEmail') as string;
  await prisma.waitlistSignup.create({
    data: {
      email,
    },
  });
  redirect('/waitlist-confirmation');
}