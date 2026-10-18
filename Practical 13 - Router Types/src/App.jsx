
import { useState } from "react";
import {
  HashRouter,
  MemoryRouter,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import "./App.css";

function Home() {
  return (
    <div className="page">
      <h2>🏠 Home Page</h2>
      <p>Welcome to the Router Types practical.</p>
    </div>
  );
}

function About() {
  return (
    <div className="page">
      <h2>📘 About Page</h2>
      <p>This page demonstrates React Router navigation.</p>
    </div>
  );
}

function Contact() {
  return (
    <div className="page">
      <h2>📞 Contact Page</h2>
      <p>Email: student@example.com</p>
    </div>
  );
}

function NavigationPages() {
  const location = useLocation();

  return (
    <>
      <nav className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>

      <p className="route-info">
        Current route: <strong>{location.pathname}</strong>
      </p>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

function HashRouterDemo() {
  return (
    <HashRouter>
      <NavigationPages />
    </HashRouter>
  );
}

function MemoryRouterDemo() {
  return (
    <MemoryRouter initialEntries={["/"]}>
      <NavigationPages />
    </MemoryRouter>
  );
}

function StaticRouterDemo() {
  const [page, setPage] = useState("Home");

  return (
    <div className="page">
      <h2>🧭 Static Router Concept</h2>
      <p>
        StaticRouter is used for server-side rendering. This section
        demonstrates fixed page selection in the browser.
      </p>

      <div className="nav-links">
        {["Home", "About", "Contact"].map((item) => (
          <button key={item} onClick={() => setPage(item)}>
            {item}
          </button>
        ))}
      </div>

      <p className="route-info">Selected page: {page}</p>
      {page === "Home" && <Home />}
      {page === "About" && <About />}
      {page === "Contact" && <Contact />}
    </div>
  );
}

export default function App() {
  const [routerType, setRouterType] = useState("hash");

  return (
    <main className="app-container">
      <header className="hero">
        <h1>React Router Types</h1>
        <p>Explore HashRouter, MemoryRouter and the StaticRouter concept.</p>
      </header>

      <section className="router-card">
        <h2>Select Router Type</h2>

        <div className="router-buttons">
          <button
            className={routerType === "hash" ? "active" : ""}
            onClick={() => setRouterType("hash")}
          >
            HashRouter
          </button>

          <button
            className={routerType === "memory" ? "active" : ""}
            onClick={() => setRouterType("memory")}
          >
            MemoryRouter
          </button>

          <button
            className={routerType === "static" ? "active" : ""}
            onClick={() => setRouterType("static")}
          >
            StaticRouter Concept
          </button>
        </div>

        <div className="demo-area">
          {routerType === "hash" && <HashRouterDemo />}
          {routerType === "memory" && <MemoryRouterDemo />}
          {routerType === "static" && <StaticRouterDemo />}
        </div>
      </section>

    </main>
  );
}
