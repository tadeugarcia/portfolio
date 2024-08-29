import Image from "next/image";
import reenrollment from '/public/re-enrollment/case.png';

export default function Home() {
  return (
    <main>
      <section>
        <div className="mb-7 text-center">
          <p className="title">Tadeu Garcia</p>
          <h1 className="font-light text-slate-300"><span className="font-bold">Senior Product Designer</span> based in Rio de Janeiro🌴</h1>
        </div>
        <div className="flex space-x-2">
          <span className="chip">
            b2b/b2c SaaS
          </span>
          <span className="chip">
            financial services
          </span>
          <span className="chip">
           payment systems
          </span>
          <span className="chip">
            e-commerce
          </span>
          <span className="chip">
            marketplace
          </span>
        </div>

        <video width="720" height="480" controls controlsList="nodownload" disablePictureInPicture preload="auto" 
        className="mt-12 rounded-xl shadow-2xl shadow-blue-900/50">
          <source src="intro.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <a href="#case-studies" className="animate-pulse mt-20 px-3 py-2 flex space-x-2 border rounded-lg border-blue-950 text-white font-light bg-slate-900">
          <span>View my case studies</span>
        </a>
      </section>

      <section id="case-studies">
          <div className="mb-20 text-white text-center">
            <h2 className="title">Case studies</h2>
            <p>Relevant experience from recent years</p>
          </div>

          <div className="flex flex-row space-x-5">
            <a className="case-card" href="re-enrollment">
              <ul className="flex space-x-2">
                <li className="chip">
                  financial services
                </li>
                <li className="chip">
                payment systems
                </li>
                <li className="chip">
                  b2b2c SaaS
                </li>
              </ul>

              <Image src={reenrollment} alt="" width={500} height={300} />

              <div>
                <h3 className="case-title">Payment of outstanding fees</h3>
                <p>How I designed the re-enrollment flow, automating financial processes and <span className="underline-blue">boosting re-enrollment</span> and debt clearance.</p>
              </div>
            </a>
            
            <a className="case-card" href="re-enrollment">
              <Image src={reenrollment} alt="" width={500} height={300} />

              <div>
                <h3 className="case-title">Payment of outstanding fees</h3>
                <p>Streamlining the process for students to pay outstanding tuition fees before re-enrolling for&nbsp;the&nbsp;next&nbsp;term.</p>
              </div>
            </a>
          </div>        
      </section>
      
      <section id="about me" className="flex flex-row text-white">        
        <div className="basis-1/3 justify-center">
          <h2 className="title mb-10">About me</h2>
          <div className="flex flex-col text-3xl font-extralight underline decoration-1 space-y-4">
            <a href="https://www.linkedin.com/in/garciatadeu/" target="_blank" className="w-fit hover:text-blue-500 transition duration-300 ease-in-out">
              LinkedIn
            </a>
            <a href="assets/resume/Tadeu_Garcia_Resume.pdf" target="_blank" className="w-fit hover:text-blue-500 transition duration-300 ease-in-out">
              Resume
            </a>
            <a href="mailto:tadeugarcia.92@gmail.com" className="w-fit hover:text-blue-500 transition duration-300 ease-in-out">
              tadeugarcia.92@gmail.com
            </a>
            <a href="tel:+55 21 97997 6655" className="w-fit hover:text-blue-500 transition duration-300 ease-in-out">
              +55 21 97997 6655
            </a>
          </div>
        </div>

        <div className="basis-2/3">
          <div className="grid grid-cols-2 space-x-5 text-white">
            <div className="p-12 border rounded-xl border-slate-600 bg-gray-950/75">
              <h2 className="font-bold text-xl mb-5"> <span className="underline-blue">Code</span> and <span className="underline decoration-pink-500">Acessibility</span></h2>
              
              <div className="font-light space-y-5">
                <p>What sets me apart is my deep, <strong className="underline-blue">long-standing interest in understanding the inner workings of interfaces.</strong> Since I began working with interfaces in 2013, I've always wanted to <strong className="underline-blue">collaborate closely with developers.</strong> In 2016, I took this passion further by starting to work on front-end development.</p>
                
                <p>In my previous role, one of the directors there, who was also a developer and <strong className="underline decoration-2 decoration-pink-500">a blind person,</strong> taught me 
                so much about accessibility: from <strong className="underline decoration-2 decoration-pink-500">best practices to using screen readers</strong>, it was an 
                incredible learning with him.</p>
              </div>
            </div>

            <div className="p-12 border rounded-xl border-slate-600 bg-gray-950/75">
              <h2 className="font-bold text-xl mb-5">More about Tadeu</h2>
              
              <ul className="font-light space-y-5 list-disc pl-4">
                <li>Brazilian, obtaining Spanish (EU) citizenship by end-2024.</li>
                <li>AI enthusiast, using it daily for work and personal tasks.</li>
                <li>To proceed with the hipster designer checklist, I'm vegetarian.</li>
                <li>My current hobbies are swimming, board sports, yoga and meditation.</li>
                <li>Started designing in 2007 with an online forum signature contest.</li>
              </ul>
            </div>
          </div>
          </div>
      </section>
    </main>
  );
}
