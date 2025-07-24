// src/components/Header.jsx

const Header = () => {
  return (
    <header className="w-full  flex items-center justify-between ">
      {/* Logo */}
      <div className="flex items-center">
        <img
          src="/logo.svg" // Replace with your actual logo path
          alt="Logo"
          className="h-6 w-auto"
        />
      </div>

      {/* Center nav links */}
      <nav className="hidden md:flex gap-8 text-sm font-medium text-[#111111]">
        <a href="#projects" className="hover:underline">Project</a>
        <a href="#about" className="hover:underline">About</a>
        <a href="#resume" className="hover:underline">Resumé</a>
      </nav>

      {/* CTA Button */}
      <div>
        <button className="border border-[#111111] rounded-full px-4 py-1.5 text-sm hover:bg-[#111111] hover:text-white transition">
          Let’s Talk
        </button>
      </div>
    </header>
  );
};

export default Header;
