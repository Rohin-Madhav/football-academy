import React from 'react'
import academy from "../assets/images/academy building.png"
import trophies from "../assets/images/trophies.png"
import training from "../assets/images/training.png"
import coaching from "../assets/images/coaching.png"

function Home() {
  return (
    <div>
      <section>
        <div className='relative    w-full h-[80vh]'>
          <img src={academy} alt="academy" className='w-full h-full object-cover' />
          <div className="absolute inset-100 flex flex-col items-center justify-center text-white text-center  bg-black/40">
            <h1 className="text-4xl font-bold mb-4">We Promise</h1>
            <p className="max-w-2xl font-bold">
              Train with the best to shape the next generation of footballers, where
              passion meets performance from grassroots to greatness.
            </p>
          </div>
        </div>
      </section>
      <section>
        <div className='flex m-5'>
          <div>
            <h1>About RMFC</h1>
            <p>
              <strong>RMFC Academy </strong>is a dedicated football training academy focused on developing young talent through structured coaching, discipline, and modern training methods. We aim to nurture players at every level by building strong technical skills, tactical awareness, and confidence both on and off the field. At RMFC Academy, passion for the game meets professional guidance to help players grow from grassroots to competitive football.
            </p>
          </div>
          <div>
            <img src={trophies} alt="trophies" />
          </div>
        </div>
      </section>
      <section>
        <div className='flex m-5'>
          <div className='p-3'>
            <img src={coaching} alt="coaching image" />
          </div>
          <div className='p-3'>
            <img src={training} alt="training image" />
          </div>
        </div>
        <div>
          <h1>Training Method</h1>
          <p>Technical skill development and ball mastery</p>
          <p>Tactical understanding and game intelligence</p>
          <p>Fitness, strength, and endurance training</p>
          <p>Small-sided games and match scenarios</p>
          <p>Confidence, discipline, and teamwork building</p>
        </div>

      </section>

    </div>
  )
}

export default Home
