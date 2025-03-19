import { ArrowRight, Download } from 'lucide-react';
import { Link } from 'react-router-dom';

export interface Blog {
    id: string;
    hero: string; // This is now the title
    blogfeed: string; // This is now the description
    image: string; // New image field for the image source
    author: string;
    authorname: string;
    categories: string;
    quicklinks: string;
    content: string;
    date: string;
    readtime: string;
    type: 'infographic' | 'daily' | 'opinion';
};

export const blogs: Blog[] = [
    {
        id: 'one',
        hero: 'Vlog Number One',
        blogfeed: 'My First Blog',
        image: '/images/first.png', // Replace with your image URL
        author: 'Gordon',
        authorname: '',
        categories: '',
        quicklinks: '',
        type: 'daily',
        content: '',
        date: '',
        readtime: '',
    },
    {
        id: 'two',
        hero: 'Life Advice Quotes',
        blogfeed: 'Writings of Life advice from other people throughout time.',
        image: '/images/lifelessons.png', // Replace with your image URL
        author: '/images/lifelessons.png',
        authorname: 'Gordon',
        categories: '',
        quicklinks: '',
        type: 'infographic',
        content: 'If you weren\'t ready you wouldn\'t have the opportunity. ',
        date: 'March 19, 2025',
        readtime: '5 min read',
    },
    {
        id:'three',
        hero: 'My thoughts on New York City',
        blogfeed: 'I start yapping about life in New York City and how it has been to me.',
        image: '/images/yap.png', // Replace with your image URL
        author: 'Gordon',
        authorname: '',
        categories: '',
        quicklinks: '',
        type: 'opinion',
        content: '',
        date: '',
        readtime: '',
    },
];

const Blogs = () => {
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
                                <p className="text-sm text-gray-600" style={{ whiteSpace: 'pre-wrap' }}>
                                    {blog.content}
                                </p>
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
