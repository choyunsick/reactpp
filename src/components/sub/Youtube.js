import { useRef } from 'react'

function Youtube() {
  const videoRef = useRef(null);
  const playVideo = () => {
    videoRef.current.play();
    console.log(videoRef.current);
  };

  const pauseVideo = () => {
    videoRef.current.pause();
    videoRef.current.remove();
  };

  return (
    <div className="Youtube">
    <div className='button'>
      <button onClick={playVideo}>시작</button>
      <button onClick={pauseVideo}>숨김</button>
    </div>
    <video ref={videoRef} width="100%" height="240" controls >
      <source
        type="video/mp4"
        src="https://player.vimeo.com/external/544643152.sd.mp4?s=7dbf132a4774254dde51f4f9baabbd92f6941282&profile_id=165"
      />
    </video>
  </div>
  );
};

export default Youtube