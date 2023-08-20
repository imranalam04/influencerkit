"use client"
import React from 'react'
import { motion } from "framer-motion";
import { FaInstagram } from "react-icons/fa";
import Image from 'next/image';


const Main = () => {
  return (
    <div>
    <div className="container">
    <div className="row">
      <div className="col-md-6">
        <motion.h1
          className="font-monospace"
          style={{ fontSize: "3rem" }}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          John Doe
        </motion.h1>
        <span className="fs-4">
          <FaInstagram className="text-danger"/>
          <span className="px-2" style={{ fontSize: "15px" }}>
            7.14m
          </span>
        </span>
        <div className="">
          <h3 className="py-3 my-2">About</h3>
          <p className="d-flex">
            John Doe Richards is a social media influencer, entrepreneur,
            musician, writer, actor, and host from a small town outside of
            Toronto with over 7 million followers on Instagram.
          </p>
        </div>
        <motion.button
          className="btn btn-block btn-danger my-4 rounded-pill"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          CONTACT ME
        </motion.button>
      </div>
      <div className="col-md-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src="/johndoe.jpg"
            width={600}
            height={800}
            className="img-fluid rounded mx-auto mt-5"
            alt="..."
          />
        </motion.div>
      </div>
    </div>
    </div>
    </div>
  )
}

export default Main