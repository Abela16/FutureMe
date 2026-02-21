function Navbar() {
  const scrollToSection = (sectionId) => {
    if (sectionId === "intro") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <nav className="bg-transparent text-gray-800 px-8 py-4 flex justify-between items-center sticky top-0 z-50">
      <h1 className="text-lg font-bold">Future Dev Twin</h1>

      <div className="space-x-6">
        <button 
          onClick={() => scrollToSection("intro")}
          className="hover:text-blue-600 transition cursor-pointer"
        >
          Home
        </button>
        <button 
          onClick={() => scrollToSection("form-section")}
          className="hover:text-blue-600 transition cursor-pointer"
        >
          Start
        </button>
      </div>
    </nav>
  );
}

export default Navbar;