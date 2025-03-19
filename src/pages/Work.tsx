import { ArrowRight, Download } from 'lucide-react'; // Use FileDownload instead of Download


interface Project {
  id: number;
  name: string;
  description: string;
  image: string;
  url: string;
  type: 'project' | 'photography' | 'resume';
}

const projects: Project[] = [
  {
    id: 1,
    name: 'Nutrisnap',
    description: 'A clean, minimalist personal portfolio showcasing my skills and experience.',
    image: '/images/nutrisnap.png',
    url: 'https://github.com/DrNogNog/Nutri-Snap-The-Nutritional-Helper',
    type: 'project'
  },
  {
    id: 2,
    name: 'Distributed Systems',
    description: 'A fully functional e-commerce website with a user-friendly shopping experience.',
    image: '/images/distributed.png',
    url: 'https://github.com/DrNogNog/Operating-Systems-Distributed-Systems',
    type: 'project'
  },
  {
    id: 3,
    name: 'Covid-19 News Analysis',
    description: 'Analyzed the news for sentiment and covid-19 similarities with granger causaulity statistics.',
    image: '/images/covid.png',
    url: 'https://github.com/DrNogNog/Granger-Causality/tree/main/Project%20Code',
    type: 'project'
  },
  {
    id: 4,
    name: 'Natural Language Processing & Gates',
    description: 'Natural Language Processing.',
    image: '/images/nlp.png',
    url: 'https://github.com/DrNogNog/Natural-Language-Processing-2021-22',
    type: 'project'
  },
  {
    id: 5,
    name: 'Android Application',
    description: 'Connecting food and people.',
    image:'/images/android.png',
    url: 'https://github.com/DrNogNog/android501',
    type: 'project'
  },
  {
    id: 6,
    name: 'Belfe',
    description: 'Virtual Reality Cosemetic Mirror',
    image: '/images/cosemetic.png',
    url: 'https://github.com/DrNogNog/Belfe',
    type: 'project'
  },
  {
    id: 7,
    name: 'EZML',
    description: 'Machine Learning Software',
    image: '/images/yolov8.png',
    url: 'https://ezml.io/',
    type: 'project'
  },
  {
    id: 8,
    name: 'Salting and Hashing',
    description: 'Projects to show how salts and encryptions work.',
    image: '/images/salts.png',
    url: 'https://github.com/DrNogNog/Security-Code',
    type: 'project'
  },
  {
    id: 9,
    name: 'Bitcoin Mimic',
    description: 'We make a bitcoin but instead of using sha256, we use a matrix to calculate hashes.',
    image: '/images/bitcoin.png',
    url: 'https://github.com/DrNogNog/matrixcoin',
    type: 'project'
  },
  {
    id: 10,
    name: 'Combinatorics',
    description: 'Combinatorics Assignments',
    image: '/images/combinatorics.png',
    url: 'https://github.com/DrNogNog/Probability-and-Combinatoric-Structures',
    type: 'project'
  },
  {
    id: 11,
    name: 'OCaml Interpreter',
    description: 'We use ocaml to build string interpreters, for the terminal',
    image: '/images/parser.png',
    url: 'https://github.com/DrNogNog/OCaml-2021-22',
    type: 'project'
  },
  {
    id: 12,
    name: 'Voting Patterns',
    description: 'We built analysis for baystate banner to see places that will need more focus for the democratic vote.',
    image: '/images/votingpattern.png',
    url: 'https://github.com/DrNogNog/Voting-Patterns-Analysis',
    type: 'project'
  },  
  {
    id: 13,
    name: 'Photography',
    description: 'Professional photography portfolio',
    image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    url: 'https://example.com/photography',
    type: 'photography'
  },
  {
    id: 14,
    name: 'Resume',
    description: 'Download my professional resume',
    image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    url: 'https://drive.google.com/file/d/1Gk5vniGQC4d3tkodRFjL17kkkZBgAosx/view?usp=sharing',
    type: 'resume'
  }
];




const Work = () => {
  return (
    <div className="min-h-screen bg-[#e5b3e5] p-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-4 gap-4">
          {projects.map((project) => (
            <a
              key={project.id}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
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
              <div className="absolute right-2 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity z-10">
                {project.type === "resume" ? (
                  <Download className="text-white w-6 h-6" />
                ) : (
                  <ArrowRight className="text-white w-6 h-6" />
                )}
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;

