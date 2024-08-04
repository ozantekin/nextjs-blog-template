"use server";

import { unstable_cache as cache } from "next/cache";

export const getGithubUser = cache(
  async (): Promise<GithubUserProps | null> => {
    try {
      const response = await fetch(`https://api.github.com/users/ozantekin`);
      return await response.json();
    } catch (error) {
      console.error("github api error", error);
      return null;
    }
  },
  ["github-user-cache"],
  {
    revalidate: 60 * 60 * 6, // 6 hours
  }
);
