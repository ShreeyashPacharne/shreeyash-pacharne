'use client';

const experiences = [
  {
    title: "Master's Student",
    company: "University of California San Diego",
    period: "2024 - Present",
    description: "Pursuing MS in Computer Science with focus on AI and Machine Learning",
    highlights: [
      "Research in Optimized ML Inference on Heterogeneous Systems",
      "Academic projects in C/C++, Python"
    ]
  },
  // Add more experiences here
];

export default function Experience() {
  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Experience</h1>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 h-full w-0.5 bg-gray-200"></div>

          {/* Experience items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className={`relative flex items-start ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}>
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 -ml-2 h-4 w-4 rounded-full bg-indigo-600"></div>

                {/* Content */}
                <div className={`ml-12 md:ml-0 md:w-1/2 ${
                  index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'
                }`}>
                  <div className="bg-white p-6 rounded-lg shadow-lg">
                    <h3 className="text-xl font-semibold text-gray-900">{exp.title}</h3>
                    <p className="text-indigo-600 font-medium">{exp.company}</p>
                    <p className="text-gray-500 mt-1">{exp.period}</p>
                    <p className="mt-4 text-gray-600">{exp.description}</p>
                    <ul className="mt-4 space-y-2">
                      {exp.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-start">
                          <span className="flex-shrink-0 h-5 w-5 text-indigo-600">•</span>
                          <span className="ml-2 text-gray-600">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
