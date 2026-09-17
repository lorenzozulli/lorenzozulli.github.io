import { Link } from "@tanstack/react-router";
import './style.css'

export const NavBar = () => {
  const navBarItems = [
    { to: '/', label: 'About' },
    { to: '/blog', label: 'Blog' }
  ];

  return (
    <nav className="py-2">
      {navBarItems.map((item) => (
        <Link
          to={item.to}
          className={'tab-link'}
        >{ item.label }</Link>
      ))}
    </nav>
  );
}
