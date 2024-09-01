import prisma from "./prismadb";

export const getModels = async ({search, page, limit}) => {
    try {
        let models;
        if (search) {
          models = await prisma.model.findMany({
            where: {
              OR: [
                {
                  title: {
                    contains: search,
                    mode: 'insensitive'
                  }
                },
                {
                  subtitle: {
                    contains: search,
                    mode: 'insensitive'
                  }
                }
              ]
            },
            skip: (page-1)*limit,
          });
        } else {
          models = await prisma.model.findMany({
            skip: (page-1)*limit,
          });
        }
  
        return {models};
      } catch (error) {
        return { error };
      }
}