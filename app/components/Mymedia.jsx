import Link from 'next/link';
import React from 'react';

const Mymedia = () => {
  return (
    <div>
      <div className='container'>
        <div className='row justify-content-center align-items-center min-vh-100'>
          <div className='col-12'>
            <h1 className='fs-4 my-3'>My InfluencerKits</h1>
            <main className="card p-5 shadow-lg text-center">
              <span className='d-flex justify-content-center '>You haven't created an InfluencerKits yet</span>
              <div className='row p-4'>
                <div className='col-12 text-center'>
                <div className="row d-flex justify-content-center align-items-center" style={{width:"28%",marginLeft:"36%"}}>
                 <Link className='btn btn-primary btn-sm rounded-pill ' style={{ minWidth: '200px' }} href="/create">CREATE YOUR FIRST INFLUENCER KITS</Link>
                </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mymedia;
