export default function BlogPost({ params }: { params: { id: string } }) {
  // In a real application, you would fetch the blog post data based on the ID
  const post = {
    id: params.id,
    title: "Adventure in [Destination]",
    date: "April 2024",
    content: `
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      
      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
    `,
    images: [
      "/blog/post1-1.jpg",
      "/blog/post1-2.jpg",
      "/blog/post1-3.jpg",
    ],
    tags: ["Travel", "Adventure", "Culture"],
  };

  return (
    <div className="min-h-screen pt-20">
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <header className="mb-8">
          <div className="flex space-x-2 mb-4">
            {post.tags.map((tag, index) => (
              <span
                key={index}
                className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800"
              >
                {tag}
              </span>
            ))}
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{post.title}</h1>
          <p className="text-gray-500">{post.date}</p>
        </header>

        {/* Featured Image */}
        <div className="relative h-96 rounded-lg overflow-hidden mb-8">
          <div className="absolute inset-0 bg-gray-200 flex items-center justify-center text-gray-500">
            Featured Image
          </div>
        </div>

        {/* Content */}
        <div className="prose max-w-none">
          {post.content.split('\n\n').map((paragraph, index) => (
            <p key={index} className="mb-4 text-gray-700">
              {paragraph}
            </p>
          ))}
        </div>

        {/* Image Gallery */}
        <div className="mt-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Photo Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {post.images.map((image, index) => (
              <div key={index} className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
                <div className="w-full h-48 bg-gray-200 flex items-center justify-center text-gray-500">
                  Travel Photo {index + 1}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div className="mt-12 flex justify-between">
          <a
            href="/blog"
            className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
          >
            ← Back to Blog
          </a>
        </div>
      </article>
    </div>
  );
}
