const Blog = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="section-head text-center col-sm-12">
            <h4>Our Blog</h4>
            <h6>Latest News</h6>
          </div>

          {/* <!-- Posts --> */}
          <div className="owl-carousel owl-theme col-sm-12">
            <div className="item mb-30">
              <div className="post-img">
                <img src="img/blog/1.jpg" alt="" />
              </div>
              <div className="content">
                <span>
                  <a href="#0">August 06 , 2017</a>
                </span>
                <span>/</span>
                <span>
                  <a href="#0">
                    <em>WordPress</em>
                  </a>
                </span>
                <h5>
                  <a href="#0">48 Best WordPress Themes</a>
                </h5>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and type
                  setting industry. Lorem Ipsum has been the dummy text ever
                </p>
                <a href="#0" className="more">
                  Continue Reading<i className="fas fa-angle-right"></i>
                </a>
              </div>
            </div>

            <div className="item">
              <div className="post-img">
                <img src="img/blog/2.jpg" alt="" />
              </div>
              <div className="content">
                <span>
                  <a href="#0">August 06 , 2017</a>
                </span>
                <span>/</span>
                <span>
                  <a href="#0">
                    <em>WordPress</em>
                  </a>
                </span>
                <h5>
                  <a href="#0">Managing Their Own Websites</a>
                </h5>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and type
                  setting industry. Lorem Ipsum has been the dummy text ever
                </p>
                <a href="#0" className="more">
                  Continue Reading<i className="fas fa-angle-right"></i>
                </a>
              </div>
            </div>

            <div className="item">
              <div className="post-img">
                <img src="img/blog/3.jpg" alt="" />
              </div>
              <div className="content">
                <span>
                  <a href="#0">August 06 , 2017</a>
                </span>
                <span>/</span>
                <span>
                  <a href="#0">
                    <em>WordPress</em>
                  </a>
                </span>
                <h5>
                  <a href="#0">Master These Awesome Skills</a>
                </h5>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and type
                  setting industry. Lorem Ipsum has been the dummy text ever
                </p>
                <a href="#0" className="more">
                  Continue Reading<i className="fas fa-angle-right"></i>
                </a>
              </div>
            </div>

            <div className="item">
              <div className="post-img">
                <img src="img/blog/2.jpg" alt="" />
              </div>
              <div className="content">
                <span>
                  <a href="#0">August 06 , 2017</a>
                </span>
                <span>/</span>
                <span>
                  <a href="#0">
                    <em>WordPress</em>
                  </a>
                </span>
                <h5>
                  <a href="#0">Managing Their Own Websites</a>
                </h5>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and type
                  setting industry. Lorem Ipsum has been the dummy text ever
                </p>
                <a href="#0" className="more">
                  Continue Reading<i className="fas fa-angle-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="se-tring se-tring-rev">
        <span className="left"></span>
        <span className="right"></span>
      </div>
    </>
  );
};

export default Blog;
