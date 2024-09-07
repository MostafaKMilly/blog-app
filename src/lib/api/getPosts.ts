"use server";
import { BlogPost } from "../types/post.type";

export async function getPosts(): Promise<BlogPost[] | null> {
  const apiUrl = `${process.env.API_BASE_URL}/posts`;

  try {
    const response = await fetch(apiUrl, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch posts");
    }

    const postsData: BlogPost[] = await response.json();

    return postsData;
  } catch (error) {
    console.error("Error fetching posts:", error);
    return null;
  }
}
