import Layout from "@/components/Layout";
import PopUpImageGallery from "@/components/magnific-pop-up-gallery";
import PropertySticky from "@/components/property-sticky";
import Link from "next/link";
import FormApply from "@/components/form-apply";

export default function PropertyDetails() {
    return (
        <Layout>
            {/* Start Main Content */}
            <div className="main-content">
                <div className="breadcrumb-wrap border-0 py-3">
                    <div className="container">
                        {/* Start Breadcrumbs */}
                        <div className="row gy-2 gx-4 gx-md-5">
                            <div className="col-auto">
                                {/* Start Back To Search */}
                                <Link
                                    href="properties-grid"
                                    className="align-items-center d-flex fw-medium text-primary"
                                >
                                    <i className="fa-solid fa-chevron-left me-1" />
                                    Back To Search
                                </Link>
                                {/* /. End Back To Search */}
                            </div>
                            <h4 className="border-start col-auto fs-18 fw-semibold mb-0 page-title text-capitalize">
                                Name of university
                            </h4>
                            <div className="border-start col-auto">
                                <ol className="align-items-center breadcrumb fw-medium mb-0">
                                    <li className="breadcrumb-item d-flex align-items-center">
                                        <Link href="#" className="text-decoration-none"> 
                                            <i className="fa-solid fa-house-chimney-crack fs-18" />
                                        </Link>
                                    </li>
                                    <li className="breadcrumb-item d-flex align-items-center">
                                        <Link href="#" className="text-decoration-none">
                                            Search
                                        </Link>
                                    </li>
                                    <li
                                        className="breadcrumb-item d-flex align-items-center active"
                                        aria-current="page"
                                    >
                                        Name of university
                                    </li>
                                </ol>
                            </div>
                        </div>
                        {/* End Breadcrumbs */}
                    </div>
                </div>
                <div className="border-bottom py-3">
                    <div className="container">
                        <FormApply/>
                    </div>
                </div>
            </div>
            {/* /. End Main Content */}
        </Layout>
    );
}