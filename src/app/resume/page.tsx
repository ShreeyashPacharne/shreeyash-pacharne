export default function Resume() {
  const skills = {
    languages: ["Python", "C/C++", "JavaScript", "TypeScript", "Flask", "Angular", "REST API", "PostgreSQL", "SQLAlchemy", "NoSQL", "GraphQL"],
    devops: ["Redis", "Kubernetes", "Docker", "CI/CD", "Jenkins", "Git", "Linux", "Microservices"],
    cloud: ["AWS", "Azure", "Caching"],
    ai_ml: ["Gen AI", "PyTorch", "Langchain", "LLMS", "Pandas", "Machine Learning", "FullStack Backend", "Object-Oriented Design"]
  };

  const education = [
    {
      school: "University of California San Diego (UCSD)",
      degree: "Masters of Science in Computer Science",
      period: "2024 - 2026",
      gpa: "GPA: 3.8/4.00",
      location: "San Diego, CA",
      courses: [
        "Algorithm Design and Analysis",
        "Operating Systems Principles",
        "Statistical Natural Language Processing",
        "Recommender Systems and Web Mining",
        "ML: Learning Algorithms, Fairness, Bias & Transparency in ML"
      ]
    },
    {
      school: "Savitribai Phule Pune University",
      degree: "Bachelor of Engineering in Computer Engineering",
      period: "2019 - 2023",
      gpa: "First Class with Distinction (GPA: 3.49/4.00)",
      location: "Pune, IN"
    }
  ];

  const experience = [
    {
      title: "Associate Software Engineer",
      company: "Inventive IT",
      period: "Aug 2023 - July 2024",
      location: "Pune, IN",
      achievements: [
        "Architected and deployed vendor APIs to integrate critical external data feeds into our business intelligence platform – reducing system downtime by 20% and enabling near real-time data synchronization",
        "Engineered an in-app chat solution by integrating Microsoft Teams, replacing traditional email query handling and achieving a 91% improvement in client response times",
        "Spearheaded the design and implementation of a revenue-driving AI chatbot using Llama 3 (7B), LangChain, and Docker on AWS – delivering personalized user insights that boosted client campaign activity by 15%",
        "Optimized automated business reporting workflows by leveraging Python, PyPDF, and data visualization tools to generate dynamic pacing, billing, and campaign overview reports – cutting report generation time by 50%",
        "Collaborated with IT and cross-functional teams to establish resource systems (VMware hypervisors, Linux systems, A100 GPUs) and orchestrate CI/CD pipelines with Jenkins – boosting operational stability by 30% and ensuring secure production deployments"
      ]
    },
    {
      title: "Software Engineering Intern",
      company: "Inventive IT",
      period: "Sept 2022 - Aug 2023",
      location: "Pune, IN",
      achievements: [
        "Developed robust backend RESTful APIs using Python, Flask, and SQLAlchemy to perform CRUD operations on a PostgreSQL database for a client-facing SaaS platform – enhancing data retrieval efficiency by 25%",
        "Engineered a bi-directional real-time notification system by integrating WebSockets with Redis, which reduced client notification latency by 30% and increased user engagement",
        "Implemented automated email scheduling and token-based authentication modules that streamlined client communications – cutting manual processing time by 40%",
        "Collaborated with cross-functional agile teams to design and deliver scalable front-end components using Angular and TypeScript, ensuring seamless integration with backend services",
        "Conducted comprehensive unit and functional testing using Postman and browser debugging tools, identifying and resolving critical production bugs to boost overall system stability"
      ]
    }
  ];

  const projects = [
    {
      title: "Natural Language to SQL-query Generation",
      period: "Oct 2024 - Dec 2024",
      achievements: [
        "Addressed schema ambiguity, improving column selection accuracy from 50% (baseline) to 80% using T5",
        "Enhanced dataset processing, optimizing query execution with WhiSQL, generating 87k+ annotated pairs"
      ]
    },
    {
      title: "Yelp Restaurant Recommender System",
      period: "Nov 2024 - Dec 2024",
      achievements: [
        "Developed a Truncated SVD-based model improving rating prediction accuracy by 12%",
        "Mapped Yelp reviews to 1.19K+ restaurants, ensuring data integrity and consistency"
      ]
    },
    {
      title: "Byonic.AI: AI-Driven Demand Generation Platform",
      period: "Sept 2022 - July 2024",
      achievements: [
        "Optimized real-time data ingestion, enhancing backend scalability and boosting lead processing efficiency by 25%",
        "Designed interactive dashboards, improving lead conversion visibility and decision-making speed by 15%"
      ]
    }
  ];

  const publications = [
    {
      title: "Sign Language Recognition: A Deep CNN Approach for Accurate Alphabet Identification",
      conference: "IJRMETS 2023",
      period: "Apr 2022 - May 2023",
      guide: "Guide – Prof. Dipali Khairnar"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-4xl mx-auto container-padding">
        <div className="bg-white rounded-lg shadow-lg p-8">
          {/* Header */}
          <header className="mb-8 pb-8 border-b border-gray-200">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Shreeyash Pacharne</h2>
            <p className="text-xl text-gray-600 mb-4">Software Engineer | MS Computer Science Student</p>
            <div className="text-gray-600">
              <p>San Diego, California</p>
              <p>spacharne@ucsd.edu</p>
              <div className="flex space-x-4 mt-2">
                <a href="https://github.com/shreeyashpacharne" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-500">
                  GitHub
                </a>
                <a href="https://linkedin.com/in/shreeyashpacharne" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-500">
                  LinkedIn
                </a>
              </div>
            </div>
          </header>

          {/* Skills */}
          <section className="mb-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Technical Skills</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-medium text-gray-900 mb-2">Languages & Frameworks</h4>
                <p className="text-gray-600">{skills.languages.join(", ")}</p>
              </div>
              <div>
                <h4 className="font-medium text-gray-900 mb-2">DevOps & Cloud</h4>
                <p className="text-gray-600">{[...skills.devops, ...skills.cloud].join(", ")}</p>
              </div>
              <div className="md:col-span-2">
                <h4 className="font-medium text-gray-900 mb-2">AI/ML & Other</h4>
                <p className="text-gray-600">{skills.ai_ml.join(", ")}</p>
              </div>
            </div>
          </section>

          {/* Education */}
          <section className="mb-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Education</h3>
            {education.map((edu, index) => (
              <div key={index} className="mb-6">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-medium text-gray-900">{edu.school}</h4>
                    <p className="text-gray-600">{edu.degree}</p>
                    {edu.courses && (
                      <ul className="list-disc list-inside text-gray-600 mt-2">
                        {edu.courses.map((course, i) => (
                          <li key={i}>{course}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                  <div className="text-right">
                    <p className="text-gray-600">{edu.period}</p>
                    <p className="text-gray-600">{edu.location}</p>
                    <p className="text-gray-600">{edu.gpa}</p>
                  </div>
                </div>
              </div>
            ))}
          </section>

          {/* Experience */}
          <section className="mb-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Professional Experience</h3>
            {experience.map((exp, index) => (
              <div key={index} className="mb-6">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h4 className="font-medium text-gray-900">{exp.title}</h4>
                    <p className="text-gray-600">{exp.company}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-gray-600">{exp.period}</p>
                    <p className="text-gray-600">{exp.location}</p>
                  </div>
                </div>
                <ul className="list-disc list-inside text-gray-600">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i}>{achievement}</li>
                  ))}
                </ul>
              </div>
            ))}
          </section>

          {/* Projects */}
          <section className="mb-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Projects</h3>
            {projects.map((project, index) => (
              <div key={index} className="mb-6">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-medium text-gray-900">{project.title}</h4>
                  <p className="text-gray-600">{project.period}</p>
                </div>
                <ul className="list-disc list-inside text-gray-600">
                  {project.achievements.map((achievement, i) => (
                    <li key={i}>{achievement}</li>
                  ))}
                </ul>
              </div>
            ))}
          </section>

          {/* Publications */}
          <section>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Publications</h3>
            {publications.map((pub, index) => (
              <div key={index} className="mb-6">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h4 className="font-medium text-gray-900">{pub.title}</h4>
                    <p className="text-gray-600">{pub.conference}</p>
                    <p className="text-gray-600">{pub.guide}</p>
                  </div>
                  <p className="text-gray-600">{pub.period}</p>
                </div>
              </div>
            ))}
          </section>
        </div>
      </div>
    </div>
  );
}
