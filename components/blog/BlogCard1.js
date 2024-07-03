import Link from "next/link";

export default function BlogCard1({ item }) {
  return (
    <>
      <div className="col-lg-4 col-md-6 col-sm-10">
        <div className="blog-grid-item">
          <div className="blog-grid-thumb">
            <Link href={`/blog/${item.id}`}>
              <img src={`/assets/img/blog/${item.img}`} alt="" />
            </Link>
          </div>
          <div className="blog-grid-content">
            <span className="date">March 24, 2023</span>
            <h2 className="title">
              <Link href={`/blog/${item.id}`}>{item.title}</Link>
            </h2>
            {/* <p>
              As a writer, marketer, or business owner, you understand that
              creating engaging, high-quality content is crucial to building a
              successful brand.
            </p> */}
            {/* Additional Information Section */}
            <div className="additional-info">
              <div className="row">
                <div className="info-item col-6">
                  <i className="fas fa-ruler-horizontal"></i>{" "}
                  <span>2.2 miles</span>
                </div>
                <div className="info-item col-6">
                  <i className="fas fa-clock"></i> <span>30 minutes</span>
                </div>
              </div>
              <div className="row">
                <div className="info-item col-6">
                  <i className="fas fa-bed"></i> <span>4 Beds</span>
                </div>
                <div className="info-item  col-6">
                  <i className="fas fa-bath"></i> <span>2 Baths</span>
                </div>
              </div>
              <div className="row">
                <div className="info-item col-6">
                  <i className="fas fa-expand-arrows-alt"></i>{" "}
                  <span>1876 Sqft</span>
                </div>
                <div className="info-item col-6">
                  <i className="fas fa-dollar-sign"></i>{" "}
                  <span>$4800, Rent</span>
                </div>
              </div>
              <div className="info-item  col-6">
                <i className="fas fa-calendar-alt"></i> <span>May 1, 2024</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
