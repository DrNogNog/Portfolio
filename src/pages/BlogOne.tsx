import { useParams } from 'react-router-dom';
import BlogContent from '../components/blogcontent';
import BlogHeader from '../components/blogheader';
import { blogs } from './Blogs'; // Correctly import the blogs array

const BlogPage = () => {
  const { id } = useParams(); // Get the blog ID from the URL
  console.log("URL ID:", id);

  // Find the blog that matches the ID
  const blog = blogs.find(blog => blog.id === id);
  console.log("Found Blog:", blog);

  // Fetch or display the individual blog based on the ID
  return (
    <div>
      {blog ? (
        <>
          <BlogHeader blog={blog} />
          <BlogContent blogs={blog} />
        </>
      ) : (
        <p>No blog found for this ID.</p>
      )}
    </div>
  );
}

export default BlogPage;
