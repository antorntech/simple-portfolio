const Portfolio = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="section-head text-center col-sm-12">
            <h4>My Work</h4>
            <h6>Latest Projects</h6>
          </div>

          {/* <!-- filter links --> */}
          <div className="filtering text-center mb-30 col-sm-12">
            <span data-filter="*" className="active">
              All
            </span>
            <span data-filter=".react">React</span>
            <span data-filter=".vue">Vue</span>
            <span data-filter=".next">Next</span>
          </div>

          <div className="clearfix"></div>

          {/* <!-- gallery --> */}
          <div className="gallery text-center full-width">
            {/* <!-- gallery item --> */}
            <div className="col-md-6 col-lg-4 items">
              <div className="item-img">
                <img src="img/portfolio/1.jpg" alt="image" />
                <div className="item-img-overlay valign">
                  <div className="overlay-info full-width vertical-center">
                    <h6>ACares Medical Care</h6>
                    <p>Work description here</p>
                    <a href="https://acares.netlify.app/" target="_blank">
                      <button className="preview-btn">Live Preview</button>
                    </a>
                  </div>
                  <a href="img/portfolio/1.jpg" className="popimg">
                    <i className="fas fa-images"></i>
                  </a>
                </div>
              </div>
            </div>

            {/* <!-- gallery item --> */}
            <div className="col-md-6 col-lg-4 items vue">
              <div className="item-img">
                <img src="img/portfolio/2.jpg" alt="image" />
                <div className="item-img-overlay valign">
                  <div className="overlay-info full-width vertical-center">
                    <h6>ACares Admin</h6>
                    <p>Work description here</p>
                    <a href="https://acares-admin.netlify.app/" target="_blank">
                      <button className="preview-btn">Live Preview</button>
                    </a>
                  </div>
                  <a href="img/portfolio/2.jpg" className="popimg">
                    <i className="fas fa-images"></i>
                  </a>
                </div>
              </div>
            </div>

            {/* <!-- gallery item --> */}
            <div className="col-md-6 col-lg-4 items react">
              <div className="item-img">
                <img src="img/portfolio/3.jpg" alt="image" />
                <div className="item-img-overlay valign">
                  <div className="overlay-info full-width vertical-center">
                    <h6>Room Deco</h6>
                    <p>Work description here</p>
                    <a href="https://roomdeco.netlify.app/" target="_blank">
                      <button className="preview-btn">Live Preview</button>
                    </a>
                  </div>
                  <a href="img/portfolio/3.jpg" className="popimg">
                    <i className="fas fa-images"></i>
                  </a>
                </div>
              </div>
            </div>

            {/* <!-- gallery item --> */}
            <div className="col-md-6 col-lg-4 items react">
              <div className="item-img">
                <img src="img/portfolio/4.jpg" alt="image" />
                <div className="item-img-overlay valign">
                  <div className="overlay-info full-width vertical-center">
                    <h6>Go Xupport</h6>
                    <p>Work description here</p>
                    <a href="https://goxupport.netlify.app/" target="_blank">
                      <button className="preview-btn">Live Preview</button>
                    </a>
                  </div>
                  <a href="img/portfolio/4.jpg" className="popimg">
                    <i className="fas fa-images"></i>
                  </a>
                </div>
              </div>
            </div>

            {/* <!-- gallery item --> */}
            <div className="col-md-6 col-lg-4 items react">
              <div className="item-img">
                <img src="img/portfolio/5.jpg" alt="image" />
                <div className="item-img-overlay valign">
                  <div className="overlay-info full-width vertical-center">
                    <h6>Bookly</h6>
                    <p>Work description here</p>
                    <a
                      href="https://bookly-project-d23c0.firebaseapp.com/"
                      target="_blank"
                    >
                      <button className="preview-btn">Live Preview</button>
                    </a>
                  </div>
                  <a href="img/portfolio/5.jpg" className="popimg">
                    <i className="fas fa-images"></i>
                  </a>
                </div>
              </div>
            </div>

            {/* <!-- gallery item --> */}
            <div className="col-md-6 col-lg-4 items next">
              <div className="item-img">
                <img src="img/portfolio/6.jpg" alt="image" />
                <div className="item-img-overlay valign">
                  <div className="overlay-info full-width vertical-center">
                    <h6>Show On</h6>
                    <p>Work description here</p>
                    <a href="https://showon.netlify.app/" target="_blank">
                      <button className="preview-btn">Live Preview</button>
                    </a>
                  </div>
                  <a href="img/portfolio/6.jpg" className="popimg">
                    <i className="fas fa-images"></i>
                  </a>
                </div>
              </div>
            </div>

            {/* <!-- gallery item --> */}
            <div className="col-md-6 col-lg-4 items react">
              <div className="item-img">
                <img src="img/portfolio/7.jpg" alt="image" />
                <div className="item-img-overlay valign">
                  <div className="overlay-info full-width vertical-center">
                    <h6>Fit & Fitness</h6>
                    <p>Work description here</p>
                    <a
                      href="https://fit-and-fitness.netlify.app/"
                      target="_blank"
                    >
                      <button className="preview-btn">Live Preview</button>
                    </a>
                  </div>
                  <a href="img/portfolio/7.jpg" className="popimg">
                    <i className="fas fa-images"></i>
                  </a>
                </div>
              </div>
            </div>

            <div className="clear-fix"></div>
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

export default Portfolio;
