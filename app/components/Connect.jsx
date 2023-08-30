import React from "react";
import { FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa";
import Link from "next/link";

const Connect = () => {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-12 text-center my-5">
          <h1>Connect your social accounts</h1>
          <p className="fs-5"><b>Choose the accounts you want to add to your Influencerkit</b></p>
          <p><b>Connect a new account</b></p>
        </div>
        
        <div className="col-md-4 col-sm-6 col-12">
          <div className="square-card card  my-5  mx-5">
            <div className="card-body d-flex justify-content-center align-items-center">
              <Link href="/finalize">
                <FaInstagram style={{ fontSize: "6rem",marginRight:"30px" }} className="m-3" />
              </Link>
            </div>
          </div>
        </div>
        
        <div className="col-md-4 col-sm-6 col-12">
          <div className="square-card card my-5 mx-5">
            <div className="card-body d-flex justify-content-center align-items-center">
              <FaYoutube style={{ fontSize: "6rem" }} className="m-3" />
            </div>
          </div>
        </div>
        
        <div className="col-md-4 col-sm-6 col-12">
          <div className="square-card card my-5 mx-5">
            <div className="card-body d-flex justify-content-center align-items-center">
              <FaTwitter style={{ fontSize: "6rem" }} className="m-3" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Connect;
