import React from 'react';
import Image from 'next/image';
import { FaCheckCircle } from 'react-icons/fa';

const Connected = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 my-3">
          <Image
            src="/connection.jpg"
            width={600}
            height={500}
            className="img-fluid rounded"
            alt="..."
          />
        </div>
        <div className="col-md-6">
          <h2 className="" style={{color:"#fc076f"}}>Connected Everywhere</h2>
          <h3 className="fs-2">Simple, secure API connections to top platforms</h3>
          <div className="row my-4">
            <div className="col-12 col-sm-6">
              <span className="">
                <FaCheckCircle className="text-success" /> Instagram
              </span>
            </div>
            <div className="col-12 col-sm-6">
              <span className="py-2">
                <FaCheckCircle className="text-success" /> Coming soon
              </span>
            </div>
            <div className="col-12">
              <span className="">
                <FaCheckCircle className="text-success" /> Coming soon
              </span>
            </div>
          </div>
          <div className="row my-5">
            <b>
              “I’ve closed over $8,000 in brand deals in under 3 weeks.
              When a brand contacts me, I just send them my link”
            </b>
            <div className="d-flex justify-content-start my-4">
              <Image
                src="https://picsum.photos/600/400"
                width={100}
                height={200}
                className="img-fluid rounded-circle"
                alt="..."
              />
              <span className="fs-6 p-4">
                <b className="p-3">Young Blood</b>
                <br />
                <span className="fs-6">YouTube Creator</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Connected;
