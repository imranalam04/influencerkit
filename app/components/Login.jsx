"use client"
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const Login = () => {
  return (
    <div className="container my-5">
      <div className="row justify-content-center align-items-center min-vh-100">
        <div className="col-lg-4">
          <motion.main
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="form-signin card p-5 shadow-lg"
          >
            <form>
              <div className="text-center mb-4">
                <motion.a
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  href="#"
                  className="fs-3 text-decoration-none"
                  style={{
                    fontFamily: 'cursive',
                    background: 'linear-gradient(to right, purple, blue)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    fontWeight: 'bold',
                  }}
                >
                  InfluencerKits
                </motion.a>
                <motion.h1
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="h3 mb-3 mt-4 fw-normal"
                >
                  Please sign in
                </motion.h1>
              </div>
             <div className="form-floating my-3">
               <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
               <label htmlFor="floatingInput">Email address</label>
             </div>
             <div className="form-floating">
               <input type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
               <label htmlFor="floatingPassword">Password</label>
             </div>

             <div className="checkbox mb-3 my-2">
               <label>
                 <input type="checkbox" value="remember-me"/> Remember me
               </label>
             </div>
             <Link className="w-100 btn btn-lg btn-primary" href="/make" type="submit">Sign in</Link>
             <p className="mt-4 mb-3 text-muted">&copy; {new Date().getFullYear()} InfluencerKits</p>
            </form>
          </motion.main>
        </div>
      </div>
    </div>
  );
}

export default Login;
