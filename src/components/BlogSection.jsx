const blogPosts = [
  {
    title: "GREENBOX DIGITAL",
    image: "/images/blog1.png",
    description:
      "Blending digital simplicity with thoughtful design and distinctive character.",
  },
  {
    title: "MOOOVE: BESPOKE MOBILITY",
    image: "/images/blog2.png",
    description:
      "Integrating dynamism and mobility across diverse branding touchpoints.",
  },
  {
    title: "VALKYRIE DISTILLERY",
    image: "/images/blog3.png",
    description:
      "Crafting a mystical Norse-inspired brand identity for an artisanal craft gin distillery.",
  },
  {
    title: "VELDT® APPAREL",
    image: "/images/blog4.png",
    description:
      "Inspiring a local community with trend-forward clothing rooted in nature.",
  },
];

export default function BlogSection() {
  return (
    <section className="py-16">
      <h2 className="text-4xl md:text-5xl font-serif font-semibold text-[#111] mb-12">
        Are you interested in <br className="hidden md:block" /> working together?
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {blogPosts.map((post, idx) => (
          <div key={idx}>
            <div className="aspect-square overflow-hidden rounded-md shadow-md bg-gray-100">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-[1.02]"
              />
            </div>
            <h3 className="mt-4 text-sm font-semibold uppercase text-[#111]">
              {post.title}
            </h3>
            <p className="text-sm text-[#737373] mt-1">{post.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
