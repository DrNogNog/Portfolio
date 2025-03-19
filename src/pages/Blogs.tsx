import { ArrowRight, Download } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Blog {
    id: string;
    hero: string; // This is now the title
    blogfeed: string; // This is now the description
    image: string; // New image field for the image source
    author: string;
    categories: string;
    quicklinks: string;
    type: 'infographic' | 'daily' | 'opinion';
};

const blogs: Blog[] = [
    {
        id: 'one',
        hero: 'Vlog Number One',
        blogfeed: 'My First Blog',
        image: '/images/first.png', // Replace with your image URL
        author: 'Gordon',
        categories: '',
        quicklinks: '',
        type: 'daily',
    },
    {
        id: 'two',
        hero: 'Life Advice Quotes',
        blogfeed: 'Writings of Life advice from other people throughout time.',
        image: '/images/lifelessons.png', // Replace with your image URL
        author: 'Gordon',
        categories: '',
        quicklinks: '',
        type: 'infographic',
    },
    {
        id:'three',
        hero: 'My thoughts on New York City',
        blogfeed: 'I start yapping about life in New York City and how it has been to me.',
        image: '/images/yap.png', // Replace with your image URL
        author: 'Gordon',
        categories: '',
        quicklinks: '',
        type: 'opinion',
    },
];

const Blogs = () => {
    console.log(blogs)
    return (
        <div className="min-h-screen bg-[#e5b3e5] p-4">
            <div className="container mx-auto">
                <div className="grid grid-cols-3 gap-4">
                    {blogs.map((blog, index) => (
                        <div key={index} className="relative group bg-white rounded-lg overflow-hidden shadow-lg cursor-pointer transition-transform hover:scale-105">
                            <Link to={`/blogs/${blog.id}`}> 
                            {/* Image */}
                            <img
                                src={blog.image}
                                alt={blog.blogfeed}
                                className="w-full h-48 object-cover"
                            />

                            {/* Content */}
                            <div className="p-4">
                                <h3 className="text-lg font-semibold mb-2">{blog.hero}</h3>
                                <p className="text-sm text-gray-600">{blog.blogfeed}</p>
                            </div>

                            {/* Hover Icons */}
                            <div className="absolute right-2 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity z-10 flex space-x-2">
                                <Download className="text-white w-6 h-6" />
                                <ArrowRight className="text-white w-6 h-6" />
                            </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Blogs;
