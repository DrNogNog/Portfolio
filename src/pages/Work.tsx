import React from 'react';
import { ArrowRight, Download } from 'lucide-react';

interface Project {
  id: number;
  name: string;
  description: string;
  image: string;
  type: 'project' | 'photography' | 'resume';
}

const projects: Project[] = [
  ...Array(12).fill(null).map((_, index) => ({
    id: index + 1,
    name: `Project ${index + 1}`,
    description: 'Interactive web application with modern design principles',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    type: 'project'
  })),
  {
    id: 13,
    name: 'Photography',
    description: 'Professional photography portfolio',
    image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    type: 'photography'
  },
  {
    id: 14,
    name: 'Resume',
    description: 'Download my professional resume',
    image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    type: 'resume'
  }
];

const Work = () => {
  return (
    <div className="min-h-screen bg-[#e5b3e5] p-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-4 gap-4">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative bg-white rounded-lg overflow-hidden shadow-lg cursor-pointer transition-transform hover:scale-105"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">{project.name}</h3>
                <p className="text-sm text-gray-600">{project.description}</p>
              </div>
              <div className="absolute right-2 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                {project.type === 'resume' ? (
                  <Download className="text-white w-6 h-6" />
                ) : (
                  <ArrowRight className="text-white w-6 h-6" />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;