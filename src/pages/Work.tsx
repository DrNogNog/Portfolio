import { ArrowRight, Download } from 'lucide-react'; // Updated to use Download as per lucide-react; if FileDownload is custom, import accordingly

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
    name: 'Crime Face',
    description: 'A backend API designed to identify criminals by comparing uploaded images against a database of mugshots. Leveraging FastAPI, Jina AI CLIP, and a pgvector-powered Postgres database, we created a system that calculates image embeddings, performs similarity searches, and returns relevant metadata like offense and physical characteristics.',
    image: '/images/facecrime.png',
    url: 'https://facecrime.io',
    type: 'project'
  },
  {
    id: 2,
    name: 'EZML',
    description: 'Machine Learning Software',
    image: '/images/yolov8.png',
    url: 'https://ezml.io/',
    type: 'project'
  },
  {
    id: 3,
    name: 'Distributed Systems',
    description: 'A portfolio of all my distributed system learnings.',
    image: '/images/distributed.png',
    url: 'https://github.com/DrNogNog/Operating-Systems-Distributed-Systems',
    type: 'project'
  },
  {
    id: 4,
    name: 'Covid-19 News Analysis',
    description: 'Analyzed the news for sentiment and covid-19 similarities with granger causaulity statistics.',
    image: '/images/covid.png',
    url: 'https://github.com/DrNogNog/Granger-Causality/tree/main/Project%20Code',
    type: 'project'
  },
  {
    id: 5,
    name: 'Natural Language Processing & Gates',
    description: 'Natural Language Processing.',
    image: '/images/nlp.png',
    url: 'https://github.com/DrNogNog/Natural-Language-Processing-2021-22',
    type: 'project'
  },
  {
    id: 6,
    name: 'Android Application',
    description: 'Connecting food and people.',
    image:'/images/android.png',
    url: 'https://github.com/DrNogNog/android501',
    type: 'project'
  },
  {
    id: 7,
    name: 'Belfe',
    description: 'Virtual Reality Cosemetic Mirror',
    image: '/images/cosemetic.png',
    url: 'https://github.com/DrNogNog/Belfe',
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
    url: '/photography',
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
  const projectItems = projects.filter(p => p.type === 'project');
  const photographyItem = projects.find(p => p.type === 'photography');
  const resumeItem = projects.find(p => p.type === 'resume');

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-pink-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">My Work</h1>
        
        {/* Projects Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-gray-700 mb-8">Projects</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {projectItems.map((project) => (
              <a
                key={project.id}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="relative">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-300" />
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-purple-600 transition-colors">{project.name}</h3>
                  <p className="text-sm text-gray-600 line-clamp-3">{project.description}</p>
                </div>
                <div className="absolute right-4 bottom-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ArrowRight className="text-purple-600 w-6 h-6" />
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Photography and Resume Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {photographyItem && (
            <a
              href={photographyItem.url}
              className="group relative bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative">
                <img
                  src={photographyItem.image}
                  alt={photographyItem.name}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-300" />
              </div>
              <div className="p-5">
                <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-purple-600 transition-colors">{photographyItem.name}</h3>
                <p className="text-sm text-gray-600">{photographyItem.description}</p>
              </div>
              <div className="absolute right-4 bottom-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <ArrowRight className="text-purple-600 w-6 h-6" />
              </div>
            </a>
          )}
          {resumeItem && (
            <a
              href={resumeItem.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative">
                <img
                  src={resumeItem.image}
                  alt={resumeItem.name}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-300" />
              </div>
              <div className="p-5">
                <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-purple-600 transition-colors">{resumeItem.name}</h3>
                <p className="text-sm text-gray-600">{resumeItem.description}</p>
              </div>
              <div className="absolute right-4 bottom-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Download className="text-purple-600 w-6 h-6" />
              </div>
            </a>
          )}
        </section>
      </div>
    </div>
  );
};

export default Work;