import React from 'react'

function Figure() {
  return (
    <div id="figure">
    {/* <video src="./video/figurevideo.mp4"></video> */}
    {/* <video src="video/figurevideo.mp4" autoplay loop muted></video> */}
    {/* <video src="/video/figurevideo" autoplay loop muted></video> */}
  
  
    {/* <video muted autoPlay loop>
            <source src='./video/figurevideo.mp4'/>
    </video> */}

{/* <video width="320" height="240" controls>
      <source src="./video/figurevideo.mp4" type="video/mp4" />
      브라우저가 video 태그를 지원하지 않습니다.
    </video> */}

    <div className="inner">
        <h2>My own training to make a refreshing day!</h2>
        <p>There is a saying that exercise is life and life is exercise,
            If you use exercise to train your body, you can heal your mind
            It also has an excellent effect on relieving stress.
        </p>
          <nav href="https://www.canva.com/planners/templates/workout/">Now Let's make a plan!!</nav>  
    </div>
</div>
  )
}

export default Figure