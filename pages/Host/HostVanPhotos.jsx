import React from 'react'
import { useOutletContext } from 'react-router-dom'


const HostVanPhotos = () => {
    const { currentVan } = useOutletContext()
  
  return (
    <img src={currentVan.imageUrl} alt="" className="host-van-detail-image" height={300} />
  )
}

export default HostVanPhotos