"use client"
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div>
      <div className='container my-5'>
        <div className='row'>
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className='text-center py-4'
          >
            Giving Control Back To <span className='text-danger'>Influencers</span>
          </motion.h2>
          <div className='col-lg-6 mb-4'>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Image
                src="/mission.jpg"
                width={600}
                height={800}
                className="img-fluid rounded mx-auto"
                alt="..."
              />
            </motion.div>
          </div>
          <div className='col-lg-6 p-4'>
            <motion.h3
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className='mb-4'
            >
              Our Mission
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className='lh-lg fs-5'
            >
              At influencerkits, we believe creator data should be controlled by creators. As a creator, the way you pitch & present yourself online is the most important factor when building your business. influencerkits exists to support creators with the tools and products they need to thrive in the ever-growing creator economy. We are creator-first, always.
            </motion.p>
          </div>
        </div>
        <div className='row my-5 p-4'>
          <div className='col-lg-6 mb-4'>
            <motion.h3
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className='mb-4'
            >
              Our Story
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
              className='lh-lg fs-5'
            >
              The idea for influencerkits was born when a creator approached our co-founder, Kieran O'Brien, in desperate need for a media kit to showcase analytics to a brand they were working with. When Kieran realized no solution existed for creators to quickly & simply aggregate their analytics in an easily shareable format, he teamed up with our co-founder Casey Adams, and influencerkits was born.
            </motion.p>
          </div>
          <div className='col-lg-6'>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 1.2 }}
            >
              <Image
                src="/story.jpg"
                width={600}
                height={800}
                className="img-fluid rounded mx-auto"
                alt="..."
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
