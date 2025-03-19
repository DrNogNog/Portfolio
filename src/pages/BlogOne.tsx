import { useParams } from 'react-router-dom';

const BlogPage = () => {
  const { id } = useParams(); // Get the blog ID from the URL

  // Fetch or display the individual blog based on the ID
  return (
    <div>
      <h1>Blog {id}</h1>
      {/* Add logic to fetch or render the blog content based on the `id` */}
    </div>
  );
}

export default BlogPage;
