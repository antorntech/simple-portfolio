const Contact = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="section-head text-center col-sm-12">
            <h4>Contact Us</h4>
            <h6>Get In Touch</h6>
          </div>

          {/* <!-- Contact Form --> */}
          <div className="col-md-12">
            <form className="form" id="contact-form" method="post" action="#">
              <div className="messages"></div>

              <div className="controls">
                <div className="row">
                  <div className="col-md-4">
                    <div className="form-group">
                      <input
                        id="form_name"
                        type="text"
                        name="name"
                        placeholder="Name *"
                        required="required"
                        data-error="Firstname is required."
                      />
                      <div className="help-block with-errors"></div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group">
                      <input
                        id="form_email"
                        type="email"
                        name="email"
                        placeholder="Email *"
                        required="required"
                        data-error="Valid email is required."
                      />
                      <div className="help-block with-errors"></div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group">
                      <input
                        id="form_subject"
                        type="text"
                        name="subject"
                        placeholder="Subject"
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group">
                      <textarea
                        id="form_message"
                        name="message"
                        placeholder="Your Message *"
                        rows="4"
                        required="required"
                        data-error="Your message is required."
                      ></textarea>
                      <div className="help-block with-errors"></div>
                    </div>
                  </div>

                  <div className="col-md-12">
                    <button type="submit" className="butn butn-bg">
                      <span>Send Message</span>
                    </button>
                    <div className="info">
                      <span>
                        <strong>Email</strong> : am.antor11@gmail.com
                      </span>
                      <span>
                        <strong>Phone</strong> : +880 179 593 7735
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
