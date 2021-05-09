import { NavLink } from "react-router-dom";

export default function Navbare() {
  return (
    <div Style={{ marginBottom: 30 }}>
      <NavLink to="/" style={{ marginRight: 30 }}>
        Home
      </NavLink>
      <NavLink to="/feed" style={{ marginRight: 30 }}>
        Feed
      </NavLink>
      <NavLink to="/details" style={{ marginRight: 30 }}>
        Details
      </NavLink>
    </div>
  );
}
