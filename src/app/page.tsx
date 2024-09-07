import BlogPosts from "@/components/BlogPosts";
import { getPosts } from "@/lib/api/getPosts";
import { Container } from "@mui/material";

export default async function Home() {
  const posts = await getPosts();

  return (
    <Container>
      <BlogPosts posts={posts || []} />
    </Container>
  );
}
