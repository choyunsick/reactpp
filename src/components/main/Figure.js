import React from 'react'

function Figure() {
  return (
    <div id="figure">
    {/* <video src="video/pexels-tima-miroshnichenko-6388436 (2160p).mp4" autoplay loop muted></video> */}

    <video muted autoPlay loop>
            <source src="/video/pexels-tima-miroshnichenko-6388436 (2160p).mp4" type="video/mp4" />
    </video>

    <div class="inner">
        <h2>My own training to make a refreshing day!</h2>
        <p>There is a saying that exercise is life and life is exercise,
            If you use exercise to train your body, you can heal your mind
            It also has an excellent effect on relieving stress.
        </p>
          <a href="https://www.canva.com/planners/templates/workout/">Now Let's make a plan!!</a>  
    </div>
</div>
  )
}

export default Figure