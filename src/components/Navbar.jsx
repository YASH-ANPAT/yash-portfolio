import { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

const navigationItems = [
  { to: "/", label: "Home" },
  { to: "/projects", label: "Projects" },
  { to: "/ai-labs", label: "AI Labs" },
  { to: "/about", label: "About" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  /*
   * The boot animation is only used on the Home page.
   * Other pages keep the normal navbar behavior.
   */
  const isHomePage = location.pathname === "/";

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 border-b border-white/[0.06] bg-black/70 backdrop-blur-md ${
        isHomePage ? "home-navbar-boot" : ""
      }`}
      aria-label="Main navigation"
    >
      {/* Desktop header */}
      <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-6 md:px-10 lg:px-12">
        <Link
          to="/"
          onClick={() => setIsMenuOpen(false)}
          className="text-sm font-semibold uppercase tracking-[0.22em] text-white transition-opacity duration-200 hover:opacity-75 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500/70 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
          aria-label="Go to the home page"
        >
          YASH.ANPAT
        </Link>

        {/* Desktop navigation links */}
        <div className="hidden items-center gap-8 md:flex">
          {navigationItems.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === "/"}
              className={({ isActive }) =>
                `relative py-2 text-xs font-medium uppercase tracking-[0.14em] transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500/70 ${
                  isActive
                    ? "text-white"
                    : "text-white/55 hover:text-white"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {label}

                  {/* Active page indicator */}
                  <span
                    className={`absolute bottom-0 left-0 h-px bg-red-500 transition-all duration-200 ${
                      isActive ? "w-full" : "w-0"
                    }`}
                    aria-hidden="true"
                  />
                </>
              )}
            </NavLink>
          ))}
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center border border-white/10 text-white md:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500/70"
          aria-label={
            isMenuOpen ? "Close navigation menu" : "Open navigation menu"
          }
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsMenuOpen((value) => !value)}
        >
          <span className="sr-only">
            {isMenuOpen ? "Close menu" : "Open menu"}
          </span>

          {/* Hamburger / close icon */}
          <span className="flex w-4 flex-col gap-1">
            <span
              className={`h-px w-full bg-white transition-transform duration-200 ${
                isMenuOpen ? "translate-y-[3px] rotate-45" : ""
              }`}
            />

            <span
              className={`h-px w-full bg-white transition-opacity duration-200 ${
                isMenuOpen ? "opacity-0" : ""
              }`}
            />

            <span
              className={`h-px w-full bg-white transition-transform duration-200 ${
                isMenuOpen ? "-translate-y-[3px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </div>

      {/* Mobile navigation */}
      <div
        id="mobile-navigation"
        className={`border-t border-white/[0.06] bg-black/95 md:hidden ${
          isMenuOpen ? "block" : "hidden"
        }`}
      >
        <div className="mx-auto flex max-w-7xl flex-col px-6 py-4">
          {navigationItems.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === "/"}
              onClick={() => setIsMenuOpen(false)}
              className={({ isActive }) =>
                `border-b border-white/[0.06] py-4 text-xs font-medium uppercase tracking-[0.14em] transition-colors duration-200 last:border-b-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500/70 ${
                  isActive
                    ? "text-white"
                    : "text-white/55 hover:text-white"
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
}