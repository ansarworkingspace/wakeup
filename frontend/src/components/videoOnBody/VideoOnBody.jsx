


// import React, { useRef, useEffect, useState } from 'react';
// import './VideoOnBody.css';

// const VideoOnBody = () => {
//   const videoRef = useRef(null);
//   const [isPlaying, setIsPlaying] = useState(false);

//   useEffect(() => {
//     const textOnVideo = document.querySelector('.textOnvideo h3');
//     textOnVideo.classList.add('show');
//   }, []);

//   useEffect(() => {
//     const afterVideoText = document.querySelector('.afterVideoText h3');
//     afterVideoText.classList.add('show');
//   }, []);

//   const togglePlay = () => {
//     const video = videoRef.current;

//     if (isPlaying) {
//       video.pause();
//     } else {
//       video.play();
//     }

//     setIsPlaying(!isPlaying);
//   };

//   useEffect(() => {
//     const video = videoRef.current;
//     video.play(); // Start playing the video automatically
//     setIsPlaying(true);

//     // Clean up function to pause the video when the component is unmounted
//     return () => {
//       video.pause();
//     };
//   }, []); // Empty dependency array ensures the effect runs only once, similar to componentDidMount

//   return (
//     <div className='VideoOnBodyDiv'>
//       <div className="textOnvideo">
//         <h3>Watch this video</h3>
//         <img src="leftArrow.png" alt="" />
//       </div>
//       <div className="videoFrame">
//         <video
//           ref={videoRef}
//           onClick={togglePlay}
//           controls={false}
//           width="87%"
//           height="95%"
//           muted
//           loop
//         >
//           <source src="mainIntro.mp4" type="video/mp4" />
//           Your browser does not support the video tag.
//         </video>
//       </div>
//       <div className="afterVideoText">
//         <img src="RightArrow.png" alt="" />
//         <h3>Follow the Process</h3>
//       </div>
//     </div>
//   );
// };

// export default VideoOnBody;

import React, { useRef, useEffect } from 'react';
import './VideoOnBody.css';

const VideoOnBody = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const textOnVideo = document.querySelector('.textOnvideo h3');
    textOnVideo.classList.add('show');
  }, []);

  useEffect(() => {
    const afterVideoText = document.querySelector('.afterVideoText h3');
    afterVideoText.classList.add('show');
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    video.play(); // Start playing the video automatically
    video.addEventListener('ended', () => {
      video.play(); // Loop the video when it ends
    });

    // Clean up function to remove event listener when the component is unmounted
    return () => {
      video.removeEventListener('ended', () => {});
    };
  }, []); // Empty dependency array ensures the effect runs only once, similar to componentDidMount

  return (
    <div className='VideoOnBodyDiv'>
      <div className="textOnvideo">
        <h3>Who we are?</h3>
        <img src="leftArrow.png" alt="" />
      </div>
      <div className="videoFrame">
        <video
          ref={videoRef}
          controls={false}
          width="87%"
          height="95%"
          muted
        >
          <source src="mainIntro.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="afterVideoText">
        <img src="RightArrow.png" alt="" />
        <h3>We are a community</h3>
      </div>
    </div>
  );
};

export default VideoOnBody;
