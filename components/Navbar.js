export default function Navbar() {
  return (
    <div className="sticky-nav w-full my-0 border-b border-opacity-10 border-gray-400 bg-navbar-light dark:bg-navbar-dark bg-opacity-30">
      <nav className="flex flex-col py-2 sm:flex-row sm:justify-center sm:items-center">
        <div>
          <a href="#" className="text-2xl font-semibold text-white hover:text-gray-300">
            <span className="text-red-700">F1</span> Calendar
          </a>
        </div>
      </nav>
    </div>
  );
}
