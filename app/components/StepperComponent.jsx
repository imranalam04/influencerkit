"use client"

import React, { useState } from 'react';
import Display from './Display'; 
import Connect from './Connect';
import { useRouter } from 'next/navigation';

const steps = ['display information', 'Connect socials', 'finalize'];

export default function StepperComponent() {
  const [activeStep, setActiveStep] = useState(0);
  const router = useRouter();

  const handleNext = () => {
    if(activeStep === steps.length - 2) {
      router.push('/finalize')
    }
    else{
      setActiveStep(prevStep => prevStep + 1);

    }

  };

  const handleBack = () => {
    setActiveStep(prevStep => prevStep - 1);
  };

  const renderStepComponent = () => {
    switch (activeStep) {
      case 0:
        return <DisplayInformationComponent />;
      case 1:
        return <ConnectSocialsComponent />;
     
      default:
        return null;
    }
  };

  return (
    <div>
    <div className='container'>
    <div className='row justify-content-center align-items-center min-vh-100' style={{ padding: '5%' }}>
      <div className='col-12'>
        <h1 className='fs-4 my-3 py-4' 
        >Create Influencerkit</h1>
        <main className='card p-5 shadow-lg'>
      <div className="stepper">
        {steps.map((label, index) => (
          <div key={label} className={`step ${activeStep === index ? 'active' : ''}`}>
            {label}
          </div>
        ))}
      </div>
      <div>
        {renderStepComponent()} {/* Render the appropriate component based on the active step */}
        <div className="d-flex pt-2">
          <button
            className="btn btn-secondary me-1"
            disabled={activeStep === 0}
            onClick={handleBack}
          >
           Go Back
          </button>
          <div className="flex-grow-1"></div>
          <button className="btn btn-primary" onClick={handleNext} >
            {activeStep === steps.length - 2 ? 'Do this later' : 'Next'}
          </button>
        </div>
      </div>
      </main>
      </div>
      </div>
      </div>
    </div>
  );
}

// Define the different step components
function DisplayInformationComponent() {
  return <Display/>;
}

function ConnectSocialsComponent() {
  return <Connect />;
}

function FinalizeComponent() {
  return <div>Finalize your settings</div>;
}
