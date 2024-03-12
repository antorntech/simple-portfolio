const Navbar = () => {
  return (
    <>
      <div className="container">
        {/* <!-- Logo --> */}
        <a className="logo" href="#">
          AM ANTOR
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="icon-bar">
            <i className="fas fa-bars"></i>
          </span>
        </button>

        {/* <!-- navbar links --> */}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link active" href="#" data-scroll-nav="0">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" data-scroll-nav="1">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" data-scroll-nav="2">
                Services
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" data-scroll-nav="3">
                Portfolio
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" data-scroll-nav="4">
                Blog
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" data-scroll-nav="5">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
