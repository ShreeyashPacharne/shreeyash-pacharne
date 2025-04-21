export default function Resume() {
  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900">Resume</h1>
          <a
            href="/your-resume.pdf"
            className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700"
            download
          >
            Download PDF
          </a>
        </div>

        {/* Resume Content */}
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

          {/* Education */}
          <section className="mb-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Education</h3>
            <div className="mb-4">
              <h4 className="text-lg font-medium text-gray-900">Master of Science in Computer Science</h4>
              <p className="text-gray-600">University of California San Diego</p>
              <p className="text-gray-500">2024 - Present</p>
              <ul className="mt-2 list-disc list-inside text-gray-600">
                <li>Relevant Coursework: [Courses]</li>
                <li>Research Focus: [Research Areas]</li>
              </ul>
            </div>
          </section>

          {/* Experience */}
          <section className="mb-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Professional Experience</h3>
            <div className="space-y-6">
              {/* Add your experience items here */}
              <div>
                <h4 className="text-lg font-medium text-gray-900">[Job Title]</h4>
                <p className="text-gray-600">[Company Name]</p>
                <p className="text-gray-500">[Date Range]</p>
                <ul className="mt-2 list-disc list-inside text-gray-600">
                  <li>[Achievement/Responsibility 1]</li>
                  <li>[Achievement/Responsibility 2]</li>
                  <li>[Achievement/Responsibility 3]</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Skills */}
          <section className="mb-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Technical Skills</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="text-lg font-medium text-gray-900 mb-2">Programming Languages</h4>
                <p className="text-gray-600">[Languages]</p>
              </div>
              <div>
                <h4 className="text-lg font-medium text-gray-900 mb-2">Frameworks & Tools</h4>
                <p className="text-gray-600">[Frameworks]</p>
              </div>
              <div>
                <h4 className="text-lg font-medium text-gray-900 mb-2">Databases</h4>
                <p className="text-gray-600">[Databases]</p>
              </div>
              <div>
                <h4 className="text-lg font-medium text-gray-900 mb-2">Other Technologies</h4>
                <p className="text-gray-600">[Technologies]</p>
              </div>
            </div>
          </section>

          {/* Projects */}
          <section>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Notable Projects</h3>
            <div className="space-y-4">
              {/* Add your project items here */}
              <div>
                <h4 className="text-lg font-medium text-gray-900">[Project Name]</h4>
                <p className="text-gray-600 mb-2">[Technologies Used]</p>
                <ul className="list-disc list-inside text-gray-600">
                  <li>[Key Feature/Achievement 1]</li>
                  <li>[Key Feature/Achievement 2]</li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
