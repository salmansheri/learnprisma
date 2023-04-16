import prisma from ".";

export async function getUser() {
  try {
    const users = await prisma.user.findMany();
    return { users };
  } catch (error) {
    return { error };
  }
}

export const createUser = async (user) => {
  try {
    const userFromDB = await prisma.user.create({
      data: user,
    });

    return { user: userFromDB };
  } catch (error) {
    return { error };
  }
};

export const getUserById = async (id) => {
  try {
    const user = await prisma.user.findUnique({
      where: { id },
    });

    return { user };
  } catch (error) {
    return { error };
  }
};
