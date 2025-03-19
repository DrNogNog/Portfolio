
interface Blogs {
    hero: string;
    blogfeed: string;
    author: string;
    categories: string;
    quicklinks: string;
    type: 'infographic' | 'daily' | 'opinion';
};

const blogs: Blogs[] = [
    {
        hero: 'Vlog Number One',
        blogfeed: 'My First Blog',
        author: 'Gordon',
        categories: '',
        quicklinks: '',
        type: 'daily',
    },
    {
        hero: 'Life Advice Quotes',
        blogfeed: 'Writings of Life advice from other people throughout time.',
        author: 'Gordon',
        categories: '',
        quicklinks: '',
        type: 'infographic',
    },
    {
        hero: 'My thoughts on New York City',
        blogfeed: 'I start yapping about life in new york city and how it has been to me.',
        author: 'Gordon',
        categories: '',
        quicklinks: '',
        type: 'opinion',
    },
]

const Blogs = () => {
    return(
        <div className="min-h-screen bg-[#e5b3e5] p-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-3 gap-4">
            {blogs.map((blog) => (
                <div>
                    <img
                    src={blog.hero}
                    alt={blog.blogfeed}
                    className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                        <h3 className="text-lg font-semibold mb-2">{blog.hero}</h3>
                        <p className="text-sm text-gray-600">{blog.blogfeed}</p>
                    </div>
              </div>
            ))}
          </div>
      </div>
    </div>
    )
};

export default Blogs;