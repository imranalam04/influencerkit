  import React from "react";
  import { FaInstagram } from "react-icons/fa";
  import { BiSolidUser } from "react-icons/bi";
  import { AiFillEye } from "react-icons/ai";
  import { BsGenderMale } from "react-icons/bs";
  import { FaCircle } from "react-icons/fa";

  const ThreeCard = () => {
    //  Followers <BiSolidUser className="mx-3 text-danger" />
    //  <p className="card-text fs-2 px-1 p-3">7,143,693</p>

    return (
      <div className='container'>
        <div className="row">
          <h3 className="my-5">
            <FaInstagram className="text-danger text-center" /> Instagram Overview
          </h3>  
          <div className="col-12 col-md-4 mb-3 mb-md-0 d-flex justify-content-center">
          <div className="card-container d-flex align-items-stretch">
            <div className="card shadow-lg border-dark p-5" style={{ height: "auto" }}>
              <div className="card-body text-center">
                <div className="row d-flex justify-content-center align-items-center">
                  <h5 className="card-title fs-4 p-3 font-weight-bold">
                    Followers <BiSolidUser className="mx-3 text-danger" />
                  </h5>
                </div>
                <p className="card-text fs-2 px-1 p-3">7,143,693</p>
              </div>
            </div>
          </div>
        </div>
          <div className="col-12 col-md-4 mb-3 mb-md-0 d-flex justify-content-center justify-content-between">
          <div className="card-container d-flex align-items-stretch">
            <div className="card shadow-lg border-dark p-5" style={{ height: "auto" }}>
              <div className="card-body text-center">
                <div className="row d-flex justify-content-center align-items-center">
                  <h5 className="card-title fs-4 p-3 font-weight-bold">
                    Total Reach <AiFillEye className="mx-3 text-danger" />
                  </h5>
                </div>
                <p className="card-text fs-2 px-1 p-3">2,827,685</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="col-12 col-md-4 mb-3 mb-md-0  justify-content-center justify-content-between d-flex">
  <div className="card-container d-flex align-items-stretch">
    <div className="card shadow-lg border-dark p-4" style={{ height: "auto" }}>
      <div className="card-body text-center">
        <div className="row d-flex justify-content-between align-items-center">
          <h5 className="card-title fs-4 p-3 font-weight-bold">
            Gender Distribution <BsGenderMale className="mx-3 text-danger" />
          </h5>
        </div>
        <div className="progress">
          <div
            className="progress-bar bg-danger"
            role="progressbar"
            style={{ width: "43%" }}
            aria-valuenow="43"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            43%
          </div>
        </div>
        <div className="progress my-1">
          <div
            className="progress-bar bg-info"
            role="progressbar"
            style={{ width: "8%" }}
            aria-valuenow="8"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            8%
          </div>
        </div>
        <div className="progress my-1">
          <div
            className="progress-bar bg-warning"
            role="progressbar"
            style={{ width: "49%" }}
            aria-valuenow="49"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            49%
          </div>
        </div>
        <div className="d-flex flex-column flex-md-row align-items-center justify-content-between mt-3">
          <div className="d-flex align-items-center mb-2 mb-md-0">
            <FaCircle className="py-1 my-md-0 text-danger mx-2"></FaCircle>
            <span className="py-2">Women</span>
          </div>
          <div className="d-flex align-items-center mb-2 mb-md-0">
            <FaCircle className="py-1 my-md-0 text-info mx-2"></FaCircle>
            <span className="py-2">Men</span>
          </div>
          <div className="d-flex align-items-center">
            <FaCircle className="py-1 my-md-0 text-warning mx-2"></FaCircle>
            <span className="py-2">Undisclosed</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

        
        </div>
      </div>
    );
  };

  export default ThreeCard;
