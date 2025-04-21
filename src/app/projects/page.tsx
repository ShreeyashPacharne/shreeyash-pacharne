const projects = [
  {
    title: "Natural Language to SQL-query Generation",
    period: "Oct 2024 - Dec 2024",
    description: "A machine learning system that converts natural language questions into SQL queries",
    highlights: [
      "Addressed schema ambiguity, improving column selection accuracy from 50% to 80% using T5",
      "Enhanced dataset processing, optimizing query execution with WhiSQL, generating 87k+ annotated pairs"
    ],
    tags: ["Python", "Machine Learning", "NLP", "SQL", "T5", "WhiSQL"]
  },
  {
    title: "Yelp Restaurant Recommender System",
    period: "Nov 2024 - Dec 2024",
    description: "A recommendation system for restaurants using Yelp's dataset",
    highlights: [
      "Developed a Truncated SVD-based model improving rating prediction accuracy by 12%",
      "Mapped Yelp reviews to 1.19K+ restaurants, ensuring data integrity and consistency"
    ],
    tags: ["Python", "Machine Learning", "SVD", "Data Analysis", "Recommender Systems"]
  },
  {
    title: "Byonic.AI: AI-Driven Demand Generation Platform",
    period: "Sept 2022 - July 2024",
    description: "An AI-powered platform for optimizing lead generation and conversion",
    highlights: [
      "Optimized real-time data ingestion, enhancing backend scalability and boosting lead processing efficiency by 25%",
      "Designed interactive dashboards, improving lead conversion visibility and decision-making speed by 15%"
    ],
    tags: ["Python", "React", "Node.js", "AI/ML", "Data Visualization"]
  },
  {
    title: "Sign Language Recognition",
    period: "Apr 2022 - May 2023",
    description: "Deep CNN approach for accurate alphabet identification in sign language",
    publication: {
      title: "Sign Language Recognition: A Deep CNN Approach for Accurate Alphabet Identification",
      conference: "IJRMETS 2023",
      guide: "Prof. Dipali Khairnar"
    },
    tags: ["Python", "Deep Learning", "Computer Vision", "CNN", "OpenCV"]
  }
];

export default function Projects() {
  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Projects</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              {/* Project Image */}
              <div className="aspect-w-16 aspect-h-9 bg-gray-200">
                <div className="w-full h-48 flex items-center justify-center text-gray-500">
                  Project Image
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900">{project.title}</h3>
                <p className="mt-2 text-gray-600">{project.description}</p>
                
                {/* Technologies */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tech, i) => (
                    <span
                      key={i}
                      className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Highlights */}
                {project.highlights && (
                  <div className="mt-4">
                    <h4 className="text-lg font-semibold text-gray-900">Highlights</h4>
                    <ul className="list-disc pl-4">
                      {project.highlights.map((highlight, i) => (
                        <li key={i} className="text-gray-600">{highlight}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Publication */}
                {project.publication && (
                  <div className="mt-4">
                    <h4 className="text-lg font-semibold text-gray-900">Publication</h4>
                    <p className="text-gray-600">{project.publication.title}</p>
                    <p className="text-gray-600">{project.publication.conference}</p>
                    <p className="text-gray-600">Guide: {project.publication.guide}</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
