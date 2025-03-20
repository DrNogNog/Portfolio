import React from 'react';
import { Calendar, Clock, User } from 'lucide-react';
import { Blog } from '../pages/Blogs';

function blogcontent({ blogs }: { blogs: Blog }) {
  return (
    <div className="min-h-screen bg-white">
      
      {/* Content */}
      <main className="px-4 py-12 md:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Author and Meta Info */}
          <div className="flex items-center space-x-6 mb-12">
            <div className="flex items-center space-x-3">
              <img 
                src={blogs.author} 
                alt={blogs.authorname}
                className="w-12 h-12 rounded-full"
              />
              <span className="font-medium text-gray-900">{blogs.authorname}</span>
            </div>
            <div className="flex items-center space-x-6 text-gray-500">
              <div className="flex items-center space-x-2">
                <Calendar size={18} />
                <span>{blogs.date}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock size={18} />
                <span>{blogs.readtime}</span>
              </div>
            </div>
          </div>

          {/* Blog Content */}
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed">
              {blogs.content.split('\n').map((line, index) => (
                <React.Fragment key={index}>
                  {line}
                  {index < blogs.content.split('\n').length - 1 && <br />}
                </React.Fragment>
              ))}
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default blogcontent;