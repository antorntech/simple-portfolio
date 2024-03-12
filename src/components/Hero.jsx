/* eslint-disable react/no-unescaped-entities */

const Hero = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <div className="author-img">
              <img src="img/hero.jpg" alt="" />
            </div>
          </div>

          <div className="col-lg-7">
            <div className="content">
              <h4>I'm AM ANTOR</h4>
              <span>UI / UX Designer & Front-end Developer</span>
              <p>
                Lorem Ipsum <b>From USA</b> is simply dummy text of the printing
                and type setting industry. Lorem Ipsum has been the standard
                dummy text ever since.
              </p>
              <p>
                Lorem Ipsum is simply dummy text of the printing and type
                setting industry. Lorem Ipsum has been the industry's standard
                dummy text ever since the 1500s, when an unknown printer took a
                galley of type and scrambled it to make a type specimen book.
              </p>

              <div className="skills mt-50">
                <div className="skill-item">
                  <h6>
                    Web Design <span>90%</span>
                  </h6>
                  <div className="skills-progress">
                    <span data-value="90%"></span>
                  </div>
                </div>
                <div className="skill-item">
                  <h6>
                    Branding <span>80%</span>
                  </h6>
                  <div className="skills-progress">
                    <span data-value="80%"></span>
                  </div>
                </div>
                <div className="skill-item">
                  <h6>
                    Development <span>85%</span>
                  </h6>
                  <div className="skills-progress">
                    <span data-value="85%"></span>
                  </div>
                </div>
                <div className="skill-item">
                  <h6>
                    Marketing <span>70%</span>
                  </h6>
                  <div className="skills-progress">
                    <span data-value="70%"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="se-tring se-tring-gray">
        <span className="left"></span>
        <span className="right"></span>
      </div>
    </>
  );
};

export default Hero;
