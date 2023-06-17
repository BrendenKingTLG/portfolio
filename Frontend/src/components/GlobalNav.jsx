import { NavLink } from "react-router-dom";

export default function GlobalNav() {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light" id="globalnav">
        <div
          class="collapse navbar-collapse justify-content-center"
          id="navbarNav"
        >
          <ul class="navbar-nav">
            <li class="nav-item">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link pending"
                }
                to="/"
              >
                home
              </NavLink>
            </li>
            <li class="nav-item">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link pending"
                }
                to="/contact"
              >
                contact
              </NavLink>
            </li>
            <li class="nav-item">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link pending"
                }
                to="/order"
              >
                order
              </NavLink>
            </li>
            <li class="nav-item">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link pending"
                }
                to="/staff"
              >
                staff
              </NavLink>
            </li>
            <li class="nav-item">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link pending"
                }
                to="/log"
              >
                log
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
