import { NavLink } from "react-router";

const SidebarLink = ({ to, icon, text }: { to: string; icon: string; text: string }) => {
  return (
    <NavLink to={to} className="sidebar-item">
      <span className="sidebar-link">
        <i className={icon}></i>
        <span>{text}</span>
      </span>
    </NavLink>
  );
};

export default SidebarLink;
