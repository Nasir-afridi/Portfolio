function App() {
  return (
    <>
      <nav className="navbar navbar-expand-md navbar-dark bg-dark w-full">
        <div className="container-fluid w-full">
          <img src="public/portfolio.png" className="portfolio-img" />
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-center"
            id="navbarNav"
          >
            <ul className="navbar-nav gap-4">
              <li className="nav-item">
                <a className="nav-link navbar" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link navbar" href="#">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link navbar" href="#">
                  Skills
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link navbar" href="#">
                  Projects
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link navbar" href="#">
                  Resume
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default App;
