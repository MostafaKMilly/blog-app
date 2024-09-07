import { render, screen } from "@testing-library/react";
import CommentsSection from "@/components/CommentsSection";

describe("CommentsSection Component", () => {
  const mockComments = [
    {
      postId: 1,
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      body: "This is a test comment.",
    },
  ];

  test("renders comments section with comments", () => {
    render(<CommentsSection comments={mockComments} />);

    expect(
      screen.getByText(/John Doe \(john@example\.com\)/)
    ).toBeInTheDocument();
    expect(screen.getByText("This is a test comment.")).toBeInTheDocument();
  });

  test("displays no comments when comments array is empty", () => {
    render(<CommentsSection comments={[]} />);

    expect(screen.getByText(/no comments yet/i)).toBeInTheDocument();
  });
});
