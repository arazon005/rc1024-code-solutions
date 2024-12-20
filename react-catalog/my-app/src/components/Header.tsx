import { Outlet, Link } from 'react-router-dom';

export function Header() {
  return (
    <div>
      <nav className="p-4 bg-blue-900 text-white">
        <ul>
          <li className="inline-block px-4">
            <Link to="/about">About</Link>
          </li>
          <li className="inline-block px-4">
            <Link to="/catalogue">Catalogue</Link>
          </li>
        </ul>
      </nav>
      <Outlet></Outlet>
    </div>
  );
}
