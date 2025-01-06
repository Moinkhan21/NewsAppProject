/* eslint-disable react/prop-types */

// Navbar component that accepts a prop `setCategory`, a function to set the selected news category
const Navbar = ({ setCategory }) => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
      <div className="container-fluid">
        {/* Brand logo with a light background for contrast */}
        <a className="navbar-brand" href="#">
          <span className="badge bg-light text-dark fs-4">News</span>
        </a>
        
        {/* Toggler button for mobile responsiveness */}
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

        {/* Collapsible menu section */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            {/* List of categories, each item sets a category on click */}
            <li className="nav-item">
              <a className="nav-link" onClick={() => setCategory("technology")} href="#">Technology</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" onClick={() => setCategory("business")} href="#">Business</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" onClick={() => setCategory("health")} href="#">Health</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" onClick={() => setCategory("science")} href="#">Science</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" onClick={() => setCategory("sports")} href="#">Sports</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" onClick={() => setCategory("entertainment")} href="#">Entertainment</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
