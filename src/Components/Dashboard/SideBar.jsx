import { NavLink } from "react-router-dom";

export default function Sidebar() {
  const navItems = [
    { name: "Home", path: "/dashboard/home" },
    { name: "News", path: "/dashboard/news" },
    { name: "Activities", path: "/dashboard/activities" },
    { name: "Gallery", path: "/dashboard/gallery" },
    { name: "Team", path: "/dashboard/team" },
    { name: "Board Team", path: "/dashboard/board_team" },
    { name: "Users", path: "/dashboard/users" },
  ];

  return (
    <aside className="w-64 h-screen bg-gradient-to-b from-slate-800 to-slate-900 text-white shadow-lg flex flex-col">
      {/* Brand Header */}
      <div className="p-6 border-b border-slate-700">
        <h2 className="text-2xl font-bold tracking-tight">Vande Mataram Admin</h2>
        <p className="text-sm text-slate-400">Dashboard Panel</p>
      </div>

      {/* Navigation Links */}
      <nav className="flex-1 p-4 space-y-2">
        {navItems.map(({ name, path }) => (
          <NavLink
            key={path}
            to={path}
            className={({ isActive }) =>
              `block px-4 py-2 rounded-md text-sm font-medium transition-all ${
                isActive
                  ? "bg-slate-700 text-white"
                  : "text-slate-300 hover:bg-slate-700 hover:text-white"
              }`
            }
          >
            {name}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}
