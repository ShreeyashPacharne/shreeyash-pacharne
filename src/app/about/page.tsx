export default function About() {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-6">About Me</h1>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Software Engineer & Graduate Student</h2>
              <div className="prose max-w-none">
                <p className="mb-4">
                  Hello! I'm Shreeyash Pacharne, a passionate software engineer currently pursuing my Master's in Computer Science 
                  at the University of California San Diego (UCSD). My journey in technology is driven by a desire to create 
                  innovative solutions that make a positive impact.
                </p>
                <p className="mb-4">
                  With a strong foundation in software engineering from Savitribai Phule Pune University, where I graduated with First Class Distinction,
                  I've developed expertise in full-stack development, AI/ML, and distributed systems. At Inventive IT, I've contributed to
                  critical projects that improved operational efficiency and user engagement.
                </p>
                <p className="mb-4">
                  My research interests focus on Optimized ML Inference on Heterogeneous Systems, and I'm passionate about
                  developing AI-driven solutions that can scale and perform efficiently.
                </p>
              </div>
            </div>

            {/* Skills Section */}
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Technical Skills</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Languages</h4>
                    <ul className="list-disc list-inside text-gray-600">
                      <li>Python</li>
                      <li>C/C++</li>
                      <li>JavaScript/TypeScript</li>
                      <li>SQL</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Technologies</h4>
                    <ul className="list-disc list-inside text-gray-600">
                      <li>React/Angular</li>
                      <li>Node.js/Flask</li>
                      <li>Docker/Kubernetes</li>
                      <li>AWS/Azure</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Education</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-gray-900">University of California San Diego</h4>
                    <p className="text-gray-600">MS in Computer Science (GPA: 3.8/4.00)</p>
                    <p className="text-gray-600">2024 - 2026</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Savitribai Phule Pune University</h4>
                    <p className="text-gray-600">Bachelor of Engineering in Computer Engineering</p>
                    <p className="text-gray-600">First Class with Distinction (GPA: 3.49/4.00)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
