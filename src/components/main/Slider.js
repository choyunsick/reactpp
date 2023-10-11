import React from 'react'




function Slider() {
 

  return (
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
  )
}

export default Slider