import { NextResponse } from 'next/server';
import prisma from '@/lib/prismadb';

export async function POST(request) {
  try {
    const { email, projectName, category, link, shortDescription, longDescription, sponsered } = await request.json();

    const user = await prisma.user.findUnique({
      where: {
        email
      }
    });

    
    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    const aiTool = await prisma.model.create({
      data: {
        title: projectName,
        category: {
          connectOrCreate: {
            where: { name: category },
            create: { name: category },
          },
        },
        link,
        sponsered,
        subtitle: shortDescription,
        description: longDescription,
        user: {
          connect: { id: user.id }, 
        }
      },
    });

    return NextResponse.json(aiTool);
  } catch (error) {
    console.error('Server error:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}