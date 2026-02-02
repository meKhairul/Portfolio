export default function Navbar({ dark, setDark }) {
  const sections = ["education", "experience", "research", "projects", "skills", "awards", "activities"];

const handleScroll = (id) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
};

  return (
    <nav className="flex justify-between items-center p-6 shadow bg-white dark:bg-gray-800 sticky top-0 z-50">
      <h1 className="font-bold text-xl cursor-pointer" onClick={() => handleScroll(id)}>Md. Khairul Alam</h1>

      <div className="flex items-center gap-4 flex-wrap">
        {sections.map((sec) => (
          <button
            key={sec}
            onClick={() => handleScroll(sec)}
            className="text-sm font-medium hover:text-green-500 dark:hover:text-[#cdf1cd] transition-colors duration-200"
          >
            {sec.charAt(0).toUpperCase() + sec.slice(1)}
          </button>
        ))}

        <button
          onClick={() => setDark(!dark)}
          className="px-4 py-2 rounded bg-gray-200 dark:bg-gray-700 text-sm"
        >
          {dark ? "☀️ Light" : "🌙 Dark"}
        </button>
      </div>
    </nav>
  );
}
