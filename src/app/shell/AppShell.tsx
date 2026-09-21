import { NavLink, Outlet } from "react-router-dom";
import { AdsProviderComponent } from "../../features/ads/context/AdsContext";

export function AppShell() {
  return (
    <AdsProviderComponent>
      <div className="app-container">
        {/* Sidebar Navigation */}
        <aside className="sidebar">
          <div className="brand">
            <h2>VTQP</h2>
            <span>Ads Platform</span>
          </div>
          <nav className="nav-menu" aria-label="Primary navigation">
            <NavLink to="/" end className={({ isActive }) => (isActive ? "nav-item active" : "nav-item")}>
              Dashboard
            </NavLink>
            <NavLink to="/providers" className={({ isActive }) => (isActive ? "nav-item active" : "nav-item")}>
              Providers
            </NavLink>
            <NavLink to="/placements" className={({ isActive }) => (isActive ? "nav-item active" : "nav-item")}>
              Placements
            </NavLink>
            <NavLink to="/events" className={({ isActive }) => (isActive ? "nav-item active" : "nav-item")}>
              Events
            </NavLink>
          </nav>
        </aside>

        {/* Main Content Area */}
        <main className="main-content">
          <Outlet />
        </main>
      </div>
    </AdsProviderComponent>
  );
}