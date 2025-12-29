import React from 'react'
import squad from "../assets/images/squad.png"
import trophies2 from "../assets/images/trophies2.png"
import teaching from "../assets/images/teaching.png"
import teaching2 from "../assets/images/teaching2.png"

function About() {
  return (
    <>
      <section>
        <div>
          <img src={squad} alt="squad img" />
        </div>
      </section>
      <section>
        <div className='p-5'>
          <div>
            <h1>About RMFC</h1>
          </div>
        </div>
        <div className='flex'>
          <div>
            <img src={teaching} alt="img" />
          </div>
          <div>
            <h2>Our History</h2>
            <p><strong>RMFC Academy</strong> was founded with a clear vision: to create a strong foundation for young footballers by providing structured training, disciplined coaching, and a positive learning environment. What began as a small training initiative for passionate local players has steadily grown into a dedicated football academy focused on long-term player development.</p>
            <p>From the early days, RMFC Academy has emphasized the importance of mastering fundamentals, teamwork, and sportsmanship alongside competitive performance. Over the years, the academy has expanded its training programs, improved facilities, and adopted modern coaching methods to meet the evolving demands of the game.</p>
            <p>Today, RMFC Academy continues to develop young talent with a commitment to excellence, guiding players from grassroots football toward higher levels of competition while instilling confidence, discipline, and a lifelong love for the sport.</p>
          </div>
        </div>
        <div><h2>Trophies</h2></div>
        <div className='p-5 flex'>

          <div>
            <ul>
              <li>District Youth Football Championship : Winners</li>
              <li>Inter-Academy Football League : Champions</li>
              <li>Junior Football Development Cup :Winners</li>
              <li>Multiple age-group league titles (U-12, U-15, U-18)</li>
              <li>Players selected for district and state teams</li>
            </ul>

          </div>
          <div><img src={trophies2} alt="trophies img" /></div>
        </div>
        <div><h2>Coaching Techniques</h2></div>
        <div className='p-5 flex'>

          <div><img src={teaching2} alt="coaching img" /></div>
          <div>
            <p>At <strong>RMFC Academy</strong>, our coaching techniques focus on developing well-rounded footballers through a structured, player-centered approach. Training sessions emphasize technical skill development, tactical understanding, physical fitness, and mental discipline. Coaches use age-appropriate drills, match-based scenarios, and constructive feedback to help players improve confidence, decision-making, and teamwork. Our goal is to create a positive learning environment where players grow steadily, enjoy the game, and reach their full potential.</p>
          </div>
        </div>
      </section>

    </>
  )
}

export default About
