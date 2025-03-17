import React from 'react';

const ContentSection = () => {
  const sections = [
    {
      title: 'Design',
      description: 'Something about working with Figma always resources to the transforming board for me'
    },
    {
      title: 'Develop',
      description: 'Coding and projects with new technology stacks and scales keeping the puzzle pieces refreshing takes more effort than you and i think especially for the puzzles with extra pieces'
    },
    {
      title: 'Determined',
      description: 'If it s mindset i need at the workplace, keep it up.'
    }
  ];

  return (
    <div className="">
      <div className="space-y-4">
        {sections.map((section, index) => (
          <div key={index} className="">
            <h2 className="text-xl font-semibold mb-2 text-[#67645F]">{section.title}</h2>
            <p className="text-[#67645F] text-sm">{section.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContentSection;