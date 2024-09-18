import prisma from "./prismadb";

export const getModels = async ({search, page, limit}) => {
    try {
        let models;
        const baseQuery = {
            orderBy: [
                { sponsered: 'desc' },
                { id: 'desc' }
            ],
            skip: (page-1)*limit,
            take: limit
        };

        if (search) {
          models = await prisma.model.findMany({
            ...baseQuery,
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
            }
          });
        } else {
          models = await prisma.model.findMany(baseQuery);
        }
  
        const totalCount = await prisma.model.count({
          where: baseQuery.where
        });
  
        return { models, totalCount };
      } catch (error) {
        return { error };
      }
}

export const createModel = async (formData) => {

  try {
    const response = await fetch('/api/createModel', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || 'Failed to create model');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    return { error };
  }
};
