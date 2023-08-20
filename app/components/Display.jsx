import React from 'react';
import Link from 'next/link';
import { FiUser } from 'react-icons/fi';
import './Display.css';

const Display = () => {
  return (
    <div className='container'>
      <div className='row justify-content-center align-items-center min-vh-100'>
        <div className='col-12'>
          <div className='text-center'>
            <span className='d-flex justify-content-center fs-2 my-5'>Upload Your Headshot</span>
            <span className='text-center p-3'>
              <FiUser className='bg-secondary rounded' style={{ fontSize: '5rem' }} />
            </span>
          </div>
          <form className='px-3 responsive-form'>
            <div className='py-3'>
              <span className='d-flex justify-content-center fs-3 py-3'>URL Handle</span>
              <input
                type='text'
                className='form-control border-0 border-bottom rounded-0 border-dark small-input'
                placeholder='app.influencerkits.com/'
                defaultValue='app.influencerkits.com/'
                required
              />
            </div>
            <div className='py-3'>
            <span className='d-flex justify-content-center fs-3 py-3'>Display Name</span>
            <input
              type='text'
              className='form-control border-0 border-bottom rounded-0 border-dark small-input'
              placeholder='Display Name'
              required
            />
          </div>
          <div className='py-3'>
          <span className='d-flex justify-content-center fs-3 py-3'>Type Your Bio</span>
          <textarea
            cols='15'
            rows='5'
            className='form-control border-0 border-bottom rounded-0 border-dark small-input'
            placeholder='About'
            required
          />
        </div>
        <div className='py-3'>
        <span className='d-flex justify-content-center fs-3 py-3'>Tags</span>
        <input
          type='text'
          className='form-control border-0 border-bottom rounded-0 border-dark small-input'
          placeholder='Tags'
          required
        />
      </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Display;
