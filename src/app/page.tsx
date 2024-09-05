import Image from "next/image";
import reenrollment from '/public/re-enrollment/case.png';
import posgraduate from '/public/posgraduate/case.png';

export default function Home() {
  return (
    <main>
      <section className="space-y-7">
        <div className="text-center">
          <p className="title">Tadeu Garcia</p>
          <h1 className="font-light text-zinc-300"><span className="font-bold">Senior Product Designer</span> based in Rio de Janeiro🌴</h1>
        </div>
        <div className="flex space-x-2">
          <span className="chip">financial services</span>
          <span className="chip">payment systems</span>
          <span className="chip">e-commerce</span>
          <span className="chip">b2b and b2c saas</span>
          <span className="chip">front-end</span>
        </div>

        <video width="720" height="480" controls controlsList="nodownload" disablePictureInPicture preload="auto" 
          className="rounded-2xl shadow-2xl shadow-zinc-500/40">
          <source src="intro.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </section>

      <section id="case-studies" className="space-y-8">
          <div className="text-white text-center">
            <h2 className="title">Case studies</h2>
            <p>Relevant experience from recent years</p>
          </div>

          <div className="flex flex-row space-x-5">
            <a className="case-card hover:border-purple-500 hover:shadow-purple-500/40" href="/re-enrollment">
              <ul className="flex space-x-2">
                <li className="chip">usability testing</li>
                <li className="chip">user behavior analysis</li>
                <li className="chip">ui + prototyping</li>
              </ul>
              <Image src={reenrollment} alt="" width={500} height={300} />
              <div>
                <h3 className="case-title">Payment of outstanding fees</h3>
                <p>How I designed the re-enrollment flow, automating financial processes and <span className="underline decoration-2 decoration-purple-500">boosting debt clearance and re-enrollments.</span></p>
              </div>
            </a>

            <a className="case-card hover:border-yellow-500 hover:shadow-yellow-500/40" href="/posgraduate">
              <ul className="flex space-x-2">
                <li className="chip">desk research</li>
                <li className="chip">usability testing</li>
                <li className="chip">design system</li>
                <li className="chip">ui + prototyping</li>
              </ul>
              <Image src={posgraduate} alt="" width={500} height={300} />
              <div>
                <h3 className="case-title">Premium posgraduate redesign</h3>
                <p>I redesigned the postgraduate course purchase flow with a premium UI, <span className="underline decoration-2 decoration-yellow-500">achieving 57.14% faster navigation.</span></p>
              </div>
            </a>
          </div>        
      </section>
      
      <section id="about me" className="flex flex-row text-white">        
        <div className="basis-1/3 justify-center">
          <h2 className="title mb-10">About me</h2>
          <div className="flex flex-col space-y-4">
            <a href="https://www.linkedin.com/in/garciatadeu/" target="_blank" className="btn-link">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M247.54-268.46 220-296l403.23-404H251.54v-40h440v440h-40v-371.69l-404 403.23Z"/></svg>
              LinkedIn
            </a>
            <a href="https://github.com/tadeugarcia" target="_blank" className="btn-link">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M247.54-268.46 220-296l403.23-404H251.54v-40h440v440h-40v-371.69l-404 403.23Z"/></svg>
              GitHub
            </a>
            <a href="Tadeu Garcia - Resume.pdf" target="_blank" className="btn-link">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M247.54-268.46 220-296l403.23-404H251.54v-40h440v440h-40v-371.69l-404 403.23Z"/></svg>
              Resume
            </a>
            <a href="mailto:tadeugarcia.92@gmail.com" className="btn-link">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M247.54-268.46 220-296l403.23-404H251.54v-40h440v440h-40v-371.69l-404 403.23Z"/></svg>
              tadeugarcia.92@gmail.com
            </a>
            <a href="tel:+55 21 97997 6655" className="btn-link">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M247.54-268.46 220-296l403.23-404H251.54v-40h440v440h-40v-371.69l-404 403.23Z"/></svg>
              +55 21 97997 6655
            </a>
          </div>
        </div>

        <div className="basis-2/3">
          <div className="grid grid-cols-2 space-x-5 text-white">
            <div className="p-10 border rounded-2xl border-zinc-600">
              <h2 className="font-bold text-2xl mb-5"> 
                <span className="underline-blue">Code</span> and <span className="underline decoration-pink-500">acessibility</span>
              </h2>
              
              <div className="font-light space-y-5">
                <p>What sets me apart is my deep, <strong className="underline-blue">long-standing interest in understanding the inner workings of interfaces.</strong> Since I began working with interfaces in 2013, I&apos;ve always wanted to <strong className="underline-blue">collaborate closely with developers.</strong> In 2016, I took this passion further by starting to work on front-end development.</p>
                
                <p>In my previous role, one of the directors there, who was also a developer and <strong className="underline decoration-2 decoration-pink-500">a blind person,</strong> taught me 
                so much about accessibility: from <strong className="underline decoration-2 decoration-pink-500">best practices to using screen readers</strong>, it was an incredible learning with him.</p>
              </div>
            </div>

            <div className="p-10 border rounded-2xl border-zinc-600">
              <h2 className="font-bold text-2xl mb-5">More about Tadeu</h2>
              
              <ul className="font-light space-y-5">
                <li>✈️ Brazilian, obtaining Spanish (EU) citizenship by end-2024.</li>
                <li>🤖 AI enthusiast, using it daily for work and personal tasks.</li>
                <li>🌱 To proceed with the hipster designer checklist, I&apos;m vegetarian.</li>
                <li>🏊‍♂️ My current hobbies are swimming, board sports, yoga and meditation.</li>
                <li>🏆 Started designing in 2007 with an online forum signature contest.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
