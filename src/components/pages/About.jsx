import React from "react";

const AboutUs = () => {
  return (
    <div className="d-flex align-items-center justify-content-center vh-100 bg-light text-dark">
      <div className="container text-center p-5 shadow-lg rounded bg-white">
        <h1 className="display-3 text-primary mb-4">About ABC News</h1>
        <hr className="my-4" />
        <div className="row">
          <div className="col-md-12">
            <p className="lead">
              <strong>ABC News</strong> is a trusted source of news, providing
              comprehensive coverage of the latest stories, in-depth analysis,
              and expert commentary. Our mission is to keep you informed about
              what matters most to you—whether it's breaking news, political
              developments, business insights, or lifestyle trends.
            </p>
            <p className="lead">
              Established in <strong>2024</strong>, ABC News has grown to become
              a leading voice in the media industry. We are committed to
              delivering accurate, timely, and impartial news to our audience.
              Our team of experienced journalists works around the clock to
              bring you the facts you need to stay informed and engaged with the
              world around you.
            </p>
            <p className="lead">
              At <strong>ABC News</strong>, we believe in the power of
              journalism to inform and empower people. We are dedicated to
              maintaining the highest standards of integrity, transparency, and
              accountability in our reporting. Thank you for choosing ABC News
              as your go-to source for news and information.
            </p>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-md-12 d-flex justify-content-center">
            <a href="/" className="btn btn-primary btn-lg mx-2 shadow-sm">
              Learn More
            </a>
            <a
              href="/"
              className="btn btn-outline-secondary btn-lg mx-2 shadow-sm"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
