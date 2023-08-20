import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import Image from "next/image";

const Customization = () => {
  return (
    <div>
      <div className="container my-5">
        <div className="row">
          <div className="col-lg-6">
            <h2 className="text-danger">Customization</h2>
            <h3 className="">Control how brands see you online</h3>
            <div className="row my-4">
              <span className="">
                <FaCheckCircle className="text-success" /> Customize colors and
                branding
              </span>
              <span className="py-2">
                <FaCheckCircle className="text-success" /> Feature recent
                sponsors and press
              </span>
              <span className="">
                <FaCheckCircle className="text-success" /> Add custom widgets
              </span>
            </div>
            <div className="row my-5">
              <b>
                "InfluencerKits is easy to use and a great tool for creators looking
                to capture real time data. I love that it’s customizable, and
                keeps track of all of my content analytics across platforms."
              </b>
            </div>
            <div className="d-flex justify-content-start">
            <Image
              src="https://picsum.photos/600/400"
              width={100}
              height={200}
              className="img-fluid rounded-circle"
              alt="..."
            />
            <span className="fs-6 p-4"><b className="p-3">John Doe</b>
            <br/>
            <span className="fs-6">Tiktok Creator</span>
            </span>
          </div>
          </div>
          <div className="col-lg-6">
          <Image
          src="/influencer1.jpg"
          width={600}
          height={800}
          className="img-fluid rounded mx-auto mt-5"
          alt="..."
        />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customization;
