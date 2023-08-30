import React from 'react';
import Image from 'next/image';
import { FaCheckCircle } from 'react-icons/fa';

const AccurateData = () => {
  return (
    <div className="">
    <div className='container'>
      <div className="row">
        <div className="col-md-6 my-3">
          <Image
            src="/data.jpg"
            width={600}
            height={800}
            className="img-fluid rounded mx-auto"
            alt="..."
          />
        </div>
        <div className="col-md-6">
          <h2 className="" style={{color:"#fc076f"}}>Accurate Data</h2>
          <h3 className="fs-2">Pitch brands with confidence</h3>
          <div className="row my-4">
            <div className="col-12 col-sm-7 p-1">
              <span className="">
                <FaCheckCircle className="text-success" /> Always accurate data, verified by Influencerkit
              </span>
            </div>
            <div className="col-12 col-sm-6 p-1">
              <span className="py-2">
                <FaCheckCircle className="text-success" /> Updated automatically
              </span>
            </div>
            <div className="col-12 p-1">
              <span className="">
                <FaCheckCircle className="text-success" /> No more screenshots
              </span>
            </div>
          </div>
          <div className="row my-5">
            <b>
              "In the past I’ve had to edit my numbers whenever I reach out to brands.
              Now with InfluencerKits I don’t have to do all of the legwork and it’s awesome!"
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
                <b className="p-3">Jessica Doe</b>
                <br />
                <span className="fs-6">Twitch Streamer</span>
              </span>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AccurateData;
