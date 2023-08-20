"use client"
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const SignupForm = () => {
  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="card p-4 shadow-lg rounded-3"
        style={{ width: '400px' }}
      >
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-center fs-4 mb-4"
        >
          Welcome to InfluencerKits
        </motion.h2>
        <form>
          <div className="mb-3">
          <input type="text" className="form-control" placeholder="First Name" />
        </div>
        <div className="mb-3">
          <input type="text" className="form-control" placeholder="Last Name" />
        </div>
        <div className="mb-3">
          <input type="email" className="form-control" placeholder="Email" />
        </div>
        <div className="mb-3">
          <input type="password" className="form-control" placeholder="Password" />
        </div>
        <div className="mb-3">
          <input type="password" className="form-control" placeholder="Confirm Password" />
        </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="btn btn-primary w-100"
          >
           <Link href="/login" className='text-decoration-none text-white'>Get Started</Link> 
          </motion.button>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className='mt-3'
          >
            <span>Already signed up?</span>
            <Link href="/login" className='text-decoration-none'> login</Link>
          </motion.div>
        </form>
      </motion.div>
    </div>
  );
};

export default SignupForm;
