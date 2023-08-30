"use client"
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import './Linear.css'
import {AiFillFormatPainter } from 'react-icons/ai'

const Banner = () => {
  return (
    <div className="col-lg-12">
      <div
        id="intro"
        className="bg-image shadow-2-strong"
        style={{ backgroundImage: "url('cover.jpg')" }} 
      >
        <div
          className="mask bg-gradient-violet-blue "
          style={{ backgroundColor: "rgba(0, 0, 0, 1)", minHeight: "100vh" }}
        >
          <div className="container d-flex align-items-center justify-content-center text-center h-100 my-5">
            <div className="text-white my-5 py-5">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="mb-3"
              >
                The digital resume for{" "}
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8, duration: 0.5 }}
                >
                  <span className="" style={{color:"#fc076f"}}>Influencer's</span>
                </motion.span>
              </motion.h1>
              <p className="lead py-4">
                Elevate your brand with our all-in-one management system for
                creators, including customizable mediakits with transparent data
                and adaptive social links, tailored to fit your brand's
                identity.
              </p>
            </div>
          </div>
          <div className="container">
            <div className="row" style={{marginTop:"-5rem"}}>
              <div className="col-md-4 col-lg-4 my-3 d-flex">
                <div className="card rounded-3 shadow border-0 bg-gradient-violet-purple" style={{ backgroundColor: '#222', borderRadius: '15px',  width:"100%" }}>
                  <div className="card-body text-white text-center d-flex flex-column align-items-center">
                  <span className=" mx-5 px-5 ">
                  <AiFillFormatPainter className="fs-2 rounded-5 " style={{backgroundColor:"#fc076f"}}/>
                  </span>
                  <h4 className="text-white py-3" >Influencekits</h4>
                    <p className="card-text">
                    InfluencerKits is expanding to include new functionality and additional features you can’t get anywhere else!
                     </p>
                    <Link href="/about" className="btn text-white" style={{backgroundColor:"#fc076f"}}>
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-lg-4 my-3 d-flex">
                <div className="card rounded-3 shadow border-0 bg-gradient-violet-purple" style={{ backgroundColor: '#222', borderRadius: '15px',  width:"100%" }}>
                  <div className="card-body text-white text-center d-flex flex-column align-items-center">
                  <span className=" mx-5 px-5 ">
                  <AiFillFormatPainter className="fs-2 rounded-5 " style={{backgroundColor:"#fc076f"}}/>
                  </span>
                <h4 className="text-white py-3 text-center">Blogs</h4>
                    <p className="card-text">
                    InfluencerKits is expanding to include new functionality and additional features you can’t get anywhere else!
                     </p>
                    <Link href="/blog" className="btn text-white" style={{backgroundColor:"#fc076f"}}>
                     Coming Soon
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-lg-4 my-3 d-flex">
                <div className="card rounded-3 shadow border-0 bg-gradient-violet-purple" style={{ backgroundColor: '#222', borderRadius: '15px',  width:"100%" }}>
                  <div className="card-body text-white text-center d-flex flex-column align-items-center">
                  <span className=" mx-5 px-5 ">
                  <AiFillFormatPainter className="fs-2 rounded-5 " style={{backgroundColor:"#fc076f"}}/>
                  </span>
                  <h4 className="text-white py-3 text-center">Blogs</h4>
                    <p className="card-text">
                    InfluencerKits is expanding to include new functionality and additional features you can’t get anywhere else!
                     </p>
                    <Link href="/blog" className="btn text-white" style={{backgroundColor:"#fc076f"}}>
                      Go somewhere
                    </Link>
                  </div>
                </div>
              </div>
              {/* Repeat similar modifications for other columns */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
