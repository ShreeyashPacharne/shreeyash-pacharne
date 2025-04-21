'use client';

const experiences = [
  {
    title: "Master's Student",
    company: "University of California San Diego",
    period: "2024 - 2026",
    description: "Pursuing MS in Computer Science with focus on AI and Machine Learning",
    highlights: [
      "Research in Optimized ML Inference on Heterogeneous Systems",
      "Relevant Coursework: Algorithm Design and Analysis, Operating Systems Principles, Statistical Natural Language Processing",
      "Academic projects in C/C++, Python"
    ]
  },
  {
    title: "Associate Software Engineer",
    company: "Inventive IT",
    period: "Aug 2023 - July 2024",
    description: "Led development of critical backend systems and AI-driven solutions",
    highlights: [
      "Architected vendor APIs integration, reducing data synchronization time by 20%",
      "Engineered in-app chat with Microsoft Teams, achieving 91% improvement in response time",
      "Developed AI chatbot using LLaMA 3, boosting campaign activity by 15%",
      "Optimized reporting workflows, cutting report generation time by 50%",
      "Improved operational stability by 30% through CI/CD pipeline enhancements"
    ]
  },
  {
    title: "Software Engineering Intern",
    company: "Inventive IT",
    period: "Sept 2022 - Aug 2023",
    description: "Developed robust backend systems and real-time applications",
    highlights: [
      "Built RESTful APIs using Python and Flask, enhancing data retrieval by 25%",
      "Integrated WebSockets with Redis, reducing notification latency by 30%",
      "Automated email scheduling, cutting manual processing by 40%",
      "Collaborated on cross-functional projects using Angular and TypeScript"
    ]
  }
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
