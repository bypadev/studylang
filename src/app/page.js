"use client"
import Header from "@/components/Header";
import Carousel from "@/components/corousel";
import FeaturesProperties from "@/components/feature-properties";
import FooterWhite from "@/components/footer-white";
import Dropdown from "@/components/form-control-two";
import ApiService from "@/ApiService";
import Link from "next/link";
import {useEffect} from "react";

export default function HomeTwo() {
  // const [universities, s etUniversities] = useState([]);
  useEffect( () => {
    ApiService.getUniversities({
      "country": null,
      "name": null,
      "code": null,
      "degree": null,
      "speciality": null,
      "program": null,
      "language": null,
      "period": null,
      "city": null,
      "feeMin": null,
      "feeMax": null,
      "currency": null,
      "sortBy": "asc",
      "freeText" : null,
      "pageNumber": 1,
      "pageSize": 150
    }).then( res => {
      console.log(res);
    })
  })
  return (
    <>
    <Header/>
     {/* Start Hero Header Two */}
     <div
        className="align-items-center d-flex hero-header hero-header__two overflow-hidden position-relative"
      >
          <img src="assets/img/png-img/section-bg.png" alt="" className="h-100 object-fit-cover position-absolute w-100 top-0"/>
        {/* Start Oblique */}
        <div className="d-md-block d-none h-100 oblique overflow-hidden position-absolute top-0">
        <img src="assets/img/header/02-1.jpg" alt="" className="h-100 object-fit-cover position-absolute w-100 oblique-image top-0"/>
          
        </div>
        {/* /.End Oblique */}
        <div className="container position-relative">
          <div className="row">
            <div className="col-lg-10 col-xl-10">
              {/* <p class="title-sm">BEAT TRAFFIC JAMS AND CLINIC QUEUES.</p> */}
              <div className="bg-soft-primary d-inline-block fw-medium mb-3 rounded-pill section-header__subtitle text-capitalize text-primary">
                Welcome To Studylandia
              </div>
              <h1 className="hero-header_title fw-bold mb-5 display-3">
                Find your <span className="underline position-relative text-primary">dream</span> university<br className="d-none d-md-block" /> in the best location
              </h1>
              {/* Start Main Search Content */}
              <Dropdown/>
              {/* /.End Main Search Content */}
            </div>
          </div>
          <div className="align-items-center g-xl-5 gx-3 gy-3 row mt-3">
            <div className="col-auto">
              <div className="align-items-center d-flex justify-content-center justify-content-md-start">
                <div className="work-icon me-3">
                  <i className="fas fa-map-marker-alt fs-33 text-primary" />
                </div>
                <div className="media-body">
                  <h5 className="fs-18 fw-semibold mb-0 work-title">
                    Apply program
                  </h5>
                  {/* <div class="work-sub_title text-muted">Lorem Ipsum is simply</div> */}
                </div>
              </div>
            </div>
            <div className="col-auto fs-18 p-0 text-primary">
              <i className="fa-solid fa-chevron-right" />
            </div>
            <div className="col-auto">
              <div className="align-items-center d-flex justify-content-center justify-content-md-start">
                <div className="work-icon me-3">
                  <i className="fas fa-igloo fs-30 text-primary" />
                </div>
                <div className="media-body">
                  <h5 className="fs-18 fw-semibold mb-0 work-title">
                    Get your dream university
                  </h5>
                  {/* <div class="work-sub_title text-muted">There are many variations</div> */}
                </div>
              </div>
            </div>
            {/*/.work-col*/}
          </div>
        </div>
      </div>

      {/* Start Articles Section */}
      {/*<div className="py-5">*/}
      {/*  <div className="container pb-5">*/}
      {/*    <div className="row">*/}
      {/*      <div className="col-md-10 offset-md-1">*/}
      {/*        /!* Start Section Header Title *!/*/}
      {/*        <div className="section-header text-center mb-5" data-aos="fade-down">*/}
      {/*          /!* Start Subtitle *!/*/}
      {/*          <div className="bg-soft-primary d-inline-block fw-medium mb-3 rounded-pill section-header__subtitle text-capitalize text-primary">*/}
      {/*            Our Latest Articles*/}
      {/*          </div>*/}
      {/*          /!* /. End Subtitle *!/*/}
      {/*          /!* Start Section Header title *!/*/}
      {/*          <h2 className="h1 fw-semibold mb-3 section-header__title text-capitalize">Browse our latest <span className="underline position-relative text-primary">articles</span> & news</h2>*/}
      {/*          /!* /.End Section Header Title *!/*/}
      {/*          /!* Start Section Header Sub Title *!/*/}
      {/*          <div className="sub-title fs-16">*/}
      {/*            It is a long established fact that a reader will be distracted by*/}
      {/*            the*/}
      {/*            <br className="d-none d-lg-block" /> readable content of a page*/}
      {/*            when looking at its layout.*/}
      {/*          </div>*/}
      {/*          /!* /.End Section Header Sub Title *!/*/}
      {/*        </div>*/}
      {/*      </div>*/}
      {/*    </div>*/}
      {/*   <Carousel/>*/}
      {/*  </div>*/}
      {/*</div>*/}
      {/* /. End Articles Section */}
      {/* Start Newslatter */}
      {/*<div className="bg-primary newslatter position-relative py-5 mx-3 mx-xl-5 rounded-4 position-relative overflow-hidden">*/}
      {/*  <div className="container p-4 position-relative z-1">*/}
      {/*    <div className="row">*/}
      {/*      <div className="col-md-10 offset-md-1">*/}
      {/*        /!* Start Section Header Title *!/*/}
      {/*        <div className="section-header text-center mb-5" data-aos="fade-down">*/}
      {/*          /!* Start Subtitle *!/*/}
      {/*          <div className="bg-white d-inline-block fw-medium mb-3 rounded-pill section-header__subtitle text-capitalize text-primary">*/}
      {/*            Our Latest Articles*/}
      {/*          </div>*/}
      {/*          /!* /. End Subtitle *!/*/}
      {/*          /!* Start Section Header title *!/*/}
      {/*          <h2 className="h1 fw-semibold mb-3 section-header__title text-capitalize text-white">*/}
      {/*            Want to join us?*/}
      {/*          </h2>*/}
      {/*          /!* /.End Section Header Title *!/*/}
      {/*          /!* Start Section Header Sub Title *!/*/}
      {/*          <div className="sub-title fs-16 text-white">*/}

      {/*            It is a long established fact that a reader will be distracted by*/}
      {/*            the*/}
      {/*            <br className="d-none d-lg-block" /> readable content of a page*/}
      {/*            when looking at its layout.*/}
      {/*          </div>*/}
      {/*          /!* /.End Section Header Sub Title *!/*/}
      {/*        </div>*/}
      {/*      </div>*/}
      {/*    </div>*/}
      {/*    <div className="row justify-content-center">*/}
      {/*      <div className="col-lg-10 col-xl-8">*/}
      {/*        <div className="row g-4 align-items-end newslatter-form">*/}
      {/*          <div className="col-sm">*/}
      {/*            /!* Start Form Group *!/*/}
      {/*            <div className="form-group">*/}
      {/*              <label className="text-white bg-primary fw-semibold">*/}
      {/*                Full Name*/}
      {/*              </label>*/}
      {/*              <input type="text" className="form-control bg-transparent" />*/}
      {/*            </div>*/}
      {/*            /!* /. End Form Group *!/*/}
      {/*          </div>*/}
      {/*          <div className="col-sm">*/}
      {/*            /!* Start Form Group *!/*/}
      {/*            <div className="form-group">*/}
      {/*              <label className="text-white bg-primary">Enter Email</label>*/}
      {/*              <input type="email" className="form-control bg-transparent" />*/}
      {/*            </div>*/}
      {/*            /!* /. End Form Group *!/*/}
      {/*          </div>*/}
      {/*          <div className="col-sm-auto">*/}
      {/*            /!* Start Button *!/*/}
      {/*            <button type="button" className="btn btn-lg btn-light w-100">*/}
      {/*              Join Now*/}
      {/*            </button>*/}
      {/*            /!* /. End Button *!/*/}
      {/*          </div>*/}
      {/*        </div>*/}
      {/*        /!* Start Text *!/*/}
      {/*        <small className="d-block mt-3 text-white text-center">*/}
      {/*          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni cum*/}
      {/*          consectetur alias laudantium dolore sunt quis similique!*/}
      {/*        </small>*/}
      {/*        /!* /. End Text *!/*/}
      {/*      </div>*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*  <div className="card-sketch">*/}
      {/*    <img*/}
      {/*      src="assets/img/png-img/house-sketch.png"*/}
      {/*      alt=""*/}
      {/*      className="card-sketch-image"*/}
      {/*    />*/}
      {/*  </div>*/}
      {/*</div>*/}
      {/* /.End Newslatter */}
      <FooterWhite/>
    </>
  );
}


