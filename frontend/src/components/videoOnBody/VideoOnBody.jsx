import React from 'react'
import './VideoOnBody.css'


const VideoOnBody = () => {
  return (
    <div className='VideoOnBodyDiv'>
      <div className="textOnvideo">
        <h3>Watch this video</h3>
        <img src="leftArrow.png" alt="" />
      </div>
      <div className="videoFrame">
        <img src="Phoneframe.png" alt="" />
        {/* video inside the image */}
      </div>
      <div className="afterVideoText">
      <img src="RightArrow.png" alt="" />
        <h3>Follow the Process</h3>
     
      </div>
    </div>
  )
}

export default VideoOnBody
