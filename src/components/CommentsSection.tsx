import React from "react";
import { Box, Typography, Paper } from "@mui/material";
import { BlogComment } from "@/lib/types/comment.type";

interface CommentsSectionProps {
  comments: BlogComment[] | null;
}

const CommentsSection: React.FC<CommentsSectionProps> = ({ comments }) => {
  if (!comments || comments.length === 0) {
    return (
      <Typography variant="h6" sx={{ mt: 4 }}>
        No comments yet.
      </Typography>
    );
  }

  return (
    <Box sx={{ mt: 4 }}>
      <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2 }}>
        Comments
      </Typography>
      {comments.map((comment) => (
        <Paper
          key={comment.id}
          sx={{
            padding: 2,
            mb: 2,
            border: "1px solid #e4e4e7",
            borderRadius: "8px",
          }}
        >
          <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
            {comment.name} ({comment.email})
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
            {comment.body}
          </Typography>
        </Paper>
      ))}
    </Box>
  );
};

export default CommentsSection;
