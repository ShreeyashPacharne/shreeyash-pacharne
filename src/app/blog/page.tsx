const posts = [
  {
    title: "Optimizing ML Models for Production",
    date: "April 2024",
    readTime: "4 min read",
    excerpt: "Insights from implementing efficient ML inference systems and best practices for production deployment.",
    tags: ["Machine Learning", "Production", "Optimization"]
  },
  {
    title: "Building Scalable AI Systems",
    date: "March 2024",
    readTime: "5 min read",
    excerpt: "Lessons learned from developing and deploying large-scale AI applications using modern cloud infrastructure.",
    tags: ["AI", "Architecture", "Cloud"]
  },
  {
    title: "Natural Language Processing in Practice",
    date: "February 2024",
    readTime: "6 min read",
    excerpt: "Real-world applications of NLP in building intelligent systems and improving user experiences.",
    tags: ["NLP", "AI", "Software Engineering"]
  }
];

export default function Blog() {
  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-4xl mx-auto container-padding">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Technical Blog</h1>
        <div className="space-y-8">
          {posts.map((post, index) => (
            <article key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="flex-shrink-0">
                    <div className="h-10 w-10 rounded-full bg-gray-200" />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">Shreeyash Pacharne</p>
                    <div className="flex space-x-1 text-sm text-gray-500">
                      <time dateTime={post.date}>{post.date}</time>
                      <span aria-hidden="true">&middot;</span>
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </div>
                <h2 className="text-xl font-semibold text-gray-900 mb-2">
                  {post.title}
                </h2>
                <p className="text-gray-600 mb-4">
                  {post.excerpt}
                </p>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
