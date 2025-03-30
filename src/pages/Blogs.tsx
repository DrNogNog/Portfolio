import React, { useEffect } from 'react';
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

// Function to process content and replace \n with actual newlines
const processContent = (content: string) => {
    return content.replace(/\\n/g, '\n');
}

export const blogs: Blog[] = [
    {
        id: 'one',
        hero: 'Blog Number One',
        blogfeed: 'My First Blog',
        image: '/images/first.png', // Replace with your image URL
        author: '/images/profilepic.png',
        authorname: 'Gordon',
        categories: '',
        quicklinks: '',
        type: 'daily',
        content: `Walking into a large paradise the mall surrounded with palm wood trees seemed perched open from the second floor glass-barriered hand holders. \n
                The event was filled with many new faces, most deeply involved in design and content creation. The air buzzed with conversations about color palettes, \n 
                branding strategies, and the latest in digital aesthetics. Some sat in small groups, sketching ideas on tablets, while others adjusted camera angles, \n
                 perfecting their shots for the next viral reel. `,
        date: '',
        readtime: '',
    },
    {
        id: 'two',
        hero: 'Life Advice Quotes',
        blogfeed: 'Writings of Life advice from other people throughout time.',
        image: '/images/lifelessons.png', // Replace with your image URL
        author: '/images/profilepic.png',
        authorname: 'Gordon',
        categories: '',
        quicklinks: '',
        type: 'infographic',
        content: `Over time, I've gathered random life lessons from strangers that have stuck with me. \n
        If you weren't ready, the opportunity wouldn't present itself. \n
        Be mindful of the language you use—saying "no problem" suggests there was an issue, while "no worries" implies there was a concern without emphasizing a problem. \n
        When responding with "yeah" repeatedly, it can signal disinterest; instead, use phrases like "I understand" combined with "keep going" to show engagement. \n
        In product development, it's not enough to conduct SWOT and PEST analyses—the market's response ultimately determines success. \n
        Filmmaking is an art, so try recording as many versions of yourself as possible. Some things, like two outlandish haircuts, are genuinely interesting. \n
        Consistency is good but don't train if it will lead to self-hatred. \n 
        In tech, be aware that hardware can lock you into specific systems, and in the world’s eyes, once you're successful, you're seen as a genius. \n
        Always apply common sense, and remember that everything has a reason—it is what it is because it's logical. \n
        Insurance is not a field for learning or innovation, and if you value growth, it may not be the best industry to work in. \n
        Lastly, Maya is useful for working with nodes through its API. \n
        Being able to be a team player is super important. That's not taught in school too often \n
        A lot of people see road blocks and stop moving. \n

        `,
        date: 'March 19, 2025',
        readtime: '10 min read',
    },
    {
        id:'three',
        hero: 'My thoughts on New York City',
        blogfeed: 'I start yapping about life in New York City and how it has been to me.',
        image: '/images/yap.png', // Replace with your image URL
        author: '/images/profilepic.png',
        authorname: 'Gordon',
        categories: '',
        quicklinks: '',
        type: 'opinion',
        content: '',
        date: '',
        readtime: '',
    },
];

const Blogs = () => {
    useEffect(() => {
        // Create a script element
        const script = document.createElement('script');
        script.src = './scripttwo.js'; // Replace with the actual path to your script
        script.async = true;

        // Append the script to the document body
        document.body.appendChild(script);

        // Cleanup function to remove the script when the component unmounts
        return () => {
            document.body.removeChild(script);
        };
    }, []);

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
                                    {processContent(blog.blogfeed)} {/* Processed content */}
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
