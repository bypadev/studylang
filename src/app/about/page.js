import Layout from "@/components/Layout";
import AboutVideoContainer from "@/components/about-video-container";
import ReusableCountUp from "@/components/counter";
import Link from "next/link";

export default function About() {
  return (
    <Layout>
      {/* Start Main Content */}
      <div className="main-content">
        <div className="border-bottom py-3">
          <div className="container">
            {/* Start Breadcrumbs */}
            <div className="row gy-2 gx-4 gx-md-5">
              <h4 className="col-auto fs-18 fw-semibold mb-0 page-title text-capitalize">
                About Us
              </h4>
              <div className="border-start col-auto">
                <ol className="align-items-center breadcrumb fw-medium mb-0">
                  <li className="breadcrumb-item d-flex align-items-center">
                    <Link href="/" className="text-decoration-none">
                      <i className="fa-solid fa-house-chimney-crack fs-18" />
                    </Link>
                  </li>
                  <li
                    className="breadcrumb-item d-flex align-items-center active"
                    aria-current="page"
                  >
                    About
                  </li>
                </ol>
              </div>
            </div>
            {/* End Breadcrumbs */}
          </div>
        </div>
        <div className="py-5">
          <div className="container py-4">
            <div className="row">
              <div className="col-xl-8 mb-5">
                {/* Start Title */}
                <h1 className="display-4 fw-bold">We <span className="underline position-relative text-primary">believe</span> in the success of every student.</h1>
                {/* /.End Title */}
                {/* Start Short Sescription */}
                <p className="fs-17 mb-0">
                  It is a long established fact that a reader will be distracted by
                  the readable content of a page when looking at its layout. The
                  point of using Lorem Ipsum is that it has
                </p>
                {/* /.End Short Sescription */}
              </div>
            </div>
            {/* Start Counter */}
            <div className="counter-content_about bg-soft-primary mb-5 rounded-3">
              <div className="row justify-content-center">
                <div className="col-lg-10">
                  <div className="g-4 justify-content-center row">
                    <div className="col-sm-6 col-xl-3 text-center">
                      <div className="display-4 fw-semibold numscroller text-primary justify-content-center d-flex gap-1">
                        <span className="counter"><ReusableCountUp separator=""
                            decimals={""}
                            decimal="" start={0} end={3000} /> </span>+
                      </div>
                      <h5 className="mt-3 mb-0">Properties Listed</h5>
                    </div>
                    <div className="col-sm-6 col-xl-3 text-center">
                      <div className="display-4 fw-semibold numscroller text-primary justify-content-center d-flex gap-1">
                        <span className="counter"> <ReusableCountUp separator=""
                            decimals={""}
                            decimal="" start={0} end={2500} /> </span>+
                      </div>
                      <h5 className="mt-3 mb-0">Satisfied Clients</h5>
                    </div>
                    <div className="col-sm-6 col-xl-3 text-center">
                      <div className="display-4 fw-semibold numscroller text-primary justify-content-center d-flex gap-1">
                        <span className="counter"><ReusableCountUp separator=""
                              decimals={1}
                              decimal="." start={0.0} end={6.8} /></span>B +
                      </div>
                      <h5 className="mt-3 mb-0">Total sales since 2023</h5>
                    </div>
                    <div className="col-sm-6 col-xl-3 text-center">
                      <div className="display-4 fw-semibold numscroller text-primary justify-content-center d-flex gap-1">
                        <span className="counter"><ReusableCountUp separator=""
                            decimals={""}
                            decimal="" start={0} end={593} /> </span>+
                      </div>
                      <h5 className="mt-3 mb-0">Total Agents</h5>
                    </div>
                  </div>
                </div>
              </div>
              {/* /.End Counter */}
            </div>
            {/* /. End Counter */}
            <div className="about-text align-items-center g-4 justify-content-between row">
              <div className="col-md-12 col-lg-7">
                <div className="row g-3 g-sm-4 align-items-center">
                  {/* Image */}
                  <div className="col-6">
                    <div className="position-relative">
                      <div className="line-shape" />
                      <img
                        src="assets/img/about/01.jpg"
                        className="img-fluid rounded-3 position-relative"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="row g-3 g-sm-4">
                      {/* Image */}
                      <div className="col-12">
                        <img
                          src="assets/img/about/02.jpg"
                          className="img-fluid rounded-3"
                          alt=""
                        />
                      </div>
                      {/* Image */}
                      <div className="col-12">
                        <img
                          src="assets/img/about/03.jpg"
                          className="img-fluid rounded-3"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-12 col-lg-5 ps-xxl-5">
                <div className="text-block">
                  <h6 className="fs-14 fw-bold heading-sm l-spacing-1 position-relative text-primary text-uppercase">
                    About
                  </h6>
                  <h2 className="mb-4">Lorem Ipsum is simply dummy text </h2>
                  <p className="mb-4">
                    It is a long established fact that a reader will be distracted
                    by the readable content of a page when looking at its layout.
                    The point of using Lorem Ipsum is that it has a more-or-less
                    normal distribution of letters, as opposed to using 'Content
                    here, content here', making it look like readable English. Many
                    desktop publishing packages and web page editors now use Lorem
                    Ipsum as their default model text, and a search for 'lorem
                    ipsum' will uncover many web sites still.
                  </p>
                  <ul className="list-checked mb-9 mb-md-10 ps-0">
                    <li>
                      It is a long established fact that a reader will be distracted
                      by the readable content of a page when looking.
                    </li>
                    <li>
                      The point of using Lorem Ipsum is that it has a more-or-less
                      normal distribution of letters.
                    </li>
                    <li>
                      Many desktop publishing packages and web page editors now use
                      Lorem Ipsum.
                    </li>
                  </ul>
                  <hr className="mt-5" />
                  <blockquote className="blockquote quote-text">
                    <p className="fst-italic mb-0">
                      “The mind has great influence over the body and maladies often
                      have their origin there.”
                    </p>
                    <cite className="fs-14 fw-semibold quote-attribution text-dark">
                      — John Doe Molicere
                    </cite>
                    <div className="mt-3 signature">
                      <img src="assets/img/signature.png" alt="" />
                    </div>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Start About Video Section */}
        <AboutVideoContainer/>
        {/* /. End About Video Section */}
      </div>
      {/* /. End Main Content */}


    </Layout>
  );
}