import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';


const Brand = () => {
  return (
    <div className='container'>
      <div className="row mx-3">
        <h3 className="my-5 text-center">Brand Collaborations</h3>
        <div className="col-lg-12 d-flex flex-wrap justify-content-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="custom-img py-1 rounded"
          >
            <Image
              src="/amazon.png"
              width={200}
              height={800}
                          className=" py-1 rounded"

              alt="Amazon"
              style={{ height: "4rem" }}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="custom-img py-1 rounded"
          >
            <Image
              src="/tinder.png"
              width={200}
              className='py-1'
              height={800}
              alt="Tinder"
              style={{ height: "4rem" }}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="custom-img py-1 rounded"
          >
            <Image
              src="/wr.png"
              width={200}
              height={800}
              alt="WR"
              style={{ height: "4rem" }}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="custom-img py-1 rounded"
          >
            <Image
              src="/rollingstone.png"
              width={200}
              className='py-1'
              height={800}
              alt="Rolling Stone"
              style={{ height: "4rem" }}
            />
          </motion.div>
        </div>
      
      
      </div>
    </div>
  );
}

export default Brand;
