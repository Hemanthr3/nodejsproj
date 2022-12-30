import Image from 'next/image'
import React from 'react'

const SingleEvent = ({data}) => {
  return (
     <div  >
    <h2>{data.title}</h2>
      <div style={{width:"100%",height:"500px"}}>
        <Image src={data.image} alt={data.title} width={1000} height={500} />
      </div>
      <p>{data.description}</p>
      <input/>
      <button>Submit</button>
    </div>
  )
  
}

export default SingleEvent