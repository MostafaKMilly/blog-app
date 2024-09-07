import { getCommentsByPostId } from "@/lib/api/getCommentsByPostId";
import { getPosts } from "@/lib/api/getPosts";
import {
  Box,
  Typography,
  Container,
  Divider,
  Breadcrumbs,
  Link as MuiLink,
  Alert,
} from "@mui/material";
import Image from "next/image";
import CommentsSection from "@/components/CommentsSection";
import Link from "next/link";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";

async function BlogPostDetails({ params }: { params: { postId: string } }) {
  const posts = await getPosts();
  const postId = Number(params.postId);
  const post = posts?.find((p) => p.id === postId);
  const comments = await getCommentsByPostId(postId);

  if (!post) {
    return (
      <Container sx={{height : "100%"}}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
            mt: 4,
            width: "100%",
          }}
        >
          <Alert
            severity="error"
            icon={<ErrorOutlineIcon />}
            sx={{
              display: "flex",
              alignItems: "center",
              fontSize: "1.25rem",
              fontWeight: "bold",
            }}
          >
            Post not found
          </Alert>
        </Box>
      </Container>
    );
  }
  return (
    <Container>
      <Breadcrumbs aria-label="breadcrumb" sx={{ mb: 2, mt: 4 }}>
        <MuiLink underline="hover" color="inherit" href="/" component={Link}>
          Blog
        </MuiLink>

        <Typography color="text.primary">{post.title}</Typography>
      </Breadcrumbs>
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: { xs: 300, md: 500 },
          mb: 4,
          mt: 3,
        }}
      >
        <Image
          src="/images/placeholder.png"
          alt="Blog Post Image"
          layout="fill"
          objectFit="cover"
          quality={100}
          style={{ borderRadius: "0.75rem" }}
        />
      </Box>

      <Typography variant="h3" sx={{ fontWeight: "bold", mb: 2 }}>
        {post.title}
      </Typography>

      <Typography
        variant="body1"
        color="text.primary"
        sx={{ mb: 4, lineHeight: 1.8 }}
      >
        {post.body}
      </Typography>

      <Divider sx={{ mb: 4 }} />

      <CommentsSection comments={comments} />
    </Container>
  );
}

export default BlogPostDetails;
