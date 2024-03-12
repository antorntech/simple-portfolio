const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <>
      <div className="container">
        {/* <!-- Logo --> */}
        <a className="logo" href="#">
          <img src="img/logo-footer.png" alt="logo" />
        </a>

        <div className="social">
          <a href="#0">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#0">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#0">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#0">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="#0">
            <i className="fab fa-behance"></i>
          </a>
        </div>

        <p>
          &copy; {year} All Rights Reserved by{" "}
          <span style={{ color: "green" }}>AM ANTOR</span>.
        </p>
      </div>
    </>
  );
};

export default Footer;
