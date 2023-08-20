import React from 'react';

const Faq = () => {
  return (
    <div className='container'>
      <h2 className='text-center mb-4'>Frequently Asked Questions</h2>
      <div className='row'>
        <div className='col-md-6 col-lg-4 my-3'>
          <b className='fs-5'>Do you store my passwords?</b>
          <p>
            No, your passwords are never entered into influcerkit.com,
            all connections are done securely through the 1st party authentication window of each platform.
          </p>
        </div>
        <div className='col-md-6 col-lg-4 my-3'>
          <b className='fs-5'>Do you sell my data?</b>
          <p>
            No, we do not sell your data. Your information is treated with utmost privacy and security.
          </p>
        </div>
        <div className='col-md-6 col-lg-4 my-3'>
          <b className='fs-5'>How do you calculate engagement rate?</b>
          <p>
            Our engagement rate is calculated based on the total number of interactions (likes, comments, shares) on your content,
            divided by your follower count, and then multiplied by 100 to get the percentage.
          </p>
        </div>
      </div>
      <div className='row'>
        <div className='col-md-6 my-3'>
          <b className='fs-5'>Will Influencerkit help me land brand deals?</b>
          <p>
            Owning an Influencer kit gives you control over your brand, saves you time by automating updates,
            and increases client confidence by showcasing your audience and experience with verified data.
          </p>
        </div>
        <div className='col-md-6 my-3'>
          <b className='fs-5'>How often is my Influencerkit updated?</b>
          <p>
            Influencerkit is updated weekly for free users. Influencerkit is updated daily for pro users and enterprise users.
          </p>
        </div>
      </div>
      <div className='row'>
        <div className='col-lg-12'>
          <div className='card bg-primary my-4'>
            <div className='card-body text-white text-center'>
              <h3 className='fs-5'>Still have questions?</h3>
              <p>Can’t find the answer you’re looking for? Send our team a message!</p>
              <button className='btn btn-danger'>Contact Us</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Faq;
