import React from "react";
import Image from "next/image";
import Link from "next/link";

const CardsGroup = () => {
  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-md-6 mb-4">
          <div
            className="card border-2 shadow"
            style={{
              background: "linear-gradient(to bottom, #FDF5E6, #FEE8D6)",
            }}
          >
            <div className="card-body">
              <h5 className="card-title text-primary">Influencer Kits</h5>
              <p className="card-text">
                InfluencerKits is expanding to include new functionality and
                additional features you can’t get anywhere else!
              </p>
              <Link href="/about" className="btn btn-outline-primary">
                Read More
              </Link>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card border-2 shadow">
            <div
              className="card-body"
              style={{
                background: "linear-gradient(to bottom, #FDF5E6, #FEE8D6)",
              }}
            >
              <h5 className="card-title text-primary">Creator Kits</h5>
              <p className="card-text">
                Coming Soon! An all-in-one management system just for creators
                like you! Stay updated!
              </p>
              <a href="#" className="btn btn-outline-primary">
                Coming Soon
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="row my-3">
        <div className="col">
          <h3 className="display-8 text-center my-3">
            <span className="text-danger">Creators </span>use InfluencerKits to
            grow their business{" "}
          </h3>
          <p className="fs-5 text-center my-2">
            “I love that my Influencer kit is always up to date with my latest
            content & stats when I need to send it out to a brand”
          </p>
          <div className="d-flex justify-content-center p-3">
            <Image
              src="https://picsum.photos/200/200"
              width={200}
              height={200}
              className="img-fluid rounded-circle"
              alt="..."
            />
          </div>
          <span className="d-flex justify-content-center p-auto fs-5">John Doe</span>
          <p className="d-flex justify-content-center ">Influencer, Investor, Actor, Musician</p>
        </div>
      </div>
    </div>
  );
};

export default CardsGroup;
