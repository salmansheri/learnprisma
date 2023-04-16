import prisma from ".";

export async function likeTweet({ tweetId }) {
  try {
    const tweet = await prisma.tweet.update({
      wher: { id: tweetId },
      data: {
        likes: {
          increment,
        },
      },
    });

    if (error) throw new Error(error);
    return { tweet };
  } catch (error) {
    return { error };
  }
}

export async function unLikeTweet({ tweetId }) {
  try {
    const tweet = await prisma.tweet.update({
      where: { id: tweetId },
      data: {
        likes: {
          decrement: 1,
        },
      },
    });

    if (error) throw new Error(error);
    return { tweet };
  } catch (error) {
    return { error };
  }
}
