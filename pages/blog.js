import BlogPost from "@/components/blog/BlogPost";
import Layout from "@/components/layout/Layout";
import Link from "next/link";
import { useState } from "react";
export default function Blog() {
  const [activeIndex, setActiveIndex] = useState(1);
  const handleOnClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <>
      <Layout
        headerStyle={1}
        footerStyle={1}
        breadcrumbTitle={
          <>
            Listing <span>Page</span>
          </>
        }
      >
        <section className="blog-area pb-150">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="blog-tav-wrap">
                  <ul className="nav nav-tabs" id="myTab" role="tablist">
                    <li className="nav-item" onClick={() => handleOnClick(1)}>
                      <button
                        className={
                          activeIndex == 1 ? "nav-link active" : "nav-link"
                        }
                      >
                        Price
                      </button>
                    </li>
                    <li className="nav-item" onClick={() => handleOnClick(2)}>
                      <button
                        className={
                          activeIndex == 2 ? "nav-link active" : "nav-link"
                        }
                      >
                        Beds
                      </button>
                    </li>
                    <li className="nav-item" onClick={() => handleOnClick(3)}>
                      <button
                        className={
                          activeIndex == 3 ? "nav-link active" : "nav-link"
                        }
                      >
                        Pets
                      </button>
                    </li>
                    <li className="nav-item" onClick={() => handleOnClick(4)}>
                      <button
                        className={
                          activeIndex == 4 ? "nav-link active" : "nav-link"
                        }
                      >
                        Rental Types
                      </button>
                    </li>
                    <li className="nav-item" onClick={() => handleOnClick(5)}>
                      <button
                        className={
                          activeIndex == 5 ? "nav-link active" : "nav-link"
                        }
                      >
                        Near Transit
                      </button>
                    </li>
                  </ul>
                  <div className="tab-content" id="myTabContent">
                    <div className="blog-item-wrap">
                      <div className="row justify-content-center">
                        <div className="col-12">
                          {/* <div className="blog-item"> */}
                          {/* <div className="blog-content">
                              <span className="date">March 24, 2023</span>
                              <h2 className="title">
                                <Link href="/blog-details">
                                  Will I get caught using ChatGPT for my
                                  homework? Here's how to prevent AI detection
                                </Link>
                              </h2>
                              <p>
                                ChatGPT is a useful tool that can make your life
                                easier when used appropriately. If you're going
                                to use it, we recommend using it to assist your
                                work instead of relying on it entirely. For a
                                risk-free alternative,{" "}
                              </p>
                            </div> */}
                          {/* <div className="blog-img">
                              <Link href="/blog-details">
                                <img
                                  src="assets/img/blog/blog_img01.jpg"
                                  alt=""
                                />
                              </Link>
                            </div> */}
                          {/* </div> */}
                        </div>
                        <BlogPost showItem={12} showPagination />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
