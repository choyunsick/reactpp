import React from 'react'




function Slider() {
 

  return (
    <div id="visual">
    <ul class="panel">
        <li class="on">
        <img src={process.env.PUBLIC_URL + '/img/famous saying1.jpg' } alt="심장이 뛰는 사진" />
        </li>
        <li><img src={process.env.PUBLIC_URL + '/img/famous saying2.jpg' } alt="심장이 뛰는 사진" /></li>
        <li><img src={process.env.PUBLIC_URL + '/img/famous saying3.jpg' } alt="심장이 뛰는 사진" /></li>
        <li><img src={process.env.PUBLIC_URL + '/img/famous saying4.jpg' } alt="심장이 뛰는 사진" /></li>
    </ul>
    <ul class="btns">
        <li class="on"></li>
        <li></li>
        <li></li>
        <li></li>
    </ul>
    <nav>
        <i class="fa-solid fa-play on"></i>
        <i class="fa-solid fa-stop"></i>
    </nav>
    <div class="bar"></div>
</div>
  )
}

export default Slider