import React from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import Link from "next/link";
import { BlogPost } from "@/lib/types/post.type";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const BlogPostCard: React.FC<BlogPost> = ({ title, body, id }) => {
  return (
    <Link href={`/${id}`} style={{ textDecoration: "none" }}>
      <Card
        sx={{
          borderRadius: "0.75rem",
          overflow: "hidden",
          boxShadow: "0 1px 2px rgba(0,0,0,0.1)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          textDecoration: "none !important",
          cursor: "pointer",
          "&:hover": {
            boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
          },
        }}
      >
        <CardMedia
          component="img"
          height="225"
          image={"/images/placeholder.png"}
          alt="Blog Post Image"
          sx={{
            width: "100%",
            objectFit: "cover",
            aspectRatio: "400 / 225",
          }}
        />

        <CardContent sx={{ padding: "16px", flexGrow: 1 }}>
          <Typography
            variant="h6"
            component="h3"
            sx={{ fontWeight: "bold", mb: 2 }}
          >
            {title}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              WebkitLineClamp: 3,
              display: "-webkit-box",
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
            }}
          >
            {body}
          </Typography>
        </CardContent>

        <Box sx={{ padding: "16px", pt: 0 }}>
          <Button
            variant="text"
            sx={{ color: "primary.main", textTransform: "none" }}
            endIcon={<ArrowForwardIcon />}
          >
            Learn More
          </Button>
        </Box>
      </Card>
    </Link>
  );
};

export default BlogPostCard;
