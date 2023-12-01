import Link from "next/link";
import ScrollTop from "./scroll-top";

export default function FooterWhite() {
    return (
        <>
            {/* Start Footer */}
            <ScrollTop/>
            <footer className="main-footer background-image" data-image-src="assets/img/wall-sketch.png">
                <div className="container pt-4">
                    {/*<div className="row">*/}
                    {/*    <div className="col-sm-6 col-md-6 col-lg-4 col-xl-4 py-3 py-md-5 pe-xl-5 text-center">*/}
                    {/*        <div className="footer-about">*/}
                    {/*            <h3 className="fs-20 fw-semibold link-title mb-3 position-relative">Get My App</h3>*/}
                    {/*            <div className="bg-grey mb-3 d-inline-block">*/}
                    {/*                /!* Start Qr Code Image *!/*/}
                    {/*                <img src="assets/img/qr-code-white.png" className="figure-img img-fluid mb-0" height="146" width="146" alt="..." />*/}
                    {/*                /!* /End Qr Code Image *!/*/}
                    {/*            </div>*/}
                    {/*            <p>Scan qr code and download the app for your mobile.</p>*/}
                    {/*            <Link className="email-link d-block fw-medium mb-1" href="#"><i className="fa-solid fa-phone me-2"></i><span>(123) 456-7890</span></Link>*/}
                    {/*            <Link className="email-link d-block fw-medium" href="#"><i className="fa-solid fa-envelope me-2"></i><span>support@FindHusly.com</span></Link>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*    <div className="col-6 col-sm-6 col-md-6 col-lg-auto col-xl-2 py-3 py-md-5 flex-fill">*/}
                    {/*        <h3 className="fs-20 fw-semibold link-title mb-3 position-relative">Main Pages</h3>*/}
                    {/*        /!* /Start Footer Link  *!/*/}
                    {/*        <ul className="footer-link list-unstyled menu mb-0">*/}
                    {/*            <li className="mb-2"><Link href="/" className="link d-block">Footer Pages Link</Link></li>*/}
                    {/*            <li className="mb-2"><Link href="/" className="link d-block">Footer Pages Link</Link></li>*/}
                    {/*            <li className="mb-2"><Link href="/" className="link d-block">Footer Pages Link</Link></li>*/}
                    {/*            <li className="mb-2"><Link href="/" className="link d-block">Footer Pages Link</Link></li>*/}
                    {/*            <li className="mb-2"><Link href="/" className="link d-block">Footer Pages Link</Link></li>*/}
                    {/*            <li className="mb-2"><Link href="/" className="link d-block">Footer Pages Link</Link></li>*/}
                    {/*            <li className="mb-2"><Link href="/" className="link d-block">Footer Pages Link</Link></li>*/}
                    {/*        </ul>*/}
                    {/*        /!* /.End Footer Link  *!/*/}
                    {/*    </div>*/}
                    {/*    <div className="col-6 col-sm-4 col-md-4 col-lg col-xl-2 py-3 py-md-5">*/}
                    {/*        <h3 className="fs-20 fw-semibold link-title mb-3 position-relative">Connect with us</h3>*/}
                    {/*        /!* /Start Social Icon *!/*/}
                    {/*        <ul className="list-unstyled social-icon">*/}
                    {/*            <li>*/}
                    {/*                <Link href="#" className="align-items-center d-flex">*/}
                    {/*                    <div className="align-items-center bg-primary d-flex d-inline-block fs-19 icon-wrap justify-content-center me-3 rounded-2 text-center text-white inst"><i className="fab fa-instagram"></i></div>Instagram*/}
                    {/*                </Link>*/}
                    {/*            </li>*/}
                    {/*            <li>*/}
                    {/*                <Link href="#" className="align-items-center d-flex">*/}
                    {/*                    <div className="align-items-center bg-primary d-flex d-inline-block fs-19 icon-wrap justify-content-center me-3 rounded-2 text-center text-white twi"><i className="fab fa-twitter"></i></div>Twitter*/}
                    {/*                </Link>*/}
                    {/*            </li>*/}
                    {/*            <li>*/}
                    {/*                <Link href="#" className="align-items-center d-flex">*/}
                    {/*                    <div className="align-items-center bg-primary d-flex d-inline-block fs-19 icon-wrap justify-content-center me-3 rounded-2 text-center text-white dri"><i className="fab fa-dribbble"></i></div>Dribbble*/}
                    {/*                </Link>*/}
                    {/*            </li>*/}
                    {/*            <li>*/}
                    {/*                <Link href="#" className="align-items-center d-flex">*/}
                    {/*                    <div className="align-items-center bg-primary d-flex d-inline-block fs-19 icon-wrap justify-content-center me-3 rounded-2 text-center text-white fb"><i className="fab fa-facebook-f"></i></div>Facebook*/}
                    {/*                </Link>*/}
                    {/*            </li>*/}
                    {/*            <li>*/}
                    {/*                <Link href="#" className="align-items-center d-flex">*/}
                    {/*                    <div className="align-items-center bg-primary d-flex d-inline-block fs-19 icon-wrap justify-content-center me-3 rounded-2 text-center text-white whatsapp"><i className="fa-brands fa-whatsapp"></i></div>WhatsApp*/}
                    {/*                </Link>*/}
                    {/*            </li>*/}
                    {/*        </ul>*/}
                    {/*        /!* /.End Social Icon *!/*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                    <hr className="mb-0 mt-4" />
                    <div className=" d-flex flex-column">
                        {/* Start Sub Footer Nav */}
                        <ul className="list-unstyled list-separator mb-2 footer-nav aligncenter">
                            <li className="list-inline-item"><Link href="#">Privacy</Link></li>
                            <li className="list-inline-item"><Link href="#">Sitemap</Link></li>
                            <li className="list-inline-item"><Link href="#">Cookies</Link></li>
                            <li className="list-inline-item"><Link href="terms-conditions">Terms &amp; Conditions</Link></li>
                        </ul>
                        {/*  /. End Sub Footer Nav */}
                        <div className="align-items-center row">
                            {/* Start Footer Logo */}
                            {/* /.End Footer Logo  */}
                            {/* Start Copy Rights Text */}
                            <div className="col-sm-auto copy aligncenter">© 2023 Advanced LLC - All Rights Reserved</div>
                            {/* /.End Copy Rights Text */}
                        </div>
                    </div>
                </div>
            </footer>
            {/* /.End Footer */}
        </>
    );
}
