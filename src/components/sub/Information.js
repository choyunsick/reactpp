import React from 'react'

function Information() {
    const logoURL = "./img/심장.jpg"
  return (
    <div className='Information'>
        
        <div className="inner">
            <h1>Fitiness Information <i className="fa-solid fa-angles-down"></i> </h1>
            <div className="section">
                <div className="pageitem">
                    <div className="col">
                        <h2>Aerobic Activity <i className="fa-solid fa-person-running"></i> </h2>
                            <p>The stronger the exercise, or the harder the exercise, the more energy it requires. In general,
                                 aerobic exercise is called aerobic exercise, which is light enough to cover all the energy required
                                  by aerobic metabolism.
                                aerobic activity. Also known as aerobic exercise or aerobics. Aerobic exercise literally refers to
                                 exercise that produces energy using inhaled oxygen and performs it using that energy. When energy 
                                 is needed, aerobic metabolism goes through a complex process of breathing oxygen through the
                                  respiratory system and then transporting it to the muscles through the circulatory system to
                                   produce energy, and the capacity of this process is limited, so it lacks the ability to quickly
                                    supply a lot of energy at once.</p>
                    </div>
                <div className="col">
                    <img src={process.env.PUBLIC_URL + '/img/심장.jpg'} alt="심장이 뛰는 사진" />
                </div>
                    </div>
                </div>
                

                <div className="section">
                    <div className="pageitem">
                        <h2>Jogging <i className="fa-solid fa-person-walking-arrow-right"></i> </h2>
                            <p>If you jog steadily, you will feel your legs such as thighs and calves strengthen and your 
                                basic physical strength will rise sharply. Moreover, running (running) such as jogging is an 
                                exercise that unexpectedly trains the upper body (3).
                                If an obese person who just started exercising maintains a posture and breathes evenly while 
                                exercising and jogging, that's why he gets muscle pain all over his body the next day.</p>
                                <p>Since I suddenly moved with an hour-long exercise, starting with the spinal cord standin
                                     muscles, the arm muscles and under the armpit, the thigh muscles and the shin muscles under
                                      the knee will scream the next day. There is a reason why running is always included in the 
                                      basic physical training course in any sport.[4]
                                    But let's not feel pressured. Jogging is a light running exercise. The standard speed of jogging
                                     is 45 seconds for 100 meters = 8 km/h [5]. It's only about twice the walking speed. The introduction
                                      mentioned that jogging is a sub-version of running, which has a standard speed of approximately
                                       200 meters per minute = 12 kilometers per hour.</p>

                                    {/* <div class="jog">
                                        <video src="./video/jogging.mp4" autoplay loop muted ></video>
                                    </div> */}
                                    <video muted autoPlay loop>
            <                               source src="./video/jogging.mp4" type="video/mp4" />
                                    </video>
                                      
                    </div>
                </div>
                
                <div className="section">
                    <div className="pageitem">
                        <div className="col">
                            <h2>Squat <i className="fa-solid fa-person-praying"></i> </h2>
                                <p> A squat is a strength exercise in which the trainee lowers their hips from a standing position 
                                    and then stands back up. During the descent, the hip and knee joints flex while the ankle joint
                                     dorsiflexes; conversely the hip and knee joints extend and the ankle joint plantarflexes when 
                                     standing up. Squats also help the hip muscles.
                                    </p>
                                    <p>Squats are considered a vital exercise for increasing the strength and size of the lower
                                         body muscles as well as developing core strength. The primary agonist muscles used during
                                          the squat are the quadriceps femoris, the adductor magnus, and the gluteus maximus.</p>
                        </div>
                    </div>
                </div>
                <div className="section">
                    <div className="pageitem">
                    <div className="col">
                    <h2>Weight-based exercise </h2>
                    <p> It is the most basic form of exercise among muscle exercises, and it is a muscle exercise that uses only one's own weight without using any special weight tools. For example, squats, lunge, push-ups, etc. are included. These exercises can exercise the maximum range of joint motion of the human body using only one's own weight as a load.</p>
                    </div>
                    <div className="col">
                    <h2>Machine-based exercise</h2>
                    <p>For muscle training, various machines such as a weight machine, a Smith machine, and a cable machine may be used. Machine-based exercise is suitable for beginners in muscle training. In addition to being able to perform safely and conveniently compared to free weight exercise, it also has the advantage of isolating and training the muscle group when it aims to strengthen weak muscles. However, the exercise effect is not greater than free weight exercise.</p>
                    </div>
                    <div className="col">
                    <h2>Free weight exercise</h2>
                    <p>Muscle strength exercises using dumbbells and barbells are called free weight muscle exercises. Free weight exercise has additional effects that cannot be achieved by machine tools alone in building muscles and strength. Proper handling of weight requires a lot of physical balance and stability, which can lead to the risk of injury, so it is most important to choose the appropriate weight for your body.</p>
                    </div>
                    </div>
                    </div>

                    <div className="section">
                        <div className="pageitem">
                            <div className="col">
                                <h2>Muscular Exercise  <i className="fa-solid fa-people-carry-box"></i> </h2>
                                <p>Muscular strength relates to your ability to move and lift objects. 
                                    It’s measured by how much force you can exert and how much weight you can lift for a short period of time.
                                    Examples of exercises that develop muscular strength and power include resistance training,
                                     such as weightlifting, bodyweight exercises, and resistance band exercises. Running, cycling,
                                      and climbing hills are also options.
                                    Read on to learn more about the difference between muscular strength and muscular endurance,
                                     as well as muscular strength benefits, cautions, and exercises.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        


   
  )
}

export default Information