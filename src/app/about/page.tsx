export default function About() {
  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">About Me</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Profile Section */}
          <div>
            <div className="aspect-w-1 aspect-h-1 rounded-lg overflow-hidden">
              {/* Replace with your image */}
              <div className="w-full h-96 bg-gray-200 flex items-center justify-center text-gray-500">
                Profile Image
              </div>
            </div>
          </div>
          
          {/* Bio Section */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Software Engineer & Graduate Student</h2>
            <div className="prose max-w-none">
              <p className="mb-4">
                Hello! I'm Shreeyash Pacharne, a passionate software engineer currently pursuing my Master's in Computer Science 
                at the University of California San Diego (UCSD). My journey in technology is driven by a desire to create 
                innovative solutions that make a positive impact.
              </p>
              
              <p className="mb-4">
                At UCSD, I'm focusing on [Your Specialization/Research Areas]. My academic pursuits are complemented by 
                practical experience in software development, where I've worked on projects ranging from [Project Types/Domains].
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">Technical Skills</h3>
              <ul className="list-disc pl-5 mb-4">
                <li>Programming Languages: [Languages]</li>
                <li>Web Technologies: [Technologies]</li>
                <li>Frameworks & Tools: [Frameworks]</li>
                <li>Database Systems: [Databases]</li>
                <li>Cloud Platforms: [Platforms]</li>
              </ul>

              <h3 className="text-xl font-semibold mt-6 mb-3">Beyond Technology</h3>
              <p className="mb-4">
                When I'm not coding or studying, you'll find me exploring new places and documenting my travels. 
                I believe that traveling broadens our perspectives and brings fresh insights to problem-solving. 
                Through my travel blog, I share these experiences and the lessons learned along the way.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
