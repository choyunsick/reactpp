import React from 'react'
import { faBrain } from '@fortawesome/free-solid-svg-icons';




function Metro() {
  return (
    <div id="metro">
    <nav>
        <a href="#;" class="on">The need for exercise</a>
        <a href="#;">Science of fitiness</a>
        <a href="#">an example of a sense of accomplishment</a>
    </nav>

    <section id="News" class="on active">
        <article>
            <div class="inner">
                <img src={process.env.PUBLIC_URL + '/img/FITNESS news picture1' } alt="헬스장에서 운동하는 남자" />
            </div>
        </article>
        <article>
            <div class="inner">
                <h2>The need for exercise</h2>
                <p>Every January, many people visit the gym. In the new year, people decide 
                    to exercise and challenge with a new mindset, but not many people succeed 
                    in the challenge. What can be gained through exercise is various such as health,
                    body shape management, achievement, and pleasure. </p>
            </div>
        </article>
  
            <div class="inner">
                <i class="fa-solid fa-brain"></i>
            </div>
    </section>
    <section id="News2">
        <article>
            <div class="inner">
                <h2>Science of fitiness</h2>
                <p>Regular exercise strengthens the heart and lungs, so the cardiovascular
                    system increases the amount of oxygen delivered to the body whenever the heart beats,
                       </p>
                       <p class="quiz">
                        It's a quiz in a corner
                       Which direction does the female figure above look to turn? Clockwise? Counterclockwise? Each person looks in a different direction. Sometimes it just goes back and forth and doesn't look like it's spinning.
                       If you look clockwise, your right brain is developed, if you look counterclockwise, your left brain is developed
                       I want you to find out the characteristics of each person who has developed
                       </p>
            </div>
        </article>
        <article>
            <div class="inner">
                <h2>Corner Quiz</h2>
                <img className='rightleft' src={process.env.PUBLIC_URL + '/img/좌뇌 우뇌.gif' } alt="돌아가는 여인의 모습" />
            </div>
        </article>
        <article>
            <div class="inner">
                <img src={process.env.PUBLIC_URL + '/img/FITNESS news picture2.avif' } alt="과학 사진" />
            </div>
        </article>
    </section>
    <section id="News3">
        <article>
            <div class="inner">
                <img src={process.env.PUBLIC_URL + '/img/성취감을 주는 사진.jpg' } alt="계주에서 1등으로 들어오는 모습" />
            </div>
        </article>
        <article>
            <div class="inner">
                <h2>An example of a sense of accomplishment</h2>
                <p>3.9km swimming, 180.2km cycling, and 42.2km running. This is the "Iron Man" course, which is the most difficult
                     among triathlon. It is a breathtaking process that ordinary people cannot dare to dare to overcome human 
                     limitations. In fact, even those who exercise cannot hastily challenge without sufficient preparation.
                      However, there is a person who participates in such a fierce game every month.
                 </p>
            </div>
        </article>
        <article>
            <div class="inner"></div>
        </article>
    </section>
</div>
  )
}

export default Metro