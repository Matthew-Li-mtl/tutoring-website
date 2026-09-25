
import "./Page.css"
import "../assets/Fonts.css"
import { Link } from "react-router"


export default function Home() {
    return (
    <>
    <div className = "sitewide min-h-screen flex justify-center items-center">
      
      <div className="body">
        <div className="grid grid-flow-row grid-rows-auto grid-cols-4 md:grid-cols-6 w-[400px] md:w-[1080px] gap-y-4 gap-x-4 p-4">



          <div id="headshot" className="center container col-span-6 md:col-span-2 rounded-4xl p-8">
            <img className="rounded-full object-cover" src="headshot-rectangle.png"></img>
          </div>
          <div id="aboutMe" className="container col-span-6 md:col-span-4 rounded-4xl">
            <div className="content-container p-8">
              <h1 className="text-center fira-sans-black">About me</h1><br/>
              <p className="fira-sans-regular">
                Hi! I’m Matthew, computer science student at UCSB. It’s so great to finally meet you!
                <br />
                <br />
                In my two years of experience with private tutoring, I’ve taught four grades of math up to algebra 2. I also founded my school’s Competitive Programming Club, where for three years I worked one-on-one with students and gave short lectures.
                <br />
                <br />
                I’m currently looking to tutor high school math, including AP Precalculus and Calculus BC. I am also interested in tutoring AP Computer Science (Principles and A).
                <br />
                <br />
                In high school I took multivariable calculus, linear algebra, and discrete math through my local college. I’m confident that the same studying and test-taking strategies that helped me through these courses will create breakthroughs for you/your student, because they have before. I also scored a 5 across all 8 AP exams I took, including Computer Science A and Principles. I’ve crammed many times before for these, and I love sharing the strategies that made these possible! 
              </p>
            </div>
          </div>

          <div id="introVideo" className="container col-span-6 rounded-4xl">

          </div>

          <div id="aboutMyLessons" className="container col-span-6 rounded-4xl">
            <div className="content-container p-8">
              <h1 className="text-center fira-sans-black">About my lessons</h1><br/>
              <p className="fira-sans-regular">
                <ul className="bulleted">
                  <li>
                    My lessons are 100% student centered. I’ll always assess the student to meet them where they are. We’ll do the necessary practice and build strong foundations at the pace the student needs.
                  </li>
                  <li>
                    We’ll spend some time simulating tests and testing strategies to reduce the chance of missteps. 
                  </li>
                  <li>
                    Currently, I’m <a className="underline">primarily offering virtual sessions</a> through Google Meets or Zoom. I use tools like my tablet and Desmos to help show things, and photosharing through messages or email so the student can share their handwritten work. If you would like to work with me in person, feel free to reach out and I'd be more than happy to discuss it.
                  </li>
                  <li>
                    After every session, I’ll give you/your student a set of personalized notes, study resources, and/or targeted practice based on what we did that day. I know your studying time is limited, so I want to help you make the most of it.
                  </li>
                </ul>
              </p>
            </div>
          </div>

          <div className="center container col-span-6 rounded-4xl p-8">
            <h1 className="fira-sans-black">
              Pricing
            </h1>
          </div>

          <div className="center container col-span-6 md:col-span-2 rounded-4xl p-8">
            <p id="pricing1" className="fira-sans-semibold">$30/hour</p>
          </div>
          <div className="flex flex-col justify-center fira-sans-regular container col-span-6 md:col-span-4 rounded-4xl p-8">
            <p id="pricing2" className="text-left">First hour free!</p>
            <p>I'm confident that you'll find my service satisfactory. Let's meet up for a free one hour of consultation and tutoring.</p>
          </div>

          <div id="testimonial" className="container col-span-3 rounded-4xl">
            <div className="content-container p-8 !text-[16px]">
              <a className="fira-sans-black !text-[16px]">
                "
                <a className="fira-sans-regular !italic !text-[16px]">
                  I started having tutoring sessions with Matthew around the middle of seventh grade, when I was taking pre-algebra. I was struggling towards the end of the first semester, but after working with Matthew, my understanding for the material became stronger and I found more success on my exams. Matthew is really patient and he was very good at explaining things thoroughly.  He would also give me practice problems to prove that I understood the concepts. He was always super flexible with my schedule, and he would work on what I was struggling with or what I’d be tested on rather than having a set curriculum.  He was a great mentor and I often look back at the test prep bullet points he wrote for me on a sticky note.
                </a>
                "
              </a>
            </div>
          </div>
          <div id="testimonial" className="container col-span-3 rounded-4xl">
            <div className="content-container p-8 !text-[18px]">
              <a className="fira-sans-black !text-[18px]">
                "
                <a className="fira-sans-regular !italic !text-[18px]">
                  Matthew is a really great teacher! As someone who was under his guidance for three years, he has helped me learn a lot. Whenever he does lectures, he clarifies any questions excellently to help with understanding, and he is also great at explaining how to answer problems. In competitive programming club, he also helped us with problems during a competition and helped us understand the steps to the process. He is a great teacher and anyone he teaches is sure to learn a lot
                </a>
                "
              </a>
            </div>
          </div>

          <div id="faqlink" className="center container col-span-6 rounded-4xl p-4">
            <h1 className="fira-sans-semibold"><Link to="/faq" className="underline">Frequently asked questions</Link></h1>
          </div>

          <div id="contact" className="center container flex flex-col col-span-6 rounded-4xl p-8">
            <h2 className="fira-sans-bold">Feel free to reach out!</h2>
            <br />
            <a className="underline" href="mailto:matthewli.mtl@gmail.com">matthewli.mtl@gmail.com</a>
          </div>

          <div className="center col-span-6">
            <p className="gridFooter">This website was programmed by myself using react and tailwind. Check out my other coding projects <a className="gridFooter underline" href="https://github.com/Matthew-Li-mtl">here!</a></p>
          </div>

        </div>
      </div>
    </div>
    </>
    )
}