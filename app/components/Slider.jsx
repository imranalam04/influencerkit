"use client"
import React from "react";
import { motion } from "framer-motion";

const Slider = () => {
  return (
    <div className="container ">
      <div className="container-fluid my-3">
        <div className="row">
          <div className="col">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-danger text-white text-center py-3 card shadow-lg"
              style={{ minHeight: "250px" }}
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="card-body"
              >
                <motion.h2
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="display-6"
                >
                  The digital resume for{" "}
                  <span className="text-dark typewriter-effect">Influencer's 💜</span>
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="lead py-4"
                >
                  Elevate your brand with our all-in-one management system for
                  creators, including customizable mediakits with transparent
                  data and adaptive social links, tailored to fit your brand's
                  identity.
                </motion.p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
