const Footer = () => {
  return (
    <footer className="mt-20 text-black">
      <h2 className="text-5xl md:text-7xl font-serif font-medium leading-tight">
        Let's push<br />
        things <span className="italic">forward.</span>
      </h2>

      <div className="mt-10 max-w-2xl text-lg text-neutral-700">
        <p>
          I can only take on a limited number of projects each year. For this reason, I choose
          to work exclusively with companies that I'm genuinely enthusiastic about and where I
          believe my experience can truly benefit the business.
        </p>

        <p className="mt-6">
          If you're working on something great, reach out and let's chat!
        </p>
      </div>

      <div className="mt-10 flex flex-col md:flex-row items-start md:items-center gap-4 text-lg">
        <a
          href="/about"
          className="border-b-2 border-blue-500 hover:text-blue-600 transition"
        >
          More about me
        </a>
        <a
          href="mailto:hey@dantase.com"
          className="border-b-2 border-yellow-400 hover:text-yellow-500 transition"
        >
          hey@dantase.com
        </a>
      </div>
    </footer>
  );
};

export default Footer;
