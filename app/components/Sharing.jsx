import Image from 'next/image'
import React from 'react'
import { FaCheckCircle } from 'react-icons/fa'


const Sharing = () => {
  return (
    <div>
    <div className="container my-5">
    <div className="row">
      <div className="col-lg-6">
        <h2 className="text-danger">Sharing</h2>
        <h3 className="">Distributing your media kit is just one click away</h3>
        <div className="row my-4">
          <span className="">
            <FaCheckCircle className="text-success" /> Share with the click of a button
          </span>
          <span className="py-2">
            <FaCheckCircle className="text-success" /> Download your Influencerkit as a PDF
          </span>
          <span className="">
            <FaCheckCircle className="text-success" /> Add to your hoo.be link in bio tool
          </span>
        </div>
        <div className="row my-5">
          <b>
          "Influencerkit is a seamless way to show real time data to other artists and brands that I collaborate with"
          </b>
        </div>
        <div className="d-flex justify-content-start">
        <Image
          src="https://picsum.photos/600/400"
          width={100}
          height={200}
          className="img-fluid rounded-circle"
          alt="..."
        />
        <span className="fs-6 p-4"><b className="">Peach Martine</b>
        <br/>
        <span className="fs-6">Music Artist</span>
        </span>
      </div>
      </div>
      <div className="col-lg-6">
      <Image
      src="/sharing.jpg"
      width={600}
      height={800}
      className="img-fluid rounded mx-auto mt-5"
      alt="..."
    />
      </div>
    </div>
  </div>
    </div>
  )
}

export default Sharing