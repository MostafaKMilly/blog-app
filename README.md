# Blog App

This is a [Next.js](https://nextjs.org) blog application project for Aqary International Group senior frontend developer position

## Features

- **Blog Posts:** Display a list of blog posts with pagination.
- **Blog Details:** View individual blog posts, along with a section for user comments.
- **Comments Section:** Users can view comments associated with each blog post.
- **Responsive Design:** Optimized for both desktop and mobile devices.
- **MUI (Material UI):** Integrated with Material UI for modern, responsive UI components.

## Getting Started

To run the project locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/MostafaKMilly/blog-app
   cd blog-app
   ```

2. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the development server:

   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to view the app.

## Running Tests

To run the test suite, use the following command:

```bash
npm run test
# or
yarn test
```

Jest is configured for unit testing, and React Testing Library is used for component tests.

## File Structure

```bash
src/
  ├── __tests__/                   # Unit tests for components
  ├── app/
  │   ├── posts/                   # Posts pages
  │   │   └── [postId]/            # Dynamic route for blog post details
  │   │       └── page.tsx         # Blog post details page
  │   ├── favicon.ico              # App favicon
  │   ├── layout.tsx               # Main layout for the app
  │   └── page.tsx                 # Main blog page
  ├── components/
  │   ├── layout/                  # Header, Footer, etc.
  │   ├── BlogPostCard.tsx         # Blog post card component
  │   ├── BlogPosts.tsx            # Blog posts grid with pagination
  │   └── CommentsSection.tsx      # Comments section component
  ├── lib/
  │   ├── api/
  │   │   ├── getPosts.ts          # API call to fetch posts
  │   │   └── getCommentsByPostId.ts # API call to fetch comments by post ID
  │   ├── theme/                   # MUI theme customization
  │   └── types/                   # TypeScript types for data models
  └── .env                         # Environment variables
```
