import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-pink-50 z-0" />
        <div className="max-w-7xl mx-auto container-padding relative">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight fade-in-up">
              <span className="block text-gray-900">Hi, I'm Shreeyash Pacharne</span>
              <span className="block mt-2 gradient-text">Software Engineer & Explorer</span>
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-gray-600 fade-in-up">
              MS Computer Science student at UCSD, specializing in AI and Machine Learning.
              Passionate about building scalable systems and exploring cutting-edge technologies.
            </p>
            <div className="mt-8 flex justify-center space-x-4 fade-in-up">
              <a
                href="/projects"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
              >
                View Projects
              </a>
              <a
                href="/contact"
                className="inline-flex items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto container-padding">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Natural Language to SQL */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Natural Language to SQL Generation
                </h3>
                <p className="text-gray-600 mb-4">
                  Advanced ML system improving query accuracy by 30% using T5 transformers and WhiSQL optimization.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="tech-tag">Python</span>
                  <span className="tech-tag">ML</span>
                  <span className="tech-tag">NLP</span>
                </div>
              </div>
            </div>

            {/* Byonic.AI */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Byonic.AI Platform
                </h3>
                <p className="text-gray-600 mb-4">
                  AI-driven demand generation platform with LLaMA 3 integration, boosting campaign effectiveness by 15%.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="tech-tag">Python</span>
                  <span className="tech-tag">AI</span>
                  <span className="tech-tag">AWS</span>
                </div>
              </div>
            </div>

            {/* Sign Language Recognition */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Sign Language Recognition
                </h3>
                <p className="text-gray-600 mb-4">
                  Published research on Deep CNN approach for accurate alphabet identification in sign language.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="tech-tag">Python</span>
                  <span className="tech-tag">CNN</span>
                  <span className="tech-tag">OpenCV</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Blog Posts */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto container-padding">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Latest Blog Posts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="flex-shrink-0">
                    <div className="h-10 w-10 rounded-full bg-gray-200" />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">Shreeyash Pacharne</p>
                    <div className="flex space-x-1 text-sm text-gray-500">
                      <time dateTime="2024-04">April 2024</time>
                      <span aria-hidden="true">&middot;</span>
                      <span>4 min read</span>
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Optimizing ML Models for Production
                </h3>
                <p className="text-gray-600">
                  Insights from implementing efficient ML inference systems and best practices for production deployment.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="flex-shrink-0">
                    <div className="h-10 w-10 rounded-full bg-gray-200" />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">Shreeyash Pacharne</p>
                    <div className="flex space-x-1 text-sm text-gray-500">
                      <time dateTime="2024-03">March 2024</time>
                      <span aria-hidden="true">&middot;</span>
                      <span>5 min read</span>
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Building Scalable AI Systems
                </h3>
                <p className="text-gray-600">
                  Lessons learned from developing and deploying large-scale AI applications using modern cloud infrastructure.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
