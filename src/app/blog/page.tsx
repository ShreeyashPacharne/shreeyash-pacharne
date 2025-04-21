const blogPosts = [
  {
    id: 1,
    title: "Adventure in [Destination]",
    date: "April 2024",
    excerpt: "Exploring the beautiful landscapes and culture of [Destination]...",
    coverImage: "/blog/post1.jpg",
    tags: ["Travel", "Adventure", "Culture"],
  },
  // Add more blog posts
];

export default function Blog() {
  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Travel Blog</h1>

        {/* Featured Post */}
        <div className="mb-12">
          <div className="relative h-96 rounded-lg overflow-hidden">
            <div className="absolute inset-0 bg-gray-200 flex items-center justify-center text-gray-500">
              Featured Post Image
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-6 text-white">
              <div className="flex space-x-2 mb-2">
                {blogPosts[0].tags.map((tag, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h2 className="text-2xl font-bold mb-2">{blogPosts[0].title}</h2>
              <p className="text-gray-200">{blogPosts[0].excerpt}</p>
              <p className="mt-2 text-sm">{blogPosts[0].date}</p>
            </div>
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article key={post.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="aspect-w-16 aspect-h-9 bg-gray-200">
                <div className="w-full h-48 flex items-center justify-center text-gray-500">
                  Blog Post Image
                </div>
              </div>
              <div className="p-6">
                <div className="flex space-x-2 mb-2">
                  {post.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{post.title}</h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{post.date}</span>
                  <a
                    href={`/blog/${post.id}`}
                    className="text-indigo-600 hover:text-indigo-500 font-medium"
                  >
                    Read More →
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
