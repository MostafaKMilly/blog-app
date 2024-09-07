import { render, screen } from "@testing-library/react";
import BlogPosts from "@/components/BlogPosts";

const mockPosts = [
  {
    userId: 1,
    id: 1,
    title: "First Post Title",
    body: "First Post Body",
  },
  {
    userId: 2,
    id: 2,
    title: "Second Post Title",
    body: "Second Post Body",
  },
];

describe("BlogPosts Component", () => {
  test("renders the blog posts with titles", () => {
    render(<BlogPosts posts={mockPosts} />);

    expect(screen.getByText("First Post Title")).toBeInTheDocument();
    expect(screen.getByText("Second Post Title")).toBeInTheDocument();
  });

  test("displays the correct number of blog posts", () => {
    render(<BlogPosts posts={mockPosts} />);

    const titles = screen.getAllByRole("heading", { level: 3 });
    expect(titles).toHaveLength(2);
  });
});
