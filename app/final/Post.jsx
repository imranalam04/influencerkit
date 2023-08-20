import Image from 'next/image'
import React from 'react'

const Post = () => {
  return (
    <div className='container'>
    <div className='row'>
    <h2 className='d-flex py-5'>Latest Instagram Post</h2>
    <div className='col-lg-12'>
    <ul className="list-group list-group-horizontal position-relative overflow-auto">
    <Image   src="https://picsum.photos/id/66/600/400"
    width={300}
    height={200}
    className="img-fluid "
    alt="..."/>
    <Image   src="https://picsum.photos/id/888/600/400"
    width={300}
    height={200}
    className="img-fluid "
    alt="..."/>
    <Image   src="https://picsum.photos/id/1/600/400"
    width={300}
    height={200}
    className="img-fluid "
    alt="..."/>
    <Image   src="https://picsum.photos/id/7/600/400"
    width={300}
    height={200}
    className="img-fluid "
    alt="..."/>
    <Image   src="https://picsum.photos/id/333/600/400"
    width={300}
    height={200}
    className="img-fluid "
    alt="..."/>
    <Image   src="https://picsum.photos/id/33/600/400"
    width={300}
    height={200}
    className="img-fluid "
    alt="..."/>
</ul>
    </div>
    </div>
  
    </div>
  )
}

export default Post