import React from "react";
import Image from "next/image";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import './Connect.css'; // Make sure to create this CSS file for your custom styles
import Link from "next/link";

const Connect = () => {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <h1 className="d-flex justify-content-center my-5">Connect your social accounts</h1>
        <span className="fs-5 d-flex justify-content-center"><b>choose the accounts you want to add to your Influencerkit</b></span>
        <b className="d-flex justify-content-center py-3">Connect a new account</b>
        <div className="col-md-4">
          <div className="square-card card my-5">
            <div className="card-body">
              <span className="icon-container">
               <Link href="/finalize">
               <FaInstagram style={{fontSize:"10rem"}} className="m-5"/>
               </Link> 
              </span>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="square-card card my-5">
            <div className="card-body">
              <span className="icon-container d-flex justify-content-center">
                <FaYoutube className="m-5" style={{fontSize:"10rem"}}/>
              </span>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="square-card card my-5">
            <div className="card-body">
              <span className="icon-container justify-content-center d-flex">
                <FaTwitter className="m-5" style={{fontSize:"10rem"}}/>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Connect;
