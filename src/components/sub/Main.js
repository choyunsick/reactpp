import React from 'react'

function Main() {
  return (
<div id="main">
<div id="figure">
    {/* <video src="./video/figurevideo.mp4"></video> */}

    {/* <video muted autoPlay loop>
            <source src='./video/figurevideo.mp4'/>
    </video> */}

<video width="320" height="240" controls>
      <source src="./video/figurevideo.mp4" type="video/mp4" />
      브라우저가 video 태그를 지원하지 않습니다.
    </video>

    <div className="inner">
        <h2>My own training to make a refreshing day!</h2>
        <p>There is a saying that exercise is life and life is exercise,
            If you use exercise to train your body, you can heal your mind
            It also has an excellent effect on relieving stress.
        </p>
          <nav href="https://www.canva.com/planners/templates/workout/">Now Let's make a plan!!</nav>  
    </div>
</div>
<div id="visual">
    <ul className="panel">
        <li className="on">
        <img src={process.env.PUBLIC_URL + '/img/famous saying1.jpg' } alt="심장이 뛰는 사진" />
        </li>
        <li><img src={process.env.PUBLIC_URL + '/img/famous saying2.jpg' } alt="심장이 뛰는 사진" /></li>
        <li><img src={process.env.PUBLIC_URL + '/img/famous saying3.jpg' } alt="심장이 뛰는 사진" /></li>
        <li><img src={process.env.PUBLIC_URL + '/img/famous saying4.jpg' } alt="심장이 뛰는 사진" /></li>
    </ul>
    <ul className="btns">
        <li className="on"></li>
        <li></li>
        <li></li>
        <li></li>
    </ul>
    <nav>
        <i className="fa-solid fa-play on"></i>
        <i className="fa-solid fa-stop"></i>
    </nav>
    <div className="bar"></div>
</div>
<div id="news">
    <div className="inner">
        <h1>☞FITNESS NEWS☜</h1>
        <div className="wrap">
        </div>
    </div>
</div>
<div id="metro">
    <nav>
        <a href="#;" className="on">The need for exercise</a>
        <a href="#;">Science of fitiness</a>
        <a href="#">an example of a sense of accomplishment</a>
    </nav>

    <section id="News" className="on active">
        <article>
            <div className="inner">
                <img src={process.env.PUBLIC_URL + '/img/FITNESS news picture1' } alt="헬스장에서 운동하는 남자" />
            </div>
        </article>
        <article>
            <div className="inner">
                <h2>The need for exercise</h2>
                <p>Every January, many people visit the gym. In the new year, people decide 
                    to exercise and challenge with a new mindset, but not many people succeed 
                    in the challenge. What can be gained through exercise is various such as health,
                    body shape management, achievement, and pleasure. </p>
            </div>
        </article>
  
            <div className="inner">
                <i className="fa-solid fa-brain"></i>
            </div>
    </section>
    <section id="News2">
        <article>
            <div className="inner">
                <h2>Science of fitiness</h2>
                <p>Regular exercise strengthens the heart and lungs, so the cardiovascular
                    system increases the amount of oxygen delivered to the body whenever the heart beats,
                       </p>
                       <p className="quiz">
                        It's a quiz in a corner
                       Which direction does the female figure above look to turn? Clockwise? Counterclockwise? Each person looks in a different direction. Sometimes it just goes back and forth and doesn't look like it's spinning.
                       If you look clockwise, your right brain is developed, if you look counterclockwise, your left brain is developed
                       I want you to find out the characteristics of each person who has developed
                       </p>
            </div>
        </article>
        <article>
            <div className="inner">
                <h2>Corner Quiz</h2>
                <img className='rightleft' src={process.env.PUBLIC_URL + '/img/좌뇌 우뇌.gif' } alt="돌아가는 여인의 모습" />
            </div>
        </article>
        <article>
            <div className="inner">
                <img src={process.env.PUBLIC_URL + '/img/FITNESS news picture2.avif' } alt="과학 사진" />
            </div>
        </article>
    </section>
    <section id="News3">
        <article>
            <div className="inner">
                <img src={process.env.PUBLIC_URL + '/img/성취감을 주는 사진.jpg' } alt="계주에서 1등으로 들어오는 모습" />
            </div>
        </article>
        <article>
            <div className="inner">
                <h2>An example of a sense of accomplishment</h2>
                <p>3.9km swimming, 180.2km cycling, and 42.2km running. This is the "Iron Man" course, which is the most difficult
                     among triathlon. It is a breathtaking process that ordinary people cannot dare to dare to overcome human 
                     limitations. In fact, even those who exercise cannot hastily challenge without sufficient preparation.
                      However, there is a person who participates in such a fierce game every month.
                 </p>
            </div>
        </article>
        <article>
            <div className="inner"></div>
        </article>
    </section>
</div>
<div id="contain">
    <div className="container">
        <h1>FITNESS Asked Questions</h1>
        <div class="tab">

            <input type="radio" name="acc" id="acc1" />
            <label for="acc1">
                <h2><i class="fa-solid fa-person-walking"></i></h2>
                <h3>How do you exercise?</h3>
            </label>
            <div className="content">
                <p>There's no right answer to exercise, but there are two main ways There are aerobic and muscular exercises
                  To increase endurance, you need to do aerobic exercise. To increase muscle strength, you need to do weight training</p>
            </div>
        </div>
        <div className="tab">
            <input type="radio" name="acc" id="acc2" />
            <label for="acc2">
                <h2><i class="fa-regular fa-clock"></i></h2>
                <h3>What time of day is best to work out?</h3>
            </label>
            <div className="content">
                <p>The best time to work out is whenever you can fit it in! Have a look at your schedule and figure out what time of day is best for you.
                  If your routine is flexible, think about when you feel most energetic, or when you would prefer to exercise. Morning workouts can be an energising way to start the day for some, while others prefer working out in the afternoons or evenings. 
                  Consistency is what matters, so focus on working out when it works best for you, which will make it more enjoyable and easier to stick to! </p>
            </div>
        </div>
        <div className="tab">
            <input type="radio" name="acc" id="acc3" />
            <label for="acc3">
                <h2><i class="fa-solid fa-dumbbell"></i></h2>
                <h3>Do I need to warm up before my workouts?</h3>
            </label>
            <div className="content">
                <p>You bet! We know it can be tempting to get straight into it, especially if you’re short on time, but a proper warm-up is really important. 
                  According to the Mayo Clinic, warming up and cooling down may help reduce your risk of injury and improve performance. A good warm-up prepares your body for activity, raises your body temperature and increases blood flow to your muscles.
                  A simple warm-up can be five minutes of cardio or some dynamic stretching of the muscles you are about to use. Each workout in the Sweat app comes with optional warm-ups you can follow. </p>
            </div>
        </div>
        <div className="tab">
            <input type="radio" name="acc" id="acc4" />
            <label for="acc4">
                <h2><i class="fa-solid fa-heart-pulse"></i></h2>
                <h3>Should I do strength training, cardio or both</h3>
            </label>
            <div className="content">
                <p>We recommend a mixture of cardio and strength training.
                  Alternating between the two is a good way to find balance. 
                  Why both and not just one? Because you want to reap the benefits of each! 
                  According to the American Cancer Society, two to three strength-based workouts each week can result
                   in significant health benefits, such as increased muscle mass, stronger bones, boosted metabolism,
                    better posture, balance and joint flexibility. Research shows it also can boost heart health and have a
                    positive impact on your mental health.</p>
            </div>
        </div>
    </div>
</div>
<div id="banner">
        {/* <img src={process.env.PUBLIC_URL + '/img/banner5.png' } alt="런닝하는 사진" />   */}
    <div className="inner">  
        <h2>the beginning and the end of the day</h2>
        <p>Your standard of living will go up The first step to keep your body and mind healthy</p>
    </div>
</div>
</div>





  )
}

export default Main