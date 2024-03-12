const Header = () => {
  return (
    <>
      <div className="svg">
        <svg x="0px" y="0px" viewBox="0 186.5 1920 113.5">
          <polygon points="-30,300 355.167,210.5 1432.5,290 1920,198.5 1920,300"></polygon>
        </svg>
      </div>

      <div className="container">
        <div className="row">
          <div className="full-width text-center caption mt-30">
            <h1 className="cd-headline clip">
              <span>I Am </span>{" "}
              <span className="cd-words-wrapper">
                <b className="is-visible">AM Antor</b>
                <b>UI / UX Designer</b>
                <b>Web Developer</b>
              </span>
            </h1>
          </div>
        </div>
      </div>

      <div className="arrow bounce" data-scroll-nav="1">
        <img src="img/down-chevron.svg" alt="" />
      </div>
    </>
  );
};

export default Header;
