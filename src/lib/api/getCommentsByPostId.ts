import { BlogComment } from "../types/comment.type";

export async function getCommentsByPostId(
  postId: number
): Promise<BlogComment[] | null> {
  const apiUrl = `${process.env.API_BASE_URL}/comments`;

  try {
    const response = await fetch(apiUrl, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch comments");
    }

    const comments: BlogComment[] = await response.json();

    const filteredComments = comments.filter(
      (comment) => comment.postId === postId
    );

    return filteredComments;
  } catch (error) {
    console.error("Error fetching comments:", error);
    return null;
  }
}
