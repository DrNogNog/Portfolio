import React from 'react';
import { Blog } from '../pages/Blogs';

function blogheader({ blog }: { blog: Blog }) {
    return (
        <div>
            <header className="px-4 py-6 md:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{blog.hero}</h1>
                    <p className="text-xl text-gray-600 max-w-2xl">{blog.blogfeed}</p>
                </div>
            </header>
            <div className="w-full aspect-[16/9] relative overflow-hidden">
                <img 
                    src={blog.image} 
                    alt="Blog hero" 
                    className="w-full h-full object-cover"
                />
            </div>
        </div>
    );
}

export default blogheader;