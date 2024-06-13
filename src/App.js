import React, { Suspense, lazy } from 'react';
import { Route, Routes, Link, Outlet } from 'react-router-dom';

const Admin = lazy(() => import('./components/Admin'));
const User = lazy(() => import('./components/User'));

const Layout = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">App</Link>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/admin">Admin</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/user">User</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Outlet />
    </div>
  );
};

const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="admin" element={<Admin />} />
          <Route path="user" element={<User />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default App;
